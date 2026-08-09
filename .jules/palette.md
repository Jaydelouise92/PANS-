## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX Pattern: Form Label-Input Associations and Live Validations]
**Learning:** For critical user feedback forms or contact pages, proper semantic association (`htmlFor` matching input `id`) is non-negotiable for screen readers. Using `aria-invalid` combined with custom validation messages bound via `aria-describedby` and marked with `role="alert"` delivers immediate, unambiguous screen reader feedback without breaking visual layout consistency or alignment.
**Action:** Always map validation states and errors to inputs using `aria-invalid` and `aria-describedby` when refining custom web forms.

## 2026-08-09 - [A11y: Details-Summary Focus Rings and WebKit Disclosure Markers]
**Learning:** Native `<details>`/`<summary>` disclosure markers in WebKit/Safari can overlap custom chevron or arrow icons if not explicitly hidden. Standard focus states on `<summary>` triggers also tend to be harsh, blocky, and visually inconsistent with the brand identity. Adding a global webkit marker reset and applying fine-tuned, rounded, offset focus-visible ring styles (`focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:outline-none focus-visible:ring-offset-2 rounded-lg px-2 -mx-2`) delivers a seamless, high-contrast, beautiful keyboard navigation experience.
**Action:** Always hide native webkit disclosure markers on `<summary>` elements globally, and apply offset, rounded focus-visible rings matching the brand palette for details summary triggers.
