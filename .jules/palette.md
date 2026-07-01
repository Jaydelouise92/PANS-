## 2025-05-15 - [Chat Widget Accessibility & UX Feedback]
**Learning:** Icon-only buttons (Send, Close, Thinking Mode) are invisible to screen readers without explicit `aria-label` attributes. Additionally, async operations like AI chat responses require immediate visual and programmatic feedback to prevent user uncertainty.
**Action:** Always include `aria-label` and state indicators (`aria-expanded`, `aria-pressed`) for interactive icons. Use `role="log"` and `aria-live="polite"` for message streams to ensure new content is announced.

## 2025-05-15 - [Vite Type Definitions]
**Learning:** TypeScript linting (`tsc --noEmit`) fails on `import.meta.env` in Vite projects if the client types are not explicitly included in `tsconfig.json`.
**Action:** Add `"types": ["vite/client"]` to the `compilerOptions` in `tsconfig.json` to resolve environment-specific type errors.
