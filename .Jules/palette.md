
## 2025-05-14 - Accessible Form Field Pattern
**Learning:** Standardizing form field components using explicit label/input associations (htmlFor/id) and linking error messages via aria-describedby and role="alert" significantly improves screen reader navigation and error state clarity.
**Action:** Use a div-based wrapper instead of wrapping the input in a label to allow for sibling error messages that can be precisely linked via ARIA attributes.
