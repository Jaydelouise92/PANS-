"""
PANS Victoria Backend Server
FastAPI backend for AI chat assistant and contact form
"""

import os
import uuid
import asyncio
import logging
from datetime import datetime, timezone
from typing import List, Optional
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import resend

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB setup
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "pans_victoria")

# Resend setup
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "support@pansvictoria.org.au")

if RESEND_API_KEY and RESEND_API_KEY != "re_your_api_key_here":
    resend.api_key = RESEND_API_KEY

# Emergent LLM setup
EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY", "")

# Database client
client = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    logger.info("Connected to MongoDB")
    yield
    client.close()
    logger.info("Disconnected from MongoDB")

app = FastAPI(title="PANS Victoria API", lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models ---

class ChatMessage(BaseModel):
    role: str  # 'user' or 'model'
    text: str

class ChatRequest(BaseModel):
    session_id: str
    message: str
    history: List[ChatMessage] = []

class ChatResponse(BaseModel):
    response: str
    session_id: str

class ContactRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    status: str
    message: str
    contact_id: Optional[str] = None

# --- Chat Endpoints ---

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Handle chat messages with AI assistant"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        # System message for the PANS assistant
        system_message = """You are a supportive, empathetic, and knowledgeable assistant for PANS (Parent Advocacy & Navigation Service Victoria). Your role is to help parents understand the child protection system in Victoria, Australia. 

Key guidelines:
- Provide clear, non-judgmental, and practical information
- Do NOT provide legal advice
- Always encourage seeking professional legal counsel or contacting PANS directly for personalized support
- Keep answers concise and easy to understand
- Be compassionate and understanding - these parents are often in crisis
- Format your response with basic markdown if helpful

You can help with:
- Explaining child protection processes in Victoria
- Understanding what to expect at Children's Court
- Preparing for meetings with Child Protection workers
- Understanding rights and responsibilities
- Finding resources and support services"""

        # Initialize chat with Emergent LLM
        chat_instance = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=request.session_id,
            system_message=system_message
        ).with_model("gemini", "gemini-3-flash-preview")
        
        # Add history to chat
        for msg in request.history:
            if msg.role == "user":
                user_msg = UserMessage(text=msg.text)
                # We add history but don't need the response for old messages
                await chat_instance.send_message(user_msg)
        
        # Send the current message
        user_message = UserMessage(text=request.message)
        response_text = await chat_instance.send_message(user_message)
        
        return ChatResponse(
            response=response_text,
            session_id=request.session_id
        )
        
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        # Fallback response
        return ChatResponse(
            response="I apologize, but I'm currently experiencing technical difficulties. Please try again later or contact PANS directly via the contact form for immediate assistance.",
            session_id=request.session_id
        )

# --- Contact Form Endpoints ---

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    """Handle contact form submissions"""
    try:
        # Generate contact ID
        contact_id = str(uuid.uuid4())[:8]
        
        # Store in database
        contact_doc = {
            "contact_id": contact_id,
            "first_name": request.first_name,
            "last_name": request.last_name,
            "email": request.email,
            "message": request.message,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        }
        
        await db.contacts.insert_one(contact_doc)
        logger.info(f"Contact form submitted: {contact_id}")
        
        # Try to send email notification
        email_sent = False
        if RESEND_API_KEY and RESEND_API_KEY != "re_your_api_key_here":
            try:
                html_content = f"""
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #7C6A96;">New Contact Form Submission</h2>
                    <p><strong>Contact ID:</strong> {contact_id}</p>
                    <p><strong>Name:</strong> {request.first_name} {request.last_name}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <h3 style="color: #7C6A96;">Message:</h3>
                    <p style="background: #F9F8FF; padding: 15px; border-radius: 8px;">{request.message}</p>
                    <hr style="border: 1px solid #B5A1D1; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">This message was sent via the PANS Victoria website contact form.</p>
                </div>
                """
                
                params = {
                    "from": SENDER_EMAIL,
                    "to": [RECIPIENT_EMAIL],
                    "subject": f"PANS Contact Form: {request.first_name} {request.last_name}",
                    "html": html_content,
                    "reply_to": request.email
                }
                
                await asyncio.to_thread(resend.Emails.send, params)
                email_sent = True
                logger.info(f"Email notification sent for contact: {contact_id}")
            except Exception as e:
                logger.warning(f"Email sending failed: {str(e)}")
        
        return ContactResponse(
            status="success",
            message="Thank you for reaching out. We have received your message and will get back to you within 24-48 hours.",
            contact_id=contact_id
        )
        
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form. Please try again.")

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "PANS Victoria API",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
