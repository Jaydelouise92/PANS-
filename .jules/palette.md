## 2025-05-22 - [Accessibility Foundation]
**Learning:** The application lacked basic accessibility entry points like a 'Skip to main content' link and proper ARIA labels for floating interactive elements (Chat, Music). These are critical for keyboard and screen reader users navigating a single-page application.
**Action:** Always include a `.skip-link` in the root `App.tsx` targeting the `<main id="main-content">` and ensure all icon-only buttons (e.g., `IconButton`, `Lucide` icons) have explicit `aria-label` or `aria-labelledby` attributes.

## 2025-05-22 - [Form Accessibility]
**Learning:** Implicit label associations (wrapping input in label) can sometimes be less reliable for complex screen reader layouts than explicit `htmlFor`/`id` associations.
**Action:** Use explicit `htmlFor` on `<label>` and matching `id` on `<input>`/`<textarea>` for all forms to ensure maximum compatibility and clarity.
