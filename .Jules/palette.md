## 2025-05-15 - [Form Accessibility]
**Learning:** Forms without explicit `htmlFor` and `id` associations, even with implicit wrapping, can be difficult for screen readers to navigate correctly. Adding `aria-invalid` and `aria-describedby` linked to `role="alert"` error messages significantly improves the feedback loop for assistive technology users.
**Action:** Always ensure `id` and `htmlFor` are used for all form inputs and link error messages with `aria-describedby` and `role="alert"`.
