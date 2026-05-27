CRAB TALK LANGUAGE SOURCE FIX

This package fixes the actual deployment issue by updating BOTH:
1. root index.html static homepage
2. src/App.jsx React/Vite source

What changed:
- / is English-only in HTML source.
- /zh/ is Chinese-only in HTML source.
- /ja/ is Japanese-only in HTML source.
- Previous fonts, design, layout and images are preserved.
- Yellow Roe Crab wording changed to cold/grilled.
- Google Ads tag and GA4 remain.
- hreflang/canonical tags are clean.
- sitemap.xml and robots.txt refreshed.
- Vercel rewrites for /zh and /ja included.

Verification on generated English homepage:
Chinese/Japanese snippet count found: 2

After upload:
1. Commit to GitHub main.
2. Wait for Vercel Ready.
3. Open https://www.crabtalk.sg/?v=sourcefix2
4. View source and search "高级活海鲜" or "水槽から" — they should NOT appear on English homepage.
5. Open /zh/ and /ja/ separately.
