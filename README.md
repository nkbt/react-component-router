# react-component-router [![npm](https://img.shields.io/npm/v/react-component-router.svg?style=flat-square)](https://www.npmjs.com/package/react-component-router)

Official ComponentRouter bindings for React.

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)
[![CircleCI](https://img.shields.io/circleci/project/in-flux/react-component-router.svg?style=flat-square)](https://circleci.com/gh/in-flux/react-component-router)
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
<script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/redux/dist/redux.min.js"></script>
<script src="https://unpkg.com/qs/dist/qs.js"></script>
<script src="https://unpkg.com/history/umd/history.min.js"></script>
<script src="https://unpkg.com/component-router/build/component-router.min.js"></script>
<script src="https://unpkg.com/react-component-router/build/react-component-router.min.js"></script>
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

Currently is being developed and tested with the latest stable `Node 8` on `OSX`.

To run example covering all `ReactComponentRouter` features, use `yarn start`, which will compile `example/index.js`

```bash
git clone git@github.com:in-flux/react-component-router.git
cd react-component-router
yarn install
yarn start

# then
open http://localhost:8080
```

## Tests

```bash
# to run ESLint check
yarn lint

# to run tests
yarn test

# to run end-to-end tests
# first, run `selenium/standalone-firefox:3.4.0` docker image
docker run -p 4444:4444 selenium/standalone-firefox:3.4.0
# then run test
yarn e2e
```

## License

MIT
