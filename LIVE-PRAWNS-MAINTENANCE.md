# Live Prawns Website Maintenance

The live-prawn pages are designed to stay evergreen. Do not add temporary stock quantities to page titles, descriptions, headings, structured data or permanent website copy.

## Current core product details

- Product: Live Vannamei prawns
- Featured price: S$38/kg
- Featured size: approximately 20 prawns per kg
- Ordering: pre-orders welcome
- Larger quantities: can be arranged with advance notice

## Files to update when price or size changes

- `live-prawns-singapore.html`
- `zh/live-prawns-singapore/index.html`
- `ja/live-prawns-singapore/index.html`
- `blog/live-vannamei-prawns-singapore/index.html`
- `index.html`
- `live-seafood-singapore.html`

Search before deployment:

```bash
grep -RIn --exclude-dir=.git -E '\$38|20 (pieces|prawns)|20尾|20只|price.:.38' .
```

## Photo policy

Use Crab Talk’s real product photos and real tank footage. The main assets are:

- `images/live-vannamei-prawns-hero.webp`
- `images/live-vannamei-prawns-size.webp`
- `images/live-vannamei-prawns-tank.webp`
- `images/live-vannamei-prawns-social.jpg`
- `media/live-vannamei-prawns-singapore.mp4`

## Structured data

Keep the Product offer price aligned with the visible page price. If the item is temporarily unavailable and cannot be ordered, change `InStock` to `OutOfStock`. If advance orders remain available, keep the page wording focused on pre-ordering and supply arrangement rather than artificial scarcity.

## Deployment checks

1. Open the English, Chinese and Japanese product pages on desktop and mobile.
2. Confirm all WhatsApp buttons open the correct pre-order message.
3. Confirm the video loads and the poster image is visible.
4. Validate Product, FAQ, Breadcrumb and Video structured data.
5. Submit the product page and sitemap in Google Search Console after material changes.
