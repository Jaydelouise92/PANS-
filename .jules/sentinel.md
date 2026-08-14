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

## 2025-05-22 - [Timing Attack Mitigation for Dashboard Authentication]
**Vulnerability:** Comparing potentially different-length authorization headers using simple string comparison (`!==`) was vulnerable to timing-based brute force attacks.
**Learning:** `crypto.timingSafeEqual` in Node.js throws an error if compared buffers differ in length. To compare arbitrary, attacker-supplied inputs with secrets safely, we must compute SHA-256 hashes of both strings and compare those fixed-length hashes instead.
**Prevention:** Always hash unequal/unknown-length strings before comparing them with `timingSafeEqual`, and enforce that administrative endpoints fail closed if their authentication environment variables are unconfigured.

## 2025-05-22 - [Session Lifecycle and Explicit Revocation on Client Storage]
**Vulnerability:** Sensitive administrative authentication token (`pans_dashboard_token` which holds the raw dashboard password in plaintext) was stored in `localStorage`, which persists indefinitely on disk across browser sessions and OS reboots, and there was no explicit Logout button to clear it.
**Learning:** Storing raw secrets or long-lived authentication credentials in `localStorage` creates exposure to physical access, forensic recovery, and potential XSS script injection vectors. Using `sessionStorage` limits the credential lifetime to the tab lifespan, and providing an explicit logout mechanism allows immediate user-driven revocation.
**Prevention:** Ensure admin panels or privileged areas use `sessionStorage` for temporary session credentials and always provide a prominent logout control.
