
## 2026-07-14 - [AudioContext Persistence & List Memoization]
**Learning:** In a long-running Chat UI, re-creating the `AudioContext` on every TTS request can lead to resource exhaustion and browser warnings. Additionally, rendering large lists (chat history) inline during input state updates causes O(N) re-renders, impacting typing latency.
**Action:** Always persist `AudioContext` via `useRef` and extract list items into memoized components (using `React.memo` and `useCallback` for props) to keep input response at O(1) regardless of history size.

## 2026-07-14 - [Registry Sync Issues with @types]
**Learning:** Using `@types/better-sqlite3` version ^12.11.0 caused `pnpm install` to fail as it's not available on the public registry.
**Action:** Use version `^7.6.13` (the latest stable on registry) to maintain type coverage while ensuring environment stability.
