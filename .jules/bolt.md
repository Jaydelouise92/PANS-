
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-08-15 - [Memoize List Items in Active Chat Widgets]
**Learning:** Inlining long list map loops (such as chat message histories) within components with high-frequency state updates (like text input fields) causes the entire history to re-render O(N) times on every single keystroke. Moving list elements into memoized components (`React.memo`) with stable prop references (e.g. `useCallback` callbacks) completely eliminates these redundant rendering cycles, reducing input latency and keystroke rendering complexity from O(N) to O(1).
**Action:** Always extract list items in active, input-heavy widgets into a `React.memo` wrapped component to avoid CPU-intensive re-renders on keystroke.
