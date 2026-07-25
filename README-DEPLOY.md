# Crab Talk Website — Clean Improved Release

This release was rebuilt directly from the user-supplied `crabtalk.sg(1).zip`. It is the only source package that should be used for the next deployment. Do not merge it with any earlier generated package.

## Approved product range

The public website is focused on these products only:

- Mud Crab
- Yellow Roe Crab
- Red Roe Crab
- Double Shell Crab
- Alaskan King Crab
- Live Vannamei Prawns
- Green Lobster
- Boston Lobster
- Australian Rock Lobster
- Fanny Bay Sunseeker Oysters
- Coffin Bay Oysters
- Seasonal Oysters
- Manila Clams
- Soon Hock
- Patin
- Turbot
- Freshly Frozen Kelong Sotong
- Brazil Angus Ribeye
- Brazil Angus Striploin
- Chilli Crab Sauce and Mantou when available

## Correct operating hours

- Monday: 12PM–5PM
- Tuesday–Thursday: 8AM–7PM
- Friday–Saturday: 8AM–8PM
- Sunday: 8AM–5PM

The same hours are used on the English, Chinese and Japanese homepages and in every LocalBusiness structured-data object.

## Main improvements

- Rebuilt the English homepage into a shorter, clearer conversion page.
- Made the mobile product range horizontally swipeable to reduce excessive page length.
- Added a complete `/products` directory covering every approved product.
- Created or rebuilt dedicated pages for the main product categories and missing products.
- Kept English, Chinese and Japanese entry pages.
- Added a visible Kelong Sotong category and dedicated page.
- Removed the 10kg limitation and other artificial scarcity claims from live prawns.
- Removed unwanted product references from public HTML content.
- Centralised WhatsApp and Google Ads click tracking in `assets/site-v2.js` to avoid duplicate conversion firing.
- Standardised one Crab Talk LocalBusiness entity on every page.
- Added the correct operating hours to all structured data.
- Updated canonical URLs, sitemap and Vercel redirects.
- Optimised the core product photos to WebP and removed approximately 39MB of unused image files.
- Added lazy loading and image dimensions on the new core pages.
- Added security and cache headers in `vercel.json`.

## Photo integrity

Existing Crab Talk product/stall photos from the uploaded source are used wherever a reliable matching photo was available. The uploaded source did not contain dependable real photos for Patin, Turbot, Brazil Angus steaks, and chilli crab sauce with mantou. Those pages therefore use clean branded product graphics rather than unrelated or misleading stock photos.

To replace any branded graphic later, upload a genuine Crab Talk photo using the same filename in `images/web/`:

- `patin.webp`
- `turbot.webp`
- `angus-steak.webp`
- `sauce-mantou.webp`

No HTML change will be required if the filenames and dimensions are retained.

## Deployment — GitHub/Vercel

1. Back up the current GitHub repository.
2. Extract the release ZIP.
3. Upload **the contents** of the extracted package to the root of the GitHub repository. `index.html`, `vercel.json`, `assets`, `images`, `blog`, `zh`, and `ja` must appear at repository root.
4. Delete obsolete repository files that are not present in this package, rather than leaving old pages/assets mixed in.
5. Commit to the Vercel production branch, normally `main`.
6. Confirm that Vercel creates a new Production deployment from that commit.
7. Hard-refresh the live site with `Ctrl + Shift + R`.

## Immediate live checks

Verify these URLs after deployment:

- `/`
- `/products`
- `/live-prawns-singapore`
- `/live-crab-singapore`
- `/live-lobster-singapore`
- `/fresh-oysters-singapore`
- `/fresh-fish-singapore`
- `/kelong-sotong-singapore`
- `/brazil-angus-steak-singapore`
- `/chilli-crab-sauce-mantou-singapore`
- `/zh`
- `/ja`

The homepage must display the approved product range and these hours:

- Monday 12PM–5PM
- Tuesday–Thursday 8AM–7PM
- Friday–Saturday 8AM–8PM
- Sunday 8AM–5PM

## Measurement check

After deployment, open GA4 Realtime and click one Crab Talk WhatsApp button. Confirm that `whatsapp_click` appears. The central script also sends the existing Google Ads conversion action once per click.

## Search Console

After the correct production version is confirmed, inspect and request indexing for the homepage, `/products`, and the main product pages. Resubmit `/sitemap.xml` once.
