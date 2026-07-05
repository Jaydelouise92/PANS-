## 2025-05-15 - [Accessibility: Skip to Main Content]
**Learning:** For a information-rich, multi-page application like PANS Victoria, a 'Skip to main content' link is essential for keyboard and screen reader users to bypass repetitive navigation. Using `tabIndex={-1}` and `outline-none` on the target `<main>` element allows it to receive programmatic focus without creating a visual focus ring for mouse users, providing a clean experience for everyone.
**Action:** Always implement a 'Skip to main content' link as the first focusable element in root layouts for similar content-heavy sites.

## 2026-07-05 - [Crisis Line Accessibility]
**Learning:** In applications dealing with high-stress situations (like child protection), plain-text phone numbers create a "copy-paste" hurdle that can be critical. Converting these to 'tel:' links provides immediate, one-tap access to help on mobile devices.
**Action:** Use 'tel:' links for all emergency and support phone numbers. Use .replace(/\s/g, '') to sanitize the 'href' while keeping the formatted text visible to the user.
