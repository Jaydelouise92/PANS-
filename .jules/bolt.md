
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-07-21 - [Persist and Reuse AudioContext in Chat Widget Text-To-Speech]
**Learning:** Initializing a new `AudioContext` instance inside dynamic text-to-speech rendering routines causes rapid context recreation, high garbage collection overhead, and risks hitting the browser-enforced ceiling for concurrent audio streams. Reusing a single ref-based context instance completely resolves these resource allocation bottlenecks.
**Action:** Always persist the `AudioContext` via a `useRef` reference and ensure a `useEffect` cleanup hook is registered to close the context gracefully on component unmount.
