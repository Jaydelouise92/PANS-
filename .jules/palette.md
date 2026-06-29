# Palette Journal - UX & Accessibility

## 2025-05-15 - Skip to Main Content Link
**Learning:** For keyboard users, having a "Skip to main content" link as the first focusable element is critical for bypassing repetitive navigation. However, it must also programmatically move focus to the target element.
**Action:** Add a skip link at the top of the root layout targeting a `<main>` element with `id="main-content"`. Ensure the target has `tabIndex={-1}` and `outline-none` so it can receive focus programmatically without showing a focus ring for mouse users.

## Focus Management Pattern
**Pattern:**
```tsx
<div className="min-h-screen flex flex-col">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-brand-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg outline-none"
  >
    Skip to main content
  </a>
  <Navbar />
  <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
    {/* Page content */}
  </main>
</div>
```
