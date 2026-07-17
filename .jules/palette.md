## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [Accessibility: Associated Form Fields & Standalone Error Labels]
**Learning:** Separate helper sub-components like `<Field>` that render labels separate from `<input>` will fail screen reader associations unless explicitly linked using `htmlFor` and matching `id` attributes. Additionally, using standard `div` blocks and linking `aria-describedby` to an error `span` with `role="alert"` preserves consistent visual flow while guaranteeing screen reader focus.
**Action:** Always map `htmlFor` on labels and `id` on inputs, and associate live errors using matching `aria-describedby` links.
