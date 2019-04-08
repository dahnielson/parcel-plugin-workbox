# parcel-plugin-workbox

[![Travis CI badge][travis badge]][travis url]
[![Greenkeeper badge][greenkeeper badge]][greenkeeper url]
[![Standard JS badge][standardjs badge]][standardjs url]

A plugin for [Parcel][parcel url] to generate a service worker with [Workbox][workbox url].

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

When you build resources with Parcel, the plugin will generate a service worker `sw.js` and insert it into your project's entry file.

You can customize the settings by adding a `workbox` section to your `package.json`.

```
"workbox": {
  importScripts: ['./worker.js'],           // scripts to import into `sw.js`
  globDirectory: './dist'             ,     // directory to include
  globPatterns: [                           // file types to include
  '**/*.{css,html,gif,js,jpg,png,svg,webp}'
}
```

By default, a `worker.js` file will be read from your project's root directory unless you change this setting. Additionally, a CDN version of Google Workbox and the generated precache, `service-worker.js`, are imported automatically.

A script tag loading the service worker will also be automatically injected into your project's `index.html` within the `dist` folder.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dahnielson/parcel-plugin-workbox/tags).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

[travis badge]: https://travis-ci.com/dahnielson/parcel-plugin-workbox.svg?branch=master
[travis url]: https://travis-ci.com/dahnielson/parcel-plugin-workbox
[greenkeeper badge]: https://badges.greenkeeper.io/dahnielson/parcel-plugin-workbox.svg
[greenkeeper url]: https://greenkeeper.io
[standardjs badge]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs url]: https://github.com/standard/standard

[parcel url]: https://parceljs.org
[workbox url]: https://developers.google.com/web/tools/workbox/
