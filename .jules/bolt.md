
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-07-23 - [Memoize Long Chat List with MessageItem Component]
**Learning:** Mapping over a long list of message objects inside `ChatWidget.tsx` using an inline JSX structure forces React to completely recreate and re-render every single message element on every user keystroke/input state update. Replacing the inline map loop with a memoized `<MessageItem />` component prevents unnecessary child re-renders. This optimizes rendering complexity from O(N) to O(1) per keystroke for existing messages, drastically lowering input lag and CPU utilization in active chat sessions.
**Action:** Always refactor inline loops rendering interactive, nested list items into memoized child components, passing callbacks via stable React callbacks (like `useCallback`) to preserve rendering isolation and maintain O(1) render performance during parent state updates.
