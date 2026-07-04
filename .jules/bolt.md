
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-06-21 - [Verification of Memoization Usage]
**Learning:** Defining a memoized component (e.g., ) provides no benefit if the main rendering loop continues to use inline JSX. In this codebase, `ChatWidget.tsx` had a `MessageItem` defined but the `messages.map` loop was still using inline divs, causing full list re-renders on every keystroke.
**Action:** Always verify that extracted components are actually implemented in the target loops.

## 2026-06-21 - [Verification of Memoization Usage]
**Learning:** Defining a memoized component (e.g., `React.memo(MessageItem)`) provides no benefit if the main rendering loop continues to use inline JSX. In this codebase, `ChatWidget.tsx` had a `MessageItem` defined but the `messages.map` loop was still using inline divs, causing full list re-renders on every keystroke.
**Action:** Always verify that extracted components are actually implemented in the target loops.
