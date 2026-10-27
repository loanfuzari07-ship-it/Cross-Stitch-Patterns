# Optimization and validation

The export uses the latest published source, commit `162145d595a4ccac28397f916da8a789bc53f50a`.

## File-size comparison

| Comparison | Before | Optimized | Reduction |
| --- | ---: | ---: | ---: |
| Hero source versus its 640-pixel AVIF variant | 542,040 bytes | 71,125 bytes | 86.9% |
| Distinct page images: original sources versus medium responsive variants | 12,768,578 bytes | 2,639,315 bytes | 79.3% |

The browser chooses the appropriate size and format for its viewport and pixel density. These are file-size measurements, not a promise of a particular network transfer size, speed score, or loading time. The high-resolution versions of all 30 gallery items remain available for enlargement and are not loaded by the hidden lightbox on initial page load.

## Checks completed

- Every local image, source set, script and section anchor resolves.
- Every packaged raster image can be decoded.
- All inline and bundled JavaScript passes syntax checks.
- The three supplied checkout URLs and original offer codes are preserved.
- Meta Pixel initializes once with PageView; the UTMify loader is preserved.
- The optimized hero loads as AVIF in the browser.
- The page has no horizontal overflow in desktop and 375/390-pixel layout checks.
- Gallery enlargement loads the full 1224 x 1584 chart in the checked example.
- The upgrade popup and mockup display correctly in desktop and mobile layout checks.
- The archive contains no Git history, hosting credentials or ChatGPT authentication dependency.

A live Vercel deployment and its platform cache headers can only be verified after importing the repository and deploying. External checkout availability is controlled by Hotmart.
