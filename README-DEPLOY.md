# Crab Talk Website — Corrected Full Source

This package is the complete website source to deploy.

## What was corrected

- Correct clawed Boston Lobster image is used.
- The previous incorrect rock-lobster image for Boston Lobster was removed.
- Duplicate legacy WhatsApp click handlers were removed.
- Crab Talk WhatsApp clicks now record one GA4 `whatsapp_click` event and one Google Ads conversion.
- Mod Keaw and other partner WhatsApp clicks are tracked separately and do not count as Crab Talk Google Ads conversions.
- Correct operating hours are retained:
  - Monday: 12PM–5PM
  - Tuesday–Thursday: 8AM–7PM
  - Friday–Saturday: 8AM–8PM
  - Sunday: 8AM–5PM
- No 10kg limited-stock wording is present.

## Deployment

1. Extract this ZIP.
2. Upload everything inside the extracted folder directly to the root of the GitHub repository.
3. Replace the existing website files; do not merge with an older package.
4. Commit to the production branch used by Vercel.
5. Wait for Vercel to finish deploying.
6. Hard-refresh the website with Ctrl+Shift+R.

The ZIP is flattened correctly: `index.html`, `assets`, `images`, `blog`, `zh`, `ja`, and the product pages are at the top level.
