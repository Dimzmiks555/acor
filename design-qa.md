# ACOR redesign — design QA

final result: passed

## Visual target and implementation
- Source: /var/folders/5t/82cwwy_x19qg46r0923pdhy00000gn/T/codex-clipboard-e3753afd-8ffa-4867-8b91-a2c53650a2dc.png (2400 × 1800 reference board).
- Source direction: large product-led hero, light editorial typography, prominent wordmark. User explicitly changed blue to purple and approved the three-product landing structure.
- Local URL: http://127.0.0.1:4350/
- Desktop evidence: /tmp/acor-desktop.png, 1440 × 1000 CSS pixels, 1× density, hero/default state.
- Mobile evidence: /tmp/acor-mobile.png, 390 × 844 CSS pixels, 1× density, hero/default state.
- Catalog evidence: /tmp/acor-products.png, desktop product section.
- Combined comparison: /tmp/acor-comparison.png, reference and implementation each normalized to 700px wide, top-aligned. The reference board includes black framing and a taller composition; this is an art-direction comparison, not a pixel-identical clone.
- Full-page stitched capture was unreliable with browser viewport overrides; individual viewport captures and DOM section checks were used instead.

## Required surfaces
- Typography: local Roboto Light and Regular echo the reference's thin display line and stronger subsequent lines. Russian copy reflows without clipping. Body copy remains 16–18px, with smaller metadata.
- Layout: centered brand, menu left, shop right; display text left, tilted product right; full-width wordmark below. Mobile moves product below copy and CTA. Catalog uses three equal desktop columns and readable mobile cards.
- Color: saturated purple explicitly requested by the user, pale warm surfaces and a deep purple review section. Readable focus and hover states.
- Assets: real ACOR package graphics retained for all product details. Generated hero preserves the referenced brand and package information. Initial alpha-cutout attempts had halos and were rejected; final opaque hero uses a matched purple backdrop and soft CSS edge masking. No broken assets.
- Content: existing three products, package details and selected review excerpts retained. No invented ratings, discounts, prices or medical efficacy claims. All purchasing links preserve the existing Ozon destination. Instagram retained in footer.

## Comparison history
1. P2: initial hero backdrop rectangle visible. Fixed with matching background and display edge masking; rejected poor alpha variants. Post-fix evidence: acor-desktop.png and combined comparison.
2. P2: mobile caption overlapped bottle. Moved caption into normal flow below the image. Post-fix mobile capture and layout inspection show separation.
3. P2: mobile line breaks joined words. Added whitespace at hidden break.
4. Footer links now wrap to prevent narrow-screen overflow.

## Verification
- Widths 320, 390, 560, 768, 1024, 1440: no document horizontal overflow; no broken images.
- Menu open, menu link selection and close, Escape close/focus return tested in browser.
- Main CTA scrolls to products. Product and order links point to the original Ozon URL. Checkout on Ozon is external and was not exercised.
- Native anchor targets and local file references validated with HTMLParser; one H1.
- JavaScript syntax checked with node --check.
- Browser console: no errors.
- Reduced-motion preference disables motion and smooth scrolling.

## Follow-up
The authenticated GitHub account has READ permission on RazmahDM/acor. Implementation is committed locally; production publishing is separate from this preview handoff.

## Motion and navigation revision — 2026-10-13
User requested a more creative menu, textured background, removal of arrows, parallax and additional animation.
- Generated purple glass/satin background at img/purple-atmosphere.webp. New hero foreground uses generated transparent product with a contour display mask to suppress generation-edge debris.
- Fullscreen pale-lilac navigation with numbered editorial links, sequential reveal, inert closed state, Escape handling, keyboard focus cycle and mobile scroll support.
- Removed all arrow imagery from rendered page. CTA feedback now uses a small expanding dot and color/underline transitions.
- Scroll parallax updates three CSS transform variables in a single requestAnimationFrame; disabled below 761px and for reduced motion. Section reveals use IntersectionObserver and are visible without JS.
- Final hero evidence: /tmp/acor-motion-hero.png (1280 × 720). Mobile menu evidence: /tmp/acor-menu-v2.png (390 × 844).
- Browser checks: widths 320, 390, 768, 1024, 1440 have no horizontal overflow, no broken images and zero arrow image elements. Menu Tab moves to first menu link; Escape closes; choosing first link closes and reaches #products. At scrollY 1544.5 the background shift is 181.56px and six reveal targets are visible. Console errors: none.
- Visual checks: product rectangle removed, no caption/text collisions; menu text fits mobile. Requested dark violet background is an intentional change from the original flat-purple composition.
- Remaining P0/P1/P2 issues: none.
- final result: passed
