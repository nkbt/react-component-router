# react-component-router [![npm](https://img.shields.io/npm/v/react-component-router.svg?style=flat-square)](https://www.npmjs.com/package/react-component-router)

Official ComponentRouter bindings for React.

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)
[![Build](https://img.shields.io/circleci/project/in-flux/react-component-router.svg?style=flat-square)](https://circleci.com/gh/in-flux/react-component-router)
[![Coverage](https://img.shields.io/codecov/c/github/in-flux/react-component-router.svg?style=flat-square)](https://codecov.io/github/in-flux/react-component-router?branch=master)
[![Dependencies](https://img.shields.io/david/in-flux/react-component-router.svg?style=flat-square)](https://david-dm.org/in-flux/react-component-router)
[![Dev Dependencies](https://img.shields.io/david/dev/in-flux/react-component-router.svg?style=flat-square)](https://david-dm.org/in-flux/react-component-router#info=devDependencies)


## Installation

### NPM

```sh
npm install --save react redux history qs component-router react-component-router
```

Don't forget to manually install peer dependencies (`react`, `redux`, `history`, `qs`, `component-router`) if you use npm@3.


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://unpkg.com/redux/dist/redux.min.js"></script>
<script src="https://unpkg.com/qs/dist/qs.js"></script>
<script src="https://unpkg.com/history/umd/history.min.js"></script>
<script src="https://unpkg.com/component-router/build/component-router.min.js"></script>
<script src="https://npmcdn.com/react-component-router/build/react-component-router.min.js"></script>
(Module exposed as `ReactComponentRouter`)
```


## Demo

```js
// TODO
```

## Codepen demo

```js
// TODO
```


## Usage

See [example/App/index.js](example/App/index.js)


## Options

```js
// TODO
```


## Development and testing

Currently is being developed and tested with the latest stable `Node 7` on `OSX`.

To run example covering all `ReactComponentRouter` features, use `npm start`, which will compile `example/index.js`

```bash
git clone git@github.com:nkbt/react-component-router.git
cd react-component-router
npm install
npm start

# then
open http://localhost:8080
```

## Tests

```bash
npm start test

# Run End-2-End tests
npm start e2e

# to generate test coverage (./reports/coverage)
npm start cov
```

## License

MIT
