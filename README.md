# react-component-router

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/in-flux/help)

[![Circle CI](https://circleci.com/gh/in-flux/react-component-router.svg?style=svg)](https://circleci.com/gh/in-flux/react-component-router)
[![Coverage Status](https://coveralls.io/repos/in-flux/react-component-router/badge.svg?branch=master)](https://coveralls.io/r/in-flux/react-component-router?branch=master)
[![Dependency Status](https://david-dm.org/in-flux/react-component-router.svg)](https://david-dm.org/in-flux/react-component-router)
[![devDependency Status](https://david-dm.org/in-flux/react-component-router/dev-status.svg)](https://david-dm.org/in-flux/react-component-router#info=devDependencies)

Official ComponentRouter bindings for React.

## Installation

### NPM

```sh
npm install --save react react-component-router
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


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
