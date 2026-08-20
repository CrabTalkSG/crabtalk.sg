# Crab Talk Website — Production Source (20 Aug 2026)

This is the complete static source for the main `crabtalk.sg` website.

## Key changes in this build

- Shopify customer-facing domain updated to `https://shop.crabtalk.sg/`.
- `/shop` and `/online-store` now redirect to the branded Shopify subdomain.
- Store buttons link directly to the branded subdomain after JavaScript loads.
- Removed self-attribution UTMs between the main site and Shopify so GA4 can preserve the visitor's original acquisition source.
- Main English, Chinese and Japanese homepages now state both Commonwealth pickup and islandwide delivery.
- Free delivery for orders $180+ is surfaced on the three homepages.
- Homepage SEO title now prioritises `Live Seafood Singapore` while keeping the visible human H1 unchanged.
- Missing Open Graph / Twitter metadata was added to 9 older/translated pages.
- All Shopify preconnect hints point to `shop.crabtalk.sg`.
- Operating hours and the existing product range were retained.

## Deployment

1. Replace the existing website source with the contents of this folder.
2. Commit/push to the production branch used by Vercel.
3. Wait for Vercel to deploy.
4. Test `https://www.crabtalk.sg/shop` and confirm it opens `https://shop.crabtalk.sg/`.
5. Test desktop and mobile Order Online buttons.
6. Hard refresh with Ctrl+Shift+R if an older cached JavaScript file appears.

See `SHOPIFY-INTEGRATION.md` for analytics notes.
