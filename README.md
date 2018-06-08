# parcel-plugin-workbox

[![js-standard-style][standard-image]][standard-url]

A plugin for [Parcel][parcel-url] to generate a service worker with [Workbox][workbox-url].

## Install

You can either install by running yarn (recommended)

```bash
yarn add parcel-plugin-workbox --dev
```

or use npm

```bash
npm install parcel-plugin-workbox --save-dev
```

## Usage

When you build resources with Parcel, the plugin will generate a service worker `sw.js` that you can register in your web page:

```html
<script>
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dahnielson/parcel-plugin-workbox/tags).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/standard/standard
[parcel-url]: https://parceljs.org
[workbox-url]: https://developers.google.com/web/tools/workbox/
