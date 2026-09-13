BIM Sprint Store v3

What changed:
- Professional Packages + Build Your Bundle store UI
- Smart cart with package/tool deduplication
- Package-to-custom-bundle conversion when excluding a tool
- Package suggestion when a custom selection matches a full package
- Cart persisted in localStorage
- Quote form: Name, Phone, Country required; Company and Email optional
- Automatic email submission uses FormSubmit AJAX, with mailto fallback
- WhatsApp opens with the same prepared request after email submission
- Updated Ceiling Wizard, Room Wizard, and Model Navigator screenshots/content
- Store data is embedded in store.js so the UI also works when testing via file://

Important email activation note:
FormSubmit normally sends a one-time activation/confirmation email to mnsourabubakr95@gmail.com on first use. Confirm it once after deployment so future quote requests can be delivered automatically.
