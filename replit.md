# PANS Victoria - Parent Advocacy & Navigation Service

## Project Overview
A React + Vite + Express web application for PANS Victoria, a parent advocacy and navigation service focused on lived experience in the child protection system. The app features an AI assistant (Gemini), a contact form, story sharing, and rich informational content.

## Architecture

### Frontend
- **React 19** with TypeScript
- **Vite 6** as the build tool and dev server
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Motion** (Framer Motion) for animations
- **Google Gemini AI** (`@google/genai`) for AI chat and image generation

### Backend
- **Express** server (`server.ts`) that serves both API routes and Vite dev middleware
- **Nodemailer** for email sending via Gmail

### Key Files
- `server.ts` — Express server (port 5000), serves API + Vite middleware
- `src/App.tsx` — Main React application (all sections, navigation, images)
- `src/main.tsx` — React entry point
- `src/index.css` — Global styles + Tailwind theme (brand colors)
- `src/components/ChatWidget.tsx` — AI chat widget (gemini-2.5-pro / gemini-2.5-flash)
- `src/components/VoiceAssistant.tsx` — Live voice assistant (gemini-2.5-flash-native-audio)
- `src/services/imageService.ts` — Gemini image generation with Unsplash fallbacks

## API Endpoints
- `POST /api/contact` — Contact form submission (emails to ourvoicemattersaus@gmail.com)
- `POST /api/feedback` — AI assistant feedback (emails thumbs up/down)
- `POST /api/story` — Story submission from Lived Experience section (emails to admin)

## Environment Variables
Required secrets (configure in Replit Secrets panel):
- `GEMINI_API_KEY` — Google Gemini API key (for AI chat, TTS, image generation)
- `EMAIL_USER` — Gmail address for sending emails
- `EMAIL_PASS` — Gmail app password

## Image Strategy
- Hero image: Gemini-generated or Unsplash fallback (hands linking/holding)
- Founder image: Gemini-generated or Unsplash fallback (soft flowers)
- Who We Support section: Unsplash community support image
- All images work without the Gemini API key via Unsplash fallbacks

## Navigation Sections
Home → Lived Experience → About PANS → Who We Support → Support Services → Mental Health → How it Works → First 48 Hours → Resources → Supporting PANS → Contact

## Development
- Run: `npm run dev` (starts Express + Vite dev server on port 5000)
- Build: `npm run build` (Vite build to `dist/`)

## Deployment
- Target: **autoscale**
- Build command: `npm run build`
- Run command: `npx tsx server.ts`
- Port: 5000

## Notes
- Vite configured with `allowedHosts: true` and HMR on port 24679 for Replit proxy compatibility
- Server binds to `0.0.0.0:5000` for preview pane access
- All API features gracefully degrade without environment variables set
