# DEPRECATED

Please use the [Vuetify CLI 3.x](https://github.com/vuetifyjs/vue-cli-plugin-vuetify) plugin, and follow the instructions there to add cordova functionality.

# vue-pwa-cordova-boilerplate

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) template with webpack, hot-reload, lint-on-save, unit testing & css extraction, that is wrapped in a cordova project.

## Documentation

- This template builds on top of the main webpack template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).

- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ or [yarn](https://yarnpkg.com) for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init vuetifyjs/cordova my-project
$ cd my-project
$ npm install
$ npm run dev
$ cordova platform add android
$ cordova platform add ios
$ npm run android
$ npm run ios
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

### Storing icons locally

If you want your icons to be present when the user starts the app offline for the first time, follow the steps in [this stackoverflow thread](https://stackoverflow.com/questions/37270835/how-to-host-material-icons-offline).

This is not necessary if your users load the app while online, because the icons will then be cached and will not need to be loaded again even when the user goes offline.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

## Reminder about android package naming conventions

Use these [Naming conventions](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html) for reverse doamin name to prevent build failure.
If you've already initialised your project this can be changed in `config.xml`.

## For iPhone X

[This thread](https://stackoverflow.com/questions/46232812/cordova-app-not-displaying-correctly-on-iphone-x-simulator) helps understanding the status bar changes made for iPhone X.

It is recommended to install [cordova-plugin-statusbar](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-statusbar/), and add these configurations to your config.xml as required:

```xml
  <preference name="StatusBarOverlaysWebView" value="false" />
  <platform name="android">
      <preference name="StatusBarBackgroundColor" value="#005790" />
  </platform>
  <platform name="ios">
      <preference name="StatusBarBackgroundColor" value="#1a78b4" />
  </platform>
```

Android spec requires a darker color from your apps primary theme color, hence the different colors for the different platforms.

## Android headercolor

The android header-color is the color of the taskbar when minimising the app. This can be altered by installing [cordova-plugin-headercolor](https://github.com/tomloprod/cordova-plugin-headercolor).
