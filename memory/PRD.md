# PANS Victoria - Product Requirements Document

## Project Overview
**Project Name:** PANS Victoria (Parent Advocacy & Navigation Service)  
**Type:** Advocacy/Support Website  
**Target Audience:** Parents navigating the child protection system in Victoria, Australia

## Original Problem Statement
- Redesign and improve existing PANS Victoria website
- Keep the existing purple color scheme
- Ensure images are suited to parent advocacy content  
- Make the website engaging
- Ensure all links work
- Fix the AI chat assistant
- Make contact form functional with email

## Tech Stack
- **Frontend:** React 19 + Vite 6 + TypeScript + Tailwind CSS v4
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **AI Integration:** Gemini 3 Flash via Emergent LLM Key
- **Email:** Resend (configured, needs API key)
- **Icons:** lucide-react
- **Animations:** motion library

## Core Features Implemented

### 1. Redesigned UI/UX
- Modern, calming design with purple color scheme (#7C6A96)
- New typography: Manrope (headings), DM Sans (body), Cormorant Garamond (quotes)
- High-quality, relevant Unsplash images for parent advocacy
- Smooth animations and transitions
- Glassmorphism effects

### 2. Navigation
- Sticky glassmorphism navbar with active section indicator
- Smooth scroll to all 9 sections
- Mobile-responsive hamburger menu

### 3. Sections
- Hero with compelling CTA
- "Start Here" quick access section  
- "Why Parents Contact PANS" with 3 key differentiators
- About PANS section with founder information
- Testimonials carousel (auto-rotating)
- "Who We Support" grid
- Support Services with 5 service cards
- "How It Works" 5-step timeline process
- "First 48 Hours" critical guide (glass card design)
- Resources with external links (Victoria Legal Aid, Children's Court, DFFH, Parentline)
- "Supporting PANS" community section
- Contact form with backend integration
- Footer with key information

### 4. AI Chat Assistant
- Floating chat button with pulse animation
- Chat window with message history
- Connected to Gemini 3 Flash via backend API
- System prompt configured for PANS context
- Non-legal advice disclaimer

### 5. Contact Form
- First name, last name, email, message fields
- Backend validation
- MongoDB storage of submissions
- Email notification (requires Resend API key)
- Success/error feedback

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `POST /api/chat` - AI chat messages

## What's Working
- Full website with all sections
- All navigation links
- Contact form submission (stored in MongoDB)
- AI chat assistant (powered by Gemini 3 Flash)
- External resource links
- Mobile responsive design

## Configuration Notes
- Backend URL: Configured in `/app/frontend/.env`
- Emergent LLM Key: Configured in `/app/backend/.env`
- Email: Resend API key placeholder in backend (needs real key for email delivery)

## Future Enhancements / Backlog

### P0 (Critical)
- None remaining

### P1 (High Priority)
- Add actual Resend API key for email notifications
- Add analytics tracking (Google Analytics or similar)

### P2 (Medium Priority)
- Admin dashboard for viewing contact submissions
- Blog/news section for updates
- Resource download center (PDF guides)
- Multi-language support

### P3 (Nice to Have)
- Appointment booking system
- Parent stories/success stories section
- Newsletter signup
- Social media integration

---
**Last Updated:** January 2026  
**Status:** MVP Complete
