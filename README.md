# Metaphor Security

React implementation of the **Metaphore Security - Home Page** frame (`226:15`) on the UI Design canvas linked in the request. Original artwork and SVG files are included under `public/assets`. The page is built with React, Vite, and plain CSS.

## Run

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then inspect it with `npm run preview`. `dist/` contains the generated static site and can be served by a static web host. Use an HTTP server rather than opening `index.html` as a local file.

## Design and behavior

- All eight sections follow the supplied desktop frame: hero, solution, process, audience cards, iceberg, interconnected value, testimonial, and footer.
- The 1920 px desktop composition uses the design's measurements. Grid and flex layouts reflow for tablet and mobile.
- Original image crops, gradients, masks, angled button pieces, diagram connectors, portrait grid, and footer wordmark are preserved.
- Navigation scrolls to existing sections. The mobile navigation opens and closes, and closes after choosing a destination.
- Audience tabs update their content. Arrow keys, Home, and End work in the tab list.
- Wishlist buttons open a native modal dialog with required name/email fields. Escape and the close button dismiss it, returning focus to its trigger.
- Wishlist and newsletter forms validate input and save on the current device using localStorage. The confirmation states that no live registration service is connected.

## Remaining source limitations

**Aeonik:** Figma specifies Aeonik Regular and Bold but does not provide font files. CSS uses locally installed Aeonik when available, then falls back to Arial. Exact typography requires licensed Aeonik webfonts. Add those files to `public/assets` and update the two Aeonik `@font-face` declarations in `src/styles.css`. Geist Mono is included locally with its OFL license.

**Coin video:** the coin is a video fill in Figma, omitted by its generated code. The original `white-meta.mp4` was found in the user-provided `D:\Landing Page` project and is included locally. It plays muted and loops, with a high-resolution original still as its poster. Autoplay is disabled when the browser requests reduced motion. No font files or Aeonik references were found in the supplied project.

**External destinations:** investor documents, company social profile URLs, and registration APIs were not supplied. The investor button presents the available information. Social links currently open their respective platforms; replace them with the company's profile URLs when available.

The testimonial and partner logos reproduce the supplied design content. Testimonial pagination squares are decorative because the provided frame contains only one testimonial.

## Files

- `src/main.jsx`: React sections, shared visual components, dialogs, and form behavior.
- `src/styles.css`: desktop measurements, local font declarations, asset geometry, and responsive rules.
- `public/assets`: original Figma assets and Geist Mono fonts.
- `ASSETS.md`: artwork-to-layer mapping.
- `QA.md`: build and browser verification results.

References: [Figma design](https://www.figma.com/design/10BDyDiQjum4txybyob2zo/Metaphorsec?node-id=226-15), [React documentation](https://react.dev/learn), [Vite documentation](https://vite.dev/guide/).
