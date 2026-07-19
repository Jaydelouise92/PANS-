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

## 2025-05-23 - [Timing-Safe Token Validation and Fail-Secure Authentication]
**Vulnerability:** The `/api/dashboard` login endpoint relied on standard string comparison (`!==`) to validate bearer tokens and had a hardcoded default fallback credential (`"pans-admin-2025"`) when the environment variable was missing.
**Learning:** Standard comparison operators are not timing-safe and leak token length and matching prefixes, opening the door to timing attacks. Relying on default fallbacks in production endpoints poses a severe risk of unauthorized access if the deployment fails to configure environment variables.
**Prevention:** Implement a helper like `timingSafeCompare` using Node's native `crypto.timingSafeEqual` over SHA-256 hashes of the compared values (to handle unequal lengths safely). Ensure authentication routes immediately fail-securely if critical environment configurations are absent.
