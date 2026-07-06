## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2025-05-16 - [UX: Clickable Crisis Numbers]
**Learning:** For users in high-stress or crisis situations, every second counts. Converting plain-text phone numbers into clickable `tel:` links is a critical micro-UX improvement that ensures immediate access to support on mobile devices. Adding subtle visual cues like colored underlines helps signal interactivity without cluttering the design.
**Action:** Always ensure emergency and support phone numbers are implemented as clickable `tel:` links with appropriate hover states.
