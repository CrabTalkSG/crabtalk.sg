# Crab Talk website — final homepage and live-prawns refresh

## What changed
- Shortened the English homepage from 15 major sections to 9 conversion-focused sections.
- Reduced the homepage catalogue to six priority categories.
- Combined “How It Works” with Fai Kee and Mod Keaw cooking options.
- Combined customer trust, Google reviews and local features into one section.
- Combined location and operating hours.
- Added Live Prawns to navigation.
- Standardised LocalBusiness structured data to one `#localbusiness` entity.
- Standardised hours: Tue, Wed, Fri, Sat and Sun, 8am–3pm; closed Mon and Thu.
- Added one shared `site.js` tracker: Crab Talk WhatsApp clicks fire one GA4 `whatsapp_click` key event and one Google Ads conversion. Partner WhatsApp clicks are recorded separately.
- Added responsive WebP homepage images, lazy loading, image dimensions and async decoding.
- Kept the live-prawn positioning evergreen: approximately 20 prawns/kg, featured price $38/kg, pre-orders and larger quantities can be arranged.

## Deployment
Upload the complete contents of this `crabtalk.sg` folder to the existing Vercel project. Do not upload only individual files.

## After deployment
1. Open the homepage on mobile and desktop.
2. Click one Crab Talk WhatsApp button and confirm `whatsapp_click` in GA4 Realtime.
3. Click the Mod Keaw WhatsApp link and confirm it appears as `partner_whatsapp_click`, not `whatsapp_click`.
4. Request indexing for `/`, `/live-prawns-singapore`, `/zh/live-prawns-singapore`, and `/ja/live-prawns-singapore`.
5. Resubmit `/sitemap.xml` in Search Console.
