
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-13 - [AudioContext Persistence in ChatWidget]
**Learning:** Persisting the `AudioContext` instance using `useRef` in the `ChatWidget` prevents resource exhaustion and potential browser-imposed limits when the text-to-speech feature is used repeatedly. Creating a new context on every invocation is a common bottleneck in interactive audio components.
**Action:** Always reuse `AudioContext` or other heavyweight browser API instances via `useRef` to ensure long-term stability and performance of interactive media features.
