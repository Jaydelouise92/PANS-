
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-08-14 - [Chat History List Rendering Optimization with React.memo]
**Learning:** Placing chat input text state in the same component as a mapped list of messages causes the entire message history to re-render on every single keystroke. When the history is long, this creates noticeable lag in text input response times. Extracting message rendering into a memoized `<MessageItem />` component and ensuring its props (callbacks like `onSpeak` and `onFeedback`) have stable references (via `React.useCallback`) completely avoids these unnecessary re-renders, reducing the typing render complexity from O(N) to O(1).
**Action:** Always extract items in high-frequency state-changing lists (like chat logs or search results) into standalone `React.memo` components, and ensure callback props use `useCallback` to maintain reference stability.
