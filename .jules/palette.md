## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX Pattern: Form Label-Input Associations and Live Validations]
**Learning:** For critical user feedback forms or contact pages, proper semantic association (`htmlFor` matching input `id`) is non-negotiable for screen readers. Using `aria-invalid` combined with custom validation messages bound via `aria-describedby` and marked with `role="alert"` delivers immediate, unambiguous screen reader feedback without breaking visual layout consistency or alignment.
**Action:** Always map validation states and errors to inputs using `aria-invalid` and `aria-describedby` when refining custom web forms.

## 2026-07-22 - [Accessibility: Floating Interactive Guides and Drawer State Accessibility]
**Learning:** Floating conversational triggers and floating guides (like the Voice Assistant) are frequently overlooked during accessibility sweeps. When conditional/animated drawers or overlays are toggled via absolute/fixed trigger buttons, screen readers cannot deduce state transitions or purpose without explicit `aria-expanded` and descriptive `aria-label` declarations. Coupling these tags with clean transitions ensures keyboard users and screen readers understand exactly what will open, and how to close the drawer.
**Action:** Always map trigger button status to `aria-expanded` and provide explicit `aria-label` descriptive markers for floating interactive guide controls.
