# Crab Talk Shopify Integration

## Current customer-facing store domain

`https://shop.crabtalk.sg/`

The custom Shopify subdomain is connected, globally live, and protected by TLS/SSL. The original `myshopify.com` domains remain internal to Shopify and should not be deleted.

## Main-site integration

- Customer-facing store buttons are rewritten directly to `https://shop.crabtalk.sg/` by `assets/store-integration.js`.
- `/shop` and `/online-store` remain safe server-side fallbacks and redirect to the same branded store domain.
- Store clicks emit the GA4 event `online_store_click` with `page_path`, `button_location`, `link_text`, `link_url`, and `shop_domain`.
- UTMs are intentionally not appended between `crabtalk.sg` and `shop.crabtalk.sg` so an original source such as Google Organic or Google Ads is not overwritten by a self-referral campaign.

## Fulfilment wording

The main website now reflects the live Shopify offer:

- Commonwealth pickup
- Islandwide delivery
- Free delivery for orders $180+

## Analytics follow-up in Shopify

For end-to-end reporting, make sure the Shopify store uses the same GA4 property (`G-V94NDT5ZCR`). Once that is confirmed, test this path in GA4 DebugView / Realtime:

`crabtalk.sg → shop.crabtalk.sg → add_to_cart → begin_checkout → purchase`

Because the store is a subdomain of `crabtalk.sg`, separate cross-domain linker configuration is normally unnecessary when the same GA4 property is installed correctly on both sites.
