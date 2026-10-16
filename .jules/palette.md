## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX Pattern: Form Label-Input Associations and Live Validations]
**Learning:** For critical user feedback forms or contact pages, proper semantic association (`htmlFor` matching input `id`) is non-negotiable for screen readers. Using `aria-invalid` combined with custom validation messages bound via `aria-describedby` and marked with `role="alert"` delivers immediate, unambiguous screen reader feedback without breaking visual layout consistency or alignment.
**Action:** Always map validation states and errors to inputs using `aria-invalid` and `aria-describedby` when refining custom web forms.

## 2025-08-07 - [UX Pattern: Safari Details/Summary WebKit Polish and Custom Focus Indicators]
**Learning:** In Tailwind CSS projects, custom accordion or FAQ list structures using native `<details>` and `<summary>` elements are prone to native styling issues in Safari/WebKit on iOS/macOS, where double disclosure arrows are rendered unless `summary::-webkit-details-marker { display: none; }` is explicitly declared. Moreover, native `<summary>` triggers suffer from inconsistent default square/offset focus outlines that don't respect parent container rounded boundaries. Using custom offset rings (`focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:outline-none focus-visible:ring-offset-2 rounded-lg`) solves both issues beautifully.
**Action:** Always hide native WebKit details markers globally and use standard, responsive focus ring classes on interactive summary elements for any accordion structure.
