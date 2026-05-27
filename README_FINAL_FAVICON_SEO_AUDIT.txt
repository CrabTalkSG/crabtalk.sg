CRAB TALK FINAL FAVICON + SEO AUDIT FIX

This package specifically fixes the recurring favicon issue on blog pages.

What was done:
1. Copied favicon files to BOTH root and /public.
2. Added cache-busted favicon tags to EVERY HTML page:
   /favicon.ico?v=20260526
   /favicon-32x32.png?v=20260526
   /favicon-16x16.png?v=20260526
   /apple-touch-icon.png?v=20260526
3. Checked all blog pages for favicon tags.
4. Kept existing design, fonts, layout and images.
5. Kept Google Ads tag AW-799808799 and GA4 G-V94NDT5ZCR.
6. Refreshed sitemap.xml and robots.txt.
7. Kept Yellow Roe Crab wording as cold/grilled.

Verification:
{
  "root_favicon_ico": true,
  "public_favicon_ico": true,
  "root_favicon_32": true,
  "public_favicon_32": true,
  "root_apple_touch_icon": true,
  "public_apple_touch_icon": true,
  "html_files_updated": 41,
  "blog_html_pages_found": 17,
  "sitemap_urls": 26,
  "homepage_has_ads_tag": true,
  "homepage_has_ga4_tag": true,
  "blog_pages_missing_favicon_tags": []
}

After upload:
1. Commit to GitHub main.
2. Wait for Vercel deployment.
3. Open:
   https://www.crabtalk.sg/favicon.ico?v=20260526
   https://www.crabtalk.sg/favicon-32x32.png?v=20260526
   https://www.crabtalk.sg/blog/?v=favicon20260526
4. Hard refresh browser.
5. Browser favicons can be cached aggressively; if tab icon still looks missing, test in Incognito.
