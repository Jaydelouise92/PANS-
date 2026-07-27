
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-08-15 - [Lazy Loading Layout Utility Components]
**Learning:** Layout components like `ChatWidget`, `BackgroundMusic`, and `CookieBanner` are heavy and contain complex dependencies (like custom icons, audio controls, and storage operations) but are not immediately needed for the initial render. Lazy-loading them within a fallback-free `<Suspense>` block reduces the main bundle size drastically (by ~37.2%, from 406.34 kB to 255.19 kB) without affecting the UI or shell rendering speed.
**Action:** Always identify heavy utility or helper layout components that do not contribute to above-the-fold content and lazy-load them inside standard Suspense blocks to shrink the critical bundle size.
