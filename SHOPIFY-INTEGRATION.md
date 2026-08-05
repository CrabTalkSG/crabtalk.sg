# Crab Talk Shopify Integration

## What is included in this package

- A prominent **Order Online** action in the desktop header, mobile menu, hero area, footer and floating action area.
- A professional online-store feature section on the English, Chinese and Japanese homepages.
- Online-store calls to action on product and product-directory pages.
- A central `/shop` redirect to the Shopify store.
- UTM attribution and a GA4 `online_store_click` event for every store click.
- A lightweight online-store entry point on older guide and SEO pages without redesigning those pages.

## Current store destination

`https://crab-talk.myshopify.com/`

All website buttons use `/shop`, and Vercel redirects `/shop` to Shopify. This means the Shopify destination can be changed centrally in `vercel.json`.

## Recommended branded domain

Use `shop.crabtalk.sg` as the Shopify primary domain while keeping `www.crabtalk.sg` on Vercel.

1. In your DNS provider, create a CNAME record: `shop` → `shops.myshopify.com`.
2. In Shopify Admin, go to **Settings → Domains → Connect existing domain**.
3. Enter `shop.crabtalk.sg`, verify it, and set it as the primary domain for the online store.
4. In `vercel.json`, change both Shopify redirect destinations to `https://shop.crabtalk.sg/`.
5. Test `/shop`, desktop/mobile navigation, pickup checkout, confirmation email and order notifications.
6. Remove Shopify password protection only after the final test.

## Analytics

Store links generate a GA4 event named `online_store_click` with:

- `page_path`
- `button_location`
- `link_text`
- `link_url`

The Shopify URLs also receive UTM parameters using campaign `online_store_launch`.

## Deployment

Upload the contents of this folder to the root of the Crab Talk GitHub repository, replace the existing files, commit, and wait for Vercel to deploy.
