# Chheda Jewellers - Store Visit-Link

A standalone store locator with the original Chheda Jewellers logo, green and gold brand palette, locally hosted brand fonts, and two accessible Google Maps links. A brief monogram rotation opens the page, then lands in the header as the store links appear. Responsive, keyboard accessible, and respectful of reduced-motion preferences. The store links remain usable without JavaScript.

## Intro animation

The owner-supplied transparent monogram is preserved in `public/assets/intro-monogram.png`. `public/intro.js` uses a locally hosted GSAP 3.15.0 timeline for the approximately 2.7-second opening. Skip intro or Escape reveals the page immediately; reduced-motion users see the page directly. Failed animation loading reveals the page automatically, and resizing or leaving the tab finishes the intro. The existing store destinations are unchanged.

GSAP's copyright and [standard license](https://gsap.com/standard-license/) are retained in `public/assets/vendor/gsap.min.js`. No external animation CDN or install step is required.

## Preview

With Node.js 20 or newer installed, run `npm run dev`, then open `http://127.0.0.1:4173`. No install step is needed. Set `PORT` to use a different port.

## Deploy to Vercel

Import `apar-ag3ncy/chheda-jewellers-store-link` into Vercel. The included `vercel.json` selects **Other**, skips the install and build steps, and serves **public** as the output directory. Use the repository root as the Root Directory. No environment variables are needed.

These settings follow [Vercel's static-site build configuration](https://vercel.com/docs/builds/configure-a-build).

## Store links

- Vile Parle: https://www.google.com/maps/search/?api=1&query=Chheda+Jewellers+Trinity+Square+Vile+Parle+East
- Ghatkopar: https://www.google.com/maps/search/?api=1&query=Chheda+Jewellers+Vardhaman+Business+Bay+Vallabh+Baug+Lane+Ghatkopar+East

The buttons use [Google's universal Maps URLs](https://developers.google.com/maps/documentation/urls/get-started), which open in desktop browsers and supported mobile apps. They avoid the `maps.app.goo.gl` redirect host, which timed out in the desktop browser. Both direct searches were verified to open the matching Chheda store and address in Chrome.

To change a destination, edit the corresponding `href` in `public/index.html`. Styling is in `public/styles.css`. Brand assets and fonts are in `public/assets`.

Original owner-supplied links, retained for reference: Vile Parle `https://maps.app.goo.gl/8me6s99iWbzyr16g8`, Ghatkopar `https://maps.app.goo.gl/XEFAvPCUkt5V5tUu7`. This page opens Google Maps in a new tab; Google Maps handles directions and navigation.
