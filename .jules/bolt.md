
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-06-22 - [Memoized Client-side Search Filtering]
**Learning:** In highly interactive React applications with global widgets (such as persistent floating Chat and Audio player components), local route components frequently trigger re-renders. Standard list-filtering (`.filter`) on glossary datasets (like 30+ legal terms) executes on every parent context tick. Memoizing search-filtering using `React.useMemo` cuts unnecessary calculation overhead by ensuring the search algorithm only executes when the actual search query changes.
**Action:** Use `React.useMemo` for client-side search filtering on arrays of static items to isolate them from unrelated component re-renders.
