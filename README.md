# Math.atanh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.atanh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.atanh
```

## Usage/Examples

```js
console.log(Math.atanh(-1)); // -Infinity
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(2)); // NaN
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-shims/math.atanh
[npm-version-svg]: https://versionbadg.es/es-shims/math.atanh.svg
[deps-svg]: https://david-dm.org/es-shims/math.atanh.svg
[deps-url]: https://david-dm.org/es-shims/math.atanh
[dev-deps-svg]: https://david-dm.org/es-shims/math.atanh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/math.atanh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-shims/math.atanh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-shims/math.atanh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-shims/math.atanh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-shims/math.atanh
