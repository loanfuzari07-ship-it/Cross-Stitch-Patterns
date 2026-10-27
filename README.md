# The Everyday Cross Stitch Library — Vercel export

A standalone copy of the latest sales page, optimized for loading speed. No installation, build step, server, database, or ChatGPT sign-in is required by this page.

## Publish from GitHub

1. Extract the ZIP on your computer.
2. Create a GitHub repository and upload the extracted contents, including the `public` folder and `vercel.json`. Do not upload only the ZIP or put everything inside another enclosing folder.
3. In Vercel, create a new project and import that GitHub repository.
4. Use these settings if asked: Framework Preset **Other**; Root Directory **repository root**; Output Directory **public**; Build Command **empty**; Install Command **empty**.
5. Deploy. The included `vercel.json` already sets these options.
6. Add your own domain in the Vercel project when ready.

## What is configured

- Essential Collection: USD 9.99, with the optional upgrade popup.
- Complete upgrade: USD 12.99.
- Regular Complete Collection: USD 17.99.
- All three supplied Hotmart URLs and their offer codes are preserved.
- Meta Pixel **29307585535588876**, initialized once with PageView.
- The supplied UTMify loader, including `data-utmify-prevent-subids`.
- The latest headline, copy, reviews, 7-day guarantee, bonus cards, and automatic project previews.

This ZIP contains the public sales page and its images. The paid product PDFs are delivered separately through your checkout platform.

## Loading optimizations

- Responsive AVIF images for product photography, with WebP fallbacks.
- Responsive high-quality WebP previews for chart sheets.
- High-resolution gallery files load only when a preview is opened.
- The hero image has responsive preload and high fetch priority.
- Other page images load lazily and decode asynchronously.
- Explicit image dimensions reserve the correct space while loading.
- CSS is embedded in the HTML to avoid a blocking stylesheet request.
- The two small local JavaScript files are combined into one deferred file.
- Only referenced assets are packaged.
- Image and JavaScript filenames contain content hashes and have one-year immutable browser caching. The HTML is revalidated so new page versions are picked up.
- No framework runtime, web font download, npm dependency, or build step.

The third-party Meta, UTMify, and Hotmart services remain external. Their availability and response times are outside this static page.

## Editing

Page content and CSS: `public/index.html` (CSS is in the `<style>` element).
Checkout URLs and page interactions: the `site.*.js` file in `public/assets`.
Images: `public/assets`.
Vercel settings and cache headers: `vercel.json`.

When changing an asset or the JavaScript file, give the changed file a new filename and update its references in `index.html` so browsers do not reuse an older cached copy. The existing content hashes already handle the files in this export.

After choosing your final domain, replace the relative `og:image` value in `public/index.html` with that image's complete HTTPS URL on your own domain for social sharing.

## Local preview

From this extracted directory, run:

```bash
python3 -m http.server 8080 --directory public
```

Open `http://localhost:8080`. This is optional and does not install anything.

## References

- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json
