
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2025-06-24 - [Bundle Bloat from Duplicate Large Constants]
**Learning:** Found a large (~8KB) string constant in `ChatWidget.tsx` that was a duplicate of one used in the backend `server.ts`. This constant was entirely unused in the frontend but still included in the main bundle. Removing it is a "free" win for initial load and parse time.
**Action:** Check for large "Instruction" or "Prompt" strings in frontend components that might have been accidentally copied from backend logic or intended for a backend-only feature.
