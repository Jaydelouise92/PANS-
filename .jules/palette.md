# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - [Skip to Main Content Link]
**Learning:** For a content-heavy application with persistent navigation and floating widgets (Chat, Music), a "Skip to main content" link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element ensures programmatic focus works reliably across browsers without creating a "double focus" ring for mouse users.
**Action:** Always include a skip link targeting a `<main id="main-content" tabIndex={-1} className="outline-none">` in the root layout of multi-page applications.
