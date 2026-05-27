CRAB TALK EXACT LANGUAGE SOURCE FIX

This package is built specifically to fix the live issue where the homepage still shows English + Chinese + Japanese together.

IMPORTANT:
After deploying, open:
https://www.crabtalk.sg/?v=language-hotfix-20260526

Then View Source and search for this marker:
CRABTALK_LANGUAGE_SOURCE_FIX_2026_05_26_ENGLISH_ONLY_HOMEPAGE

If you cannot find that marker, Vercel is still serving an old file or the wrong GitHub branch/folder.

What this package contains:
- / index.html = English-only source
- /zh/ = Chinese-only source
- /ja/ = Japanese-only source
- Yellow Roe Crab text fixed to cold/grilled
- Previous design/fonts/images preserved
- Google Ads tag and GA4 kept
- hreflang kept
- sitemap/robots retained

Local verification before ZIP:
Bad mixed-language terms found in English homepage: []

Upload checklist:
1. Unzip this package.
2. In GitHub, replace the ROOT index.html. This is the most important file.
3. Also replace public/zh/index.html and public/ja/index.html.
4. Commit to main.
5. In Vercel, ensure latest deployment is from main and Ready.
6. Open source and search the marker above.
