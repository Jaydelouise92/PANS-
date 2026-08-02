## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX Pattern: Form Label-Input Associations and Live Validations]
**Learning:** For critical user feedback forms or contact pages, proper semantic association (`htmlFor` matching input `id`) is non-negotiable for screen readers. Using `aria-invalid` combined with custom validation messages bound via `aria-describedby` and marked with `role="alert"` delivers immediate, unambiguous screen reader feedback without breaking visual layout consistency or alignment.
**Action:** Always map validation states and errors to inputs using `aria-invalid` and `aria-describedby` when refining custom web forms.

## 2025-05-17 - [Accessibility: Details Summary Keyboard Focus Styling]
**Learning:** HTML `<summary>` elements are interactive disclosure triggers but often lack distinct default keyboard focus outlines in customized designs, or suffer from native browser focus ring inconsistency. Applying custom Tailwind offset rings (`focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg`) directly to the `<summary>` provides a beautiful, unified focus indicator matching the site's brand without affecting standard mouse click experiences.
**Action:** Always style custom `<summary>` elements with explicit keyboard-only focus styles to ensure that interactive accordion components remain accessible to keyboard navigators.
