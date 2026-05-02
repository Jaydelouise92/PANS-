# PANS Victoria — Parent Advocacy & Navigation Support

## Project Overview
A fully redesigned 14-page React + Vite + Express website for PANS Victoria, a parent advocacy and navigation service supporting parents in Victoria navigating Child Protection (DFFH) and the Children's Court.

**Tone:** Plain language, supportive, calm, non-judgmental. Professional but not legalistic.
**Design:** Clean/minimal, soft purple (#7C6A96) and lilac palette, white background. No courtroom imagery, no distressed children.

## Architecture

### Frontend
- **React 19** with TypeScript
- **Vite 6** as build tool/dev server
- **React Router DOM** for multi-page routing (BrowserRouter)
- **Tailwind CSS v4** for styling (custom theme in `src/index.css`)
- **Framer Motion** (`motion/react`) for animations
- **Lucide React** for icons

### Backend
- **Express** server (`server.ts`) — port 5000, serves API + Vite dev middleware

## Page Structure (14 pages)
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Hero, reassurance strip, What is PANS, stats, resource cards, disclaimer |
| `/start-here` | `StartHere` | Interactive stage selector for parents to find relevant info |
| `/about` | `About` | About PANS, values, role, confidentiality |
| `/who-we-support` | `WhoWeSupport` | Who qualifies, what PANS can/cannot do |
| `/how-it-works` | `HowItWorks` | 5-step process from first contact to ongoing support |
| `/first-48-hours` | `FirstFortyEightHours` | Critical guide: immediate, 24hr, 48hr actions |
| `/resources` | `Resources` | Guide cards + external links |
| `/parent-rights` | `ParentRights` | Rights during investigation, case management, court |
| `/system-explained` | `SystemExplained` | 7-stage system overview + glossary + FAQ |
| `/childrens-court` | `ChildrensCourt` | Hearing types, court orders, day-of guide |
| `/mental-health` | `MentalHealth` | Crisis lines, self-care, online services |
| `/founder` | `Founder` | Founder story — mother + criminology student, lived experience |
| `/funding` | `Funding` | Unfunded/independent, transparency commitments |
| `/contact` | `Contact` | Contact form → /api/contact, what PANS can help with |

## Key Files
```
src/
  App.tsx                    — BrowserRouter + routes for all 14 pages
  main.tsx                   — React entry point
  index.css                  — Tailwind v4 theme (brand-primary #7C6A96, brand-secondary #F9F8FF, brand-accent #B5A1D1)
  components/
    layout/
      Navbar.tsx             — Fixed navbar with dropdown for Guides & Resources, mobile menu
      Footer.tsx             — Footer with links, disclaimer, VLA number
    ChatWidget.tsx           — AI chat (gemini-2.5-pro / gemini-2.5-flash)
    VoiceAssistant.tsx       — Live voice (gemini-2.5-flash-native-audio)
  pages/                     — All 14 page components (see table above)
  services/
    imageService.ts          — Gemini image generation with Unsplash fallbacks
server.ts                    — Express server + API routes
vite.config.ts               — allowedHosts: true, port 5000, HMR port 24679
```

## API Endpoints
- `POST /api/contact` — Contact form → emails to ourvoicemattersaus@gmail.com
- `POST /api/feedback` — AI chat feedback (thumbs up/down)
- `POST /api/story` — Story submission

## Environment Variables (Replit Secrets)
- `GEMINI_API_KEY` — Google Gemini (AI chat, TTS, image generation). App works without it via Unsplash fallbacks.
- `EMAIL_USER` — Gmail address for sending contact/feedback emails
- `EMAIL_PASS` — Gmail app password

## Design System
- `brand-primary`: #7C6A96 (Muted Purple)
- `brand-secondary`: #F9F8FF (Soft Lilac White)
- `brand-accent`: #B5A1D1 (Soft Lilac)
- Font: Serif headlines, system sans-serif body
- Imagery: Unsplash — pathways, parent-child connection, soft/hopeful

## Development
- Run: `npm run dev` (starts Express + Vite on port 5000)
- Build: `npm run build`
- Server binds to `0.0.0.0:5000`; Vite HMR on port 24679

## Key Design Rules
- Every page has a `pt-16` wrapper (accounts for fixed navbar height)
- Disclaimer (amber box, VLA 1300 792 387) appears on legally sensitive pages
- No legal advice, no emergency support — always refer to VLA and Lifeline
- Footer always shows VLA number and general information disclaimer
