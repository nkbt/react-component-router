# react-component-router [![npm](https://img.shields.io/npm/v/react-component-router.svg?style=flat-square)](https://www.npmjs.com/package/react-component-router)

Routing solution for React, loosely based on the `component-router`

## Installation

### NPM

```sh
npm install --save react history qs react-component-router
```

Don't forget to manually install peer dependencies (`react`, `history`, `qs`).


### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/qs/dist/qs.js"></script>
<script src="https://unpkg.com/history/umd/history.min.js"></script>
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

Currently is being developed and tested with the latest stable `Node 14` on `OSX`.

To run example covering all `ReactComponentRouter` features, use `yarn start`, which will compile `example/index.js`

```bash
git clone git@github.com:nkbt/react-component-router.git
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
yarn e2e
```

## License

MIT
