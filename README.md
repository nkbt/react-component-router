# react-component-router

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/in-flux/help)

[![Circle CI](https://circleci.com/gh/in-flux/react-component-router.svg?style=svg)](https://circleci.com/gh/in-flux/react-component-router)
[![Coverage Status](https://coveralls.io/repos/in-flux/react-component-router/badge.svg?branch=master)](https://coveralls.io/r/in-flux/react-component-router?branch=master)
[![Dependency Status](https://david-dm.org/in-flux/react-component-router.svg)](https://david-dm.org/in-flux/react-component-router)
[![devDependency Status](https://david-dm.org/in-flux/react-component-router/dev-status.svg)](https://david-dm.org/in-flux/react-component-router#info=devDependencies)

Base for React ReactComponentRouters

## Reason

Developing and publishing multiple React components requires a lot of work to keep them all at the same code, ops, best-practices level. Most of configs are often copy-pasted. If one project updated, for exapmle, .eslintrc, other projects should follow to keep codebase consistent. Having growing number of components leads to a more diverged codebase that is exponentially harder to manage.


## Contents

- React module boilerplate dependencies and scripts
- .gitignore and .npmignore
- CircleCI config
- ESLint config - Nik Butenko
- Empty React component
- Example
- Tests and coverage


## Usage

1. Add as remote

  ```sh
  git remote add template git@github.com:in-flux/react-component-router.git
  ```

2. Merge to existing repo

  ```sh
  git merge --no-ff template/master
  ```

3. Fix conflicts
4. If update needed, repeat


# Here be dragons


## Register component on Bower


#### 1. Update `./scipts/vars.sh`

By default org name is `bower-registry`, which means component will be published at http://github.com/bower-registry/component-name

#### 2. Create repo to keep built artifacts

You must have create repo access to the org and have `~/.github/github.token` available.

You can generate token in your github.com profile settings: https://github.com/settings/tokens/new.
Only `public_repo` access is necessary. Then simply save token to `~/.github/github.token`

```sh
npm run bower:create-repo
```

#### 3. Publish built artifacts to the created repo

You must have push access to the repo.

```sh
npm run bower:publish
```

#### 4. Register component on Bower

```sh
npm run bower:register
```

## Publish new version of component to Bower

Assuming component was previously published using steps above.

After new version is published to NPM:

```sh
npm run bower:publish
```
