## 2025-05-22 - Skip to Main Content Implementation
**Learning:** For optimal keyboard navigation with a "Skip to main content" link, the target element (e.g., <main id="main-content">) must have tabIndex={-1} to be programmatically focusable across all browsers/assistive technologies, and outline-none to avoid a focus ring appearing for mouse users after the jump.
**Action:** Always include tabIndex={-1} and outline-none on main content targets when implementing skip links.

## 2025-05-22 - Semantic Navigation with ARIA-Current
**Learning:** Using aria-current="page" on active navigation links is critical for screen reader users to understand their location in the site hierarchy. In this app, it should be applied to both desktop and mobile navigation links.
**Action:** Ensure isActive checks also apply aria-current="page" to the link element.
