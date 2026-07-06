## 2025-05-22 - [IP-Based Rate Limiting Behind Proxy]
**Vulnerability:** Rate limiting using `req.socket.remoteAddress` was identifying the proxy server instead of individual clients.
**Learning:** In environments like Replit or Render where a proxy is used, `req.socket.remoteAddress` returns the proxy's IP. Express's `req.ip` should be used instead when `trust proxy` is enabled to get the actual client IP.
**Prevention:** Always verify if the app is behind a proxy and use `req.ip` for any client-specific logic like rate limiting or geo-blocking.

## 2025-05-22 - [LLM Resource Exhaustion]
**Vulnerability:** Lack of input validation on AI chat and TTS endpoints allowed for unbounded message history and payload sizes.
**Learning:** AI endpoints are particularly vulnerable to DoS due to processing costs and token limits. Attackers can flood these endpoints with large payloads to exhaust memory or API quotas.
**Prevention:** Implement strict message count and character length limits on all endpoints that interact with external AI APIs or perform resource-intensive tasks.

## 2025-05-22 - [Defense in Depth: API Hardening]
**Vulnerability:** Information disclosure via headers, potential XSS in attribute-based contexts, and lack of rate limiting on costly AI endpoints.
**Learning:** Hardening should be multi-layered. Disabling 'X-Powered-By' is a simple but effective fingerprinting prevention. Sanitization must include single quotes to handle common HTML attribute injection.
**Prevention:** Use a standard security check-list for every new Express project: disable identifying headers, use strict rate limiting on all public POST routes, and ensure the sanitization logic covers all HTML-sensitive characters (<, >, &, ", ').

## 2025-05-23 - [Timing Attack Prevention for Dynamic Secrets]
**Vulnerability:** Simple string comparison (`===`) for authentication tokens or passwords exposes the system to timing attacks, where an attacker can deduce the secret byte-by-byte by measuring response times.
**Learning:** Node's `crypto.timingSafeEqual` requires inputs of equal length. For secrets of unknown or varying lengths (like user-provided dashboard passwords), both the input and the target should be hashed (e.g., with SHA-256) before comparison to ensure a constant-time check.
**Prevention:** Implement a `timingSafeCompare` helper that hashes inputs before using `crypto.timingSafeEqual` for all credential or token verification logic.
