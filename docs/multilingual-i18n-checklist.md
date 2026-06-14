# Multilingual Site Checklist

Use this checklist when a project claims full multilingual support.

## Architecture

- Keep one canonical language registry with language code, native label, and localized homepage headline.
- Use language-prefixed routes for non-English pages: `/zh/how-to-play/`, `/sv/how-to-play/`.
- Keep English at the root route: `/how-to-play/`.
- Language switching must preserve the current slug. Example: `/sv/rules/` to `/zh/rules/`.
- Generate localized utility pages too, including `/LANG/languages/`.
- Header logo, Play links, footer links, CTA buttons, and related links must point to the current language route.

## Copy Coverage

- Do not let non-English pages fall back to English UI labels.
- Cover header navigation, footer text, CTA buttons, page section headings, FAQ questions, related-link headings, and game controls.
- Cover game interaction messages: invalid row, invalid column, invalid region, touch rule, hint, undo, reset, win, hearts, best time, and difficulty labels.
- For generated pages without a custom translated title, use a localized slug fallback from the site language pack.
- For game puzzle titles without a localized title, use a localized generic title instead of the English puzzle name.

## Build Checks

- Run syntax checks for browser scripts and the page generator.
- Build all static pages.
- Scan representative non-English pages for leaked English UI strings such as `Play`, `Guide`, `Rules`, `Strategy`, `Quick answer`, `Related names`, `What is Meowdoku?`, and `Where should I start?`.
- Verify every non-English language in the registry has a complete browser-side game UI pack.
- Verify sitemap includes localized routes, including `/LANG/languages/`.

## Routing Checks

- `/` switching to `zh` should go to `/zh/`.
- `/how-to-play/` switching to `sv` should go to `/sv/how-to-play/`.
- `/sv/how-to-play/` switching to `zh` should go to `/zh/how-to-play/`.
- `/zh/languages/` switching to `ur` should go to `/ur/languages/`.

## Meowdoku Implementation Notes

- `site-language.js` owns cross-page language switching.
- `game.js` owns live game UI translation and reads the language from the URL first.
- `scripts/build-pages.mjs` owns static page generation, localized routes, sitemap, and localized homepage copies.
- `siteLocales` is the page-level language source for navigation, guide UI, FAQ fallback, footer, and homepage guide sections.
- `completeUiTranslations` is the game-level language source for controls, rules, status messages, hearts, difficulty, and result modal text.
