# Crab Talk Website — Easy Upload Version

This is a simple static website for https://www.crabtalk.sg/.

## What is included

- `index.html` — full website page
- `package.json` — Vercel build command
- `scripts/build.mjs` — creates the `dist` output folder for Vercel
- `vercel.json` — tells Vercel to deploy `dist`
- `robots.txt` and `sitemap.xml` — SEO basics
- `src/reviews.json` and `src/site-data.json` — notes/data copy for future updates

## Important

The review section uses real excerpts from the Google Business Profile screenshots provided by Crab Talk. It also links to the live Google reviews and the direct Google review collection link.

A fully automatic live Google review feed requires the official Google Places API. This version is intentionally kept simple and safe for GitHub + Vercel upload.

## Upload steps

1. Extract this ZIP file on your computer.
2. Go to GitHub repo: `CrabTalkSG/crabtalk.sg`.
3. Upload all files and folders from the extracted folder.
4. Commit directly to `main`.
5. Wait for Vercel deployment.
6. In Vercel, make sure the successful deployment is marked Current for `www.crabtalk.sg`.
