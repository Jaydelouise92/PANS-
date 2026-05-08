# Threat Model

## Project Overview

PANS Victoria is a public React 19 + Vite website served by an Express backend. The production server entry point is `server.ts`; the frontend entry point is `src/main.tsx` with routes in `src/App.tsx`. The application is primarily informational, but it also exposes public contact and feedback flows and directly integrates Google Gemini for browser-based chat, voice, text-to-speech, and image generation.

Production-scope assumptions for this repository:
- Only production-reachable code should be treated as in scope.
- `NODE_ENV` is `production` in deployed environments, so Vite middleware paths are dev-only unless separately exposed.
- Replit provides TLS for deployed traffic.
- Mockup sandbox and local-only development behaviors are out of scope unless production reachability is demonstrated.

## Assets

- **Parent-submitted personal data** — names, email addresses, free-text contact messages, chat feedback, and story submissions. These may contain highly sensitive family, court, or child-protection details.
- **Application secrets** — `GEMINI_API_KEY`, `EMAIL_USER`, `EMAIL_PASS`, and optional `ADMIN_EMAIL`. Compromise enables API abuse, cost exposure, or unauthorized outbound email activity.
- **Service availability and operator inbox integrity** — public forms can be abused to flood the Gmail-backed notification channel or exhaust third-party quotas, degrading support operations.
- **AI outputs and conversation content** — chat and voice features process sensitive user prompts and model responses. Mishandling can disclose private information or create operational/legal harm.

## Trust Boundaries

- **Browser to Express API** — all `/api/*` routes are public and must treat every request as attacker-controlled.
- **Browser to Google Gemini APIs** — current chat, voice, TTS, and image flows call Google directly from frontend code; any client-exposed credential crosses into an untrusted environment.
- **Express to Gmail / nodemailer** — the backend can send email with privileged credentials; any abuse of mail-sending routes impacts confidentiality, integrity of notifications, and availability.
- **Public content to operator workflow** — free-form user submissions are forwarded into the admin inbox and logs, so validation and minimization matter.

## Scan Anchors

- **Production entry points:** `server.ts`, `src/main.tsx`, `src/App.tsx`.
- **Highest-risk code areas:** `server.ts` public POST handlers; `src/components/ChatWidget.tsx`; `src/components/VoiceAssistant.tsx`; `src/services/imageService.ts`; `vite.config.ts`.
- **Public surfaces:** all frontend routes plus `POST /api/contact`, `POST /api/feedback`, and `POST /api/story`.
- **Dev-only areas usually ignored:** Vite middleware branch in `server.ts` when `NODE_ENV !== "production"`.

## Threat Categories

### Spoofing

Public API routes must not rely on attacker-supplied identity hints such as raw forwarding headers for abuse prevention. If rate limiting or attribution uses client-controlled headers without trusted proxy handling, attackers can evade controls and masquerade as arbitrary source IPs.

### Tampering

All public POST bodies must be validated server-side before they influence email content, logging, or third-party API calls. The system must reject malformed or unexpected fields and avoid trusting client-side validation or UI reachability as a security control.

### Information Disclosure

Sensitive secrets must never be embedded into client bundles or otherwise delivered to browsers. Parent-submitted personal data must be minimized in logs and error paths, and public API responses must avoid exposing internal configuration or operational details.

### Denial of Service

Public email and AI-backed features must resist quota exhaustion, inbox flooding, and repeated automated submissions. Rate limiting must be enforced on all abuse-prone endpoints with controls that remain effective behind the production proxy chain and across process restarts when possible.

### Elevation of Privilege

The backend must ensure that privileged capabilities—especially outbound email using stored credentials and access to paid Gemini APIs—cannot be exercised indirectly by arbitrary internet users beyond intended, bounded workflows. Any client-side exposure of reusable API credentials effectively grants that privilege to the public and must be prevented.
