# PANS Victoria - Parent Advocacy & Navigation Service

## Project Overview
A React + Vite + Express web application for PANS Victoria, a parent advocacy and navigation service focused on lived experience in the child protection system. The app features an AI assistant (Gemini), a contact form, and rich informational content.

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
- **better-sqlite3** (dependency, available if needed)

### Key Files
- `server.ts` — Express server (port 5000 in dev, serves API + Vite middleware)
- `src/App.tsx` — Main React application (large single-file app)
- `src/main.tsx` — React entry point
- `src/index.css` — Global styles
- `src/components/ChatWidget.tsx` — AI chat widget component
- `src/components/VoiceAssistant.tsx` — Voice assistant component
- `src/services/imageService.ts` — Gemini image generation service
- `vite.config.ts` — Vite configuration (allowedHosts: true, port 5000, host 0.0.0.0)

## Environment Variables
Required secrets (configure in Replit Secrets panel):
- `GEMINI_API_KEY` — Google Gemini API key (for AI chat and image generation)
- `EMAIL_USER` — Gmail address for sending contact/feedback emails
- `EMAIL_PASS` — Gmail app password for authentication

## Development
- Run: `npm run dev` (starts Express + Vite dev server on port 5000)
- Build: `npm run build` (Vite build to `dist/`)

## Deployment
- Target: **autoscale**
- Build command: `npm run build`
- Run command: `npx tsx server.ts`
- Port: 5000

## Notes
- The Gemini API key is required for AI features; the app renders without it but AI features will fail gracefully
- Email features require both `EMAIL_USER` and `EMAIL_PASS` to be set
- Vite is configured with `allowedHosts: true` so the Replit preview proxy works correctly
