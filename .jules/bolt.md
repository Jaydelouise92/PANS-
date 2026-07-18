
## 2026-06-21 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes reduced the main bundle size from 671kB to 402kB (a ~40% reduction). This is especially effective in this codebase due to the high number of content-heavy pages (30+ routes) that were previously all bundled into a single JavaScript file.
**Action:** Always consider code splitting in multi-route React applications with large total page counts to improve initial load performance.

## 2026-07-18 - [Optimizing Static Array Filters with useMemo]
**Learning:** Memoizing search filtering on static array views (e.g., `CourtTermsGuide.tsx`) avoids recreating arrays and performing string conversions on every keystroke or unrelated re-render. Normalizing the search query outside the loop reduces iteration complexity from O(N * L) string operations to O(N + L) operations.
**Action:** For static glossary pages and reference lists, always use `useMemo` for search/filtering, lift normalization outside of loop iterations, and return the original list reference early if the query is empty.
