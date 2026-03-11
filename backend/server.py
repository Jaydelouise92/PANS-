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
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "yourvoicemattersaus@gmail.com")

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
        system_message = """You are a supportive, empathetic, and knowledgeable assistant for PANS (Parent Advocacy & Navigation Support Victoria). Your role is to help parents understand the child protection system in Victoria, Australia. 

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

# --- PDF Generation Endpoints ---

from fastapi.responses import StreamingResponse
from io import BytesIO
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, ListFlowable, ListItem
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT

# Brand colors
BRAND_PRIMARY = HexColor('#7C6A96')
BRAND_DARK = HexColor('#2D2438')
BRAND_LIGHT = HexColor('#F9F8FF')

@app.get("/api/downloads/first-48-hours")
async def download_first_48_hours_guide():
    """Generate and download the First 48 Hours Guide PDF"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4, rightMargin=2*cm, leftMargin=2*cm, topMargin=2*cm, bottomMargin=2*cm)
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=24, textColor=BRAND_PRIMARY, spaceAfter=20, alignment=TA_CENTER)
    subtitle_style = ParagraphStyle('Subtitle', parent=styles['Normal'], fontSize=12, textColor=BRAND_DARK, spaceAfter=30, alignment=TA_CENTER)
    heading_style = ParagraphStyle('CustomHeading', parent=styles['Heading2'], fontSize=16, textColor=BRAND_PRIMARY, spaceBefore=20, spaceAfter=10)
    body_style = ParagraphStyle('CustomBody', parent=styles['Normal'], fontSize=11, textColor=BRAND_DARK, spaceAfter=8, leading=16)
    bullet_style = ParagraphStyle('Bullet', parent=styles['Normal'], fontSize=11, textColor=BRAND_DARK, leftIndent=20, spaceAfter=6, leading=14)
    
    story = []
    
    # Title
    story.append(Paragraph("PANS Victoria", title_style))
    story.append(Paragraph("First 48 Hours Guide", title_style))
    story.append(Paragraph("What to do immediately after Child Protection involvement begins", subtitle_style))
    story.append(Spacer(1, 20))
    
    # Important Notice
    story.append(Paragraph("<b>Important Notice:</b> This guide provides general information only. It is not legal advice. Please seek legal assistance as soon as possible.", body_style))
    story.append(Spacer(1, 20))
    
    # Section 1
    story.append(Paragraph("1. Stay Calm and Listen", heading_style))
    story.append(Paragraph("The first moments are overwhelming, but try to stay as calm as possible.", body_style))
    story.append(Paragraph("• Take deep breaths before responding", bullet_style))
    story.append(Paragraph("• Listen carefully to what is being said", bullet_style))
    story.append(Paragraph("• Ask questions if you don't understand", bullet_style))
    story.append(Paragraph("• Don't sign anything without understanding it fully", bullet_style))
    
    # Section 2
    story.append(Paragraph("2. Gather Information", heading_style))
    story.append(Paragraph("Write down everything you can:", body_style))
    story.append(Paragraph("• Names and contact details of all workers present", bullet_style))
    story.append(Paragraph("• The date and time of the visit or call", bullet_style))
    story.append(Paragraph("• What was said (write it down as soon as possible)", bullet_style))
    story.append(Paragraph("• Any orders or documents provided", bullet_style))
    story.append(Paragraph("• Where your children are being placed", bullet_style))
    
    # Section 3
    story.append(Paragraph("3. Know Your Rights", heading_style))
    story.append(Paragraph("You have the right to:", body_style))
    story.append(Paragraph("• Know the reasons for Child Protection's involvement", bullet_style))
    story.append(Paragraph("• Receive copies of any orders made", bullet_style))
    story.append(Paragraph("• Seek legal advice and representation", bullet_style))
    story.append(Paragraph("• Have contact with your children (unless court orders say otherwise)", bullet_style))
    story.append(Paragraph("• Participate in decisions about your children's care", bullet_style))
    
    # Section 4
    story.append(Paragraph("4. Seek Legal Help Immediately", heading_style))
    story.append(Paragraph("Contact these services as soon as possible:", body_style))
    story.append(Paragraph("• Victoria Legal Aid: 1300 792 387", bullet_style))
    story.append(Paragraph("• Your local Community Legal Centre", bullet_style))
    story.append(Paragraph("• A private family lawyer if you can afford one", bullet_style))
    
    # Section 5
    story.append(Paragraph("5. Prepare for Court", heading_style))
    story.append(Paragraph("A court hearing will likely happen within days:", body_style))
    story.append(Paragraph("• The first hearing is usually a 'mention' - a brief appearance", bullet_style))
    story.append(Paragraph("• You should have legal representation if at all possible", bullet_style))
    story.append(Paragraph("• Bring any documents or evidence you have gathered", bullet_style))
    story.append(Paragraph("• Dress respectfully and arrive early", bullet_style))
    
    # Contact PANS
    story.append(Spacer(1, 30))
    story.append(Paragraph("Need Support?", heading_style))
    story.append(Paragraph("PANS Victoria provides navigation support for parents. Contact us:", body_style))
    story.append(Paragraph("Email: support@pansvictoria.org.au", body_style))
    story.append(Paragraph("Website: pansvictoria.org.au", body_style))
    
    # Footer
    story.append(Spacer(1, 40))
    story.append(Paragraph("© 2026 Parent Advocacy and Navigation Support Victoria", ParagraphStyle('Footer', parent=styles['Normal'], fontSize=9, textColor=HexColor('#718096'), alignment=TA_CENTER)))
    
    doc.build(story)
    buffer.seek(0)
    
    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": "attachment; filename=PANS_First_48_Hours_Guide.pdf"}
    )

@app.get("/api/downloads/timeline-template")
async def download_timeline_template():
    """Generate and download a Timeline Template PDF"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4, rightMargin=1.5*cm, leftMargin=1.5*cm, topMargin=2*cm, bottomMargin=2*cm)
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=22, textColor=BRAND_PRIMARY, spaceAfter=10, alignment=TA_CENTER)
    subtitle_style = ParagraphStyle('Subtitle', parent=styles['Normal'], fontSize=11, textColor=BRAND_DARK, spaceAfter=20, alignment=TA_CENTER)
    heading_style = ParagraphStyle('CustomHeading', parent=styles['Heading2'], fontSize=14, textColor=BRAND_PRIMARY, spaceBefore=15, spaceAfter=8)
    body_style = ParagraphStyle('CustomBody', parent=styles['Normal'], fontSize=10, textColor=BRAND_DARK, spaceAfter=6)
    
    story = []
    
    # Title
    story.append(Paragraph("PANS Victoria", title_style))
    story.append(Paragraph("Case Timeline Template", title_style))
    story.append(Paragraph("Use this template to track important events, meetings, and communications", subtitle_style))
    
    # Instructions
    story.append(Paragraph("How to Use This Template", heading_style))
    story.append(Paragraph("Record every interaction with Child Protection, court dates, and important events. Keep this document updated and bring it to all meetings and court appearances.", body_style))
    story.append(Spacer(1, 10))
    
    # Timeline Table
    story.append(Paragraph("Event Log", heading_style))
    
    # Create table with empty rows
    table_data = [
        ["Date", "Time", "Event/Contact", "People Present", "Notes/Outcomes"],
    ]
    
    # Add 15 empty rows for the user to fill in
    for i in range(15):
        table_data.append(["", "", "", "", ""])
    
    table = Table(table_data, colWidths=[2.5*cm, 1.8*cm, 4.5*cm, 3.5*cm, 5*cm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BRAND_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#FFFFFF')),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#B5A1D1')),
        ('ROWHEIGHT', (0, 1), (-1, -1), 1.2*cm),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(table)
    
    story.append(Spacer(1, 20))
    
    # Key Contacts Section
    story.append(Paragraph("Key Contacts", heading_style))
    
    contacts_data = [
        ["Role", "Name", "Phone", "Email"],
        ["Child Protection Worker", "", "", ""],
        ["Supervisor", "", "", ""],
        ["Lawyer", "", "", ""],
        ["Support Person", "", "", ""],
        ["Other", "", "", ""],
    ]
    
    contacts_table = Table(contacts_data, colWidths=[4*cm, 4.5*cm, 3.5*cm, 5.5*cm])
    contacts_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BRAND_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#FFFFFF')),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#B5A1D1')),
        ('ROWHEIGHT', (0, 1), (-1, -1), 0.9*cm),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(contacts_table)
    
    story.append(Spacer(1, 20))
    
    # Important Dates
    story.append(Paragraph("Upcoming Important Dates", heading_style))
    
    dates_data = [
        ["Date", "Event Type", "Location", "Notes"],
        ["", "Court Hearing", "", ""],
        ["", "Case Plan Meeting", "", ""],
        ["", "Contact Visit", "", ""],
        ["", "Service Appointment", "", ""],
        ["", "", "", ""],
    ]
    
    dates_table = Table(dates_data, colWidths=[3*cm, 4.5*cm, 4.5*cm, 5.5*cm])
    dates_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BRAND_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#FFFFFF')),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#B5A1D1')),
        ('ROWHEIGHT', (0, 1), (-1, -1), 0.9*cm),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(dates_table)
    
    # Footer
    story.append(Spacer(1, 30))
    story.append(Paragraph("© 2026 Parent Advocacy and Navigation Support Victoria | support@pansvictoria.org.au", ParagraphStyle('Footer', parent=styles['Normal'], fontSize=8, textColor=HexColor('#718096'), alignment=TA_CENTER)))
    
    doc.build(story)
    buffer.seek(0)
    
    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": "attachment; filename=PANS_Timeline_Template.pdf"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
