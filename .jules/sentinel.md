## 2025-05-14 - [Insecure Dashboard Auth and Redundant Rate Limiting]
**Vulnerability:** The `/api/dashboard` endpoint used a hardcoded default password and simple string comparison, making it vulnerable to brute force and timing attacks. Additionally, `/api/chat` and `/api/tts` had redundant rate limit checks that double-incremented the counter.
**Learning:** Hardcoded secrets in production code paths are a high risk. Rate limiting logic should be applied once per request to avoid inaccurate tracking.
**Prevention:** Always use `timingSafeCompare` for secret validation. Ensure rate limiters are called exactly once per distinct action. Use environment variables for all secrets and fail securely if they are missing.
