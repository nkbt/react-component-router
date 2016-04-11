# react-component-router [![npm](https://img.shields.io/npm/v/react-component-router.svg?style=flat-square)](https://www.npmjs.com/package/react-component-router)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/in-flux/react-component-router.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/in-flux/react-component-router)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-component-router.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-component-router)
[![Coverage](https://img.shields.io/codecov/c/github/in-flux/react-component-router.svg?style=flat-square)](https://codecov.io/github/in-flux/react-component-router?branch=master)
[![Dependencies](https://img.shields.io/david/in-flux/react-component-router.svg?style=flat-square)](https://david-dm.org/in-flux/react-component-router)
[![Dev Dependencies](https://img.shields.io/david/dev/in-flux/react-component-router.svg?style=flat-square)](https://david-dm.org/in-flux/react-component-router#info=devDependencies)

Official ComponentRouter bindings for React.

## Installation

### NPM

```sh
npm install --save react component-router@alpha react-component-router
```

Don't forget to manually install peer dependencies (`react`, `component-router@alpha`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-component-router/bower.zip
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-component-router": "https://npmcdn.com/react-component-router/bower.zip"
  }
}
```

then include as
```html
<script src="bower_components/react/react.js"></script>
<script src="bower_components/react-component-router/build/react-component-router.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-component-router/build/react-component-router.js"></script>
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
```js
// TODO
```

## Options
```js
// TODO
```


## Development and testing

Currently is being developed and tested with the latest stable `Node 5` on `OSX` and `Windows`.
Should be ok with Node 4, but not guaranteed.

To run example covering all `ReactComponentRouter` features, use `npm start`, which will compile `src/example/Example.js`

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
npm test

# to run tests in watch mode for development
npm run test:dev

# to generate test coverage (./reports/coverage)
npm run test:cov
```

## License

MIT
