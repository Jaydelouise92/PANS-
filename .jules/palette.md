## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX Pattern: Form Label-Input Associations and Live Validations]
**Learning:** For critical user feedback forms or contact pages, proper semantic association (`htmlFor` matching input `id`) is non-negotiable for screen readers. Using `aria-invalid` combined with custom validation messages bound via `aria-describedby` and marked with `role="alert"` delivers immediate, unambiguous screen reader feedback without breaking visual layout consistency or alignment.
**Action:** Always map validation states and errors to inputs using `aria-invalid` and `aria-describedby` when refining custom web forms.

## 2026-08-14 - [UX/A11y Pattern: Standardizing Interactive Disclosure Buttons]
**Learning:** For interactive disclosure/stage selection buttons in our design system, standard browser focus outlines look warped on heavily rounded containers (like `rounded-2xl`). Overriding these with Tailwind offsets (`focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:rounded-2xl`) maintains visual perfection. Additionally, linking these toggles semantically using `aria-expanded` and `aria-controls` to an `aria-live="polite"` region ensures immediate, clear screen reader feedback.
**Action:** Always apply matching `focus-visible:rounded-*` rings and standard ARIA disclosure attributes linked to live regions when building interactive section drawers.
