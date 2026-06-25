## 2025-05-22 - [IP-Based Rate Limiting Behind Proxy]
**Vulnerability:** Rate limiting using `req.socket.remoteAddress` was identifying the proxy server instead of individual clients.
**Learning:** In environments like Replit or Render where a proxy is used, `req.socket.remoteAddress` returns the proxy's IP. Express's `req.ip` should be used instead when `trust proxy` is enabled to get the actual client IP.
**Prevention:** Always verify if the app is behind a proxy and use `req.ip` for any client-specific logic like rate limiting or geo-blocking.

## 2025-05-22 - [LLM Resource Exhaustion]
**Vulnerability:** Lack of input validation on AI chat and TTS endpoints allowed for unbounded message history and payload sizes.
**Learning:** AI endpoints are particularly vulnerable to DoS due to processing costs and token limits. Attackers can flood these endpoints with large payloads to exhaust memory or API quotas.
**Prevention:** Implement strict message count and character length limits on all endpoints that interact with external AI APIs or perform resource-intensive tasks.

## 2025-05-23 - [Inconsistent Rate Limiting on Resource-Intensive Endpoints]
**Vulnerability:** Publicly accessible AI-powered endpoints (Chat and TTS) lacked rate limiting, while other forms in the same app were protected.
**Learning:** Input validation (length/history) protects against single-request resource exhaustion, but rate limiting is required to prevent aggregate resource/cost exhaustion from automated abuse.
**Prevention:** Audit all public endpoints that trigger paid third-party API calls or intensive processing to ensure consistent application of rate-limiting decorators or middleware.
