## 2025-03-24 - [Skip Link and ARIA Labels for Interactive Elements]
**Learning:** For apps with sticky/fixed headers (like `Navbar`), a "Skip to content" link is critical for keyboard users to bypass repetitive navigation. Icon-only buttons (music controls, chat toggles) are common UX patterns but completely inaccessible without `aria-label`.
**Action:** Always check for fixed navigation and implement a skip link. Ensure every `lucide-react` icon used inside a button has a descriptive `aria-label` or `title` on its parent button.
