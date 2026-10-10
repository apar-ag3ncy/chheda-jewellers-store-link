# Chheda Jewellers - Store Visit-Link

A standalone store locator with the original Chheda Jewellers logo, green and gold brand palette, locally hosted brand fonts, and two accessible Google Maps links. Responsive, keyboard accessible, and respectful of reduced-motion preferences. No runtime dependencies, tracking, or JavaScript required by the page.

## Preview

With Node.js 20 or newer installed, run `npm run dev`, then open `http://127.0.0.1:4173`. No install step is needed. Set `PORT` to use a different port.

## Deploy to Vercel

Import `apar-ag3ncy/chheda-jewellers-store-link` into Vercel. The included `vercel.json` selects **Other**, skips the install and build steps, and serves **public** as the output directory. Use the repository root as the Root Directory. No environment variables are needed.

These settings follow [Vercel's static-site build configuration](https://vercel.com/docs/builds/configure-a-build).

## Store links

- Vile Parle: https://maps.app.goo.gl/8me6s99iWbzyr16g8
- Ghatkopar: https://maps.app.goo.gl/XEFAvPCUkt5V5tUu7

To change a destination, edit the corresponding `href` in `public/index.html`. Styling is in `public/styles.css`. Brand assets and fonts are in `public/assets`.

The links were supplied by the site owner. This page opens Google Maps in a new tab; Google Maps handles directions and navigation.
