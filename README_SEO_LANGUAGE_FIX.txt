SEO LANGUAGE FIX

This version fixes the issue where SEO pages return to English after selecting Chinese or Japanese.

What changed:
1. Homepage SEO links now keep the selected language.
2. SEO pages read language from:
   - ?lang=en / ?lang=zh / ?lang=jp
   - browser localStorage from the homepage language selector
3. SEO pages now show localized Chinese/Japanese content using a lightweight page script.
4. SEO pages include their own EN / 中文 / 日本語 buttons.
5. Back-to-homepage links preserve the selected language.

Default language remains English.

Upload instructions:
1. Unzip this package.
2. Upload/replace all files in your GitHub repo.
3. Commit and push.
4. Let Vercel redeploy.
