# Live Prawns Website Maintenance

This site now has a dedicated live Vannamei prawn SEO cluster. Keep the product page live even when a batch sells out; update the availability and reservation message instead of deleting the page.

## Main files

- `live-prawns-singapore.html` — primary English product and SEO landing page
- `zh/live-prawns-singapore/index.html` — Chinese landing page
- `ja/live-prawns-singapore/index.html` — Japanese landing page
- `blog/live-vannamei-prawns-singapore/index.html` — evergreen supporting guide
- `index.html` — homepage featured-product block
- `live-seafood-singapore.html` — category page links and product coverage
- `media/live-vannamei-prawns-singapore.mp4` — embedded product video
- `sitemap.xml` — URLs submitted to search engines

## When price, size or stock changes

Search the repository for the current values before deployment:

```bash
grep -RIn --exclude-dir=.git -E '\$38|20 (pieces|prawns)|20尾|20只|10kg|LimitedAvailability' .
```

Update visible copy and structured data together:

1. Price: update `$38/kg` and the Product schema `offers.price`.
2. Approximate count: update `20 per kg` everywhere if the size grade changes.
3. Stock: update the current-batch quantity in English, Chinese and Japanese pages plus the homepage feature.
4. Availability:
   - Available but limited: `https://schema.org/LimitedAvailability`
   - Sold out temporarily: `https://schema.org/OutOfStock`
   - Regularly available: `https://schema.org/InStock`
5. WhatsApp pre-filled messages: update the quoted price or product wording when needed.

Do not remove the page when stock is temporarily unavailable. Change the hero and call-to-action to “Join the next-batch list” or “WhatsApp for the next arrival” so the URL can continue ranking.

## After deployment

1. Open these URLs and check desktop and mobile display:
   - `/live-prawns-singapore`
   - `/zh/live-prawns-singapore`
   - `/ja/live-prawns-singapore`
   - `/blog/live-vannamei-prawns-singapore`
2. Test every WhatsApp button and confirm the `whatsapp_click` event in GA4 Realtime.
3. In Google Search Console, inspect the four URLs and request indexing.
4. Resubmit `https://www.crabtalk.sg/sitemap.xml`.
5. Validate the English product page with Google's Rich Results Test after any schema edit.

## Recommended content rhythm

Keep the commercial page stable. Add new arrival photos, customer cooking results and short updates to social channels, then link users back to `/live-prawns-singapore`. Create a new blog article only when it answers a different search intent, such as live prawns versus frozen prawns, prawn size grades, or how to keep live prawns before cooking.
