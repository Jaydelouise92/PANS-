## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2026-07-04 - [UX: Clickable Phone Links for Crisis Support]
**Learning:** For users under high stress, such as parents navigating Child Protection cases, reducing friction for critical actions is vital. Converting emergency and legal aid phone numbers into clickable `tel:` links significantly improves usability on mobile devices, where these numbers are most likely to be accessed.
**Action:** Always wrap crisis, support, and emergency phone numbers in `tel:` links and use regex sanitization for the `href` (e.g., `.replace(/\s/g, '')`) to ensure dialer compatibility while maintaining readable display text.
