## 2025-05-22 - [IP-Based Rate Limiting Behind Proxy]
**Vulnerability:** Rate limiting using `req.socket.remoteAddress` was identifying the proxy server instead of individual clients.
**Learning:** In environments like Replit or Render where a proxy is used, `req.socket.remoteAddress` returns the proxy's IP. Express's `req.ip` should be used instead when `trust proxy` is enabled to get the actual client IP.
**Prevention:** Always verify if the app is behind a proxy and use `req.ip` for any client-specific logic like rate limiting or geo-blocking.

## 2025-05-22 - [LLM Resource Exhaustion]
**Vulnerability:** Lack of input validation on AI chat and TTS endpoints allowed for unbounded message history and payload sizes.
**Learning:** AI endpoints are particularly vulnerable to DoS due to processing costs and token limits. Attackers can flood these endpoints with large payloads to exhaust memory or API quotas.
**Prevention:** Implement strict message count and character length limits on all endpoints that interact with external AI APIs or perform resource-intensive tasks.

## 2025-06-23 - [AI Endpoint Rate Limiting]
**Vulnerability:** Resource-intensive AI endpoints (/api/chat, /api/tts) lacked rate limiting, exposing the application to API quota abuse and DoS.
**Learning:** While input validation (length/history) protects against single large requests, rate limiting is essential to protect against high-frequency request floods.
**Prevention:** Always apply rate limiting to any endpoint that consumes external API credits or significant server resources, even if payload validation is in place.
