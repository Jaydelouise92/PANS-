
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-20 - [Persist and Reuse AudioContext in Voice Stream Playback]
**Learning:** Instantiating a new `AudioContext` on every audio chunk received in real-time streaming creates massive garbage collection overhead, leads to severe memory leaks, and quickly hits hard browser limits for active contexts (causing audio playback failure and page crashes). Persisting and reusing a single `AudioContext` instance via `playbackAudioCtxRef` with explicit unmount/session teardown resource cleanup resolves this entirely.
**Action:** Always persist and reuse a single `AudioContext` across streaming callbacks instead of recreating it dynamically. Be sure to release/close the context upon component unmount and session termination.

## 2026-08-04 - [React Message List Rendering Optimization]
**Learning:** Mapping a long list of messages using inline JSX inside a parent component with high-frequency state updates (e.g., character-by-character typing input or mode toggles) causes O(N) virtual DOM reconstruction on every single render. Replacing the inline mapping with a memoized `<MessageItem />` component reduces rendering complexity from O(N) to O(1) for all parent updates, significantly improving input latency and responsiveness.
**Action:** In chat or list-heavy applications, always extract individual items into a memoized component wrapper (`React.memo`) to block redundant list-wide re-renders during text input or other parent-exclusive state mutations.

## 2026-08-04 - [Descending Indexes for Paginated or Sorted Dashboard Tables]
**Learning:** Querying SQLite tables for administrative dashboards using `ORDER BY createdAt DESC` triggers a full-table scan and a costly O(N log N) filesort operation for every request when no matching index exists. Creating explicit, descending index schemas (e.g., `CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(createdAt DESC)`) optimizes these lookups into O(log N) index scans, bypassing filesorts entirely.
**Action:** Always verify that frequently queried timestamp or metadata columns subjected to sorting/ordering have corresponding database indexes in the specified order to prevent performance degradation as tables scale.
