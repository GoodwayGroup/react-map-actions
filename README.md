# react-map-actions
[![CircleCI](https://img.shields.io/circleci/project/github/GoodwayGroup/react-map-actions.svg)](https://circleci.com/gh/GoodwayGroup/react-map-actions) [![Codecov](https://img.shields.io/codecov/c/github/GoodwayGroup/react-map-actions.svg)](https://codecov.io/gh/GoodwayGroup/react-map-actions) [![npm (scoped)](https://img.shields.io/npm/v/@goodwaygroup/react-map-actions.svg)](https://www.npmjs.com/package/@goodwaygroup/react-map-actions) [![GitHub tag](https://img.shields.io/github/tag/GoodwayGroup/react-map-actions.svg)](https://github.com/GoodwayGroup/react-map-actions)
[![GitHub package version](https://img.shields.io/github/package-json/v/GoodwayGroup/react-map-actions.svg)](https://github.com/GoodwayGroup/react-map-actions)

Creates an object to be used as action types for events dispatched to Redux.

## Example

```js
const mapActions = require('@goodwaygroup/react-map-actions');

mapActions([
    'LOAD',
    'LOAD_SUCCESS',
    'LOAD_FAIL'
], 'TODO');

// ===
// {
//     LOAD: 'TODO/LOAD',
//     LOAD_SUCCESS: 'TODO/LOAD_SUCCESS',
//     LOAD_FAIL: 'TODO/LOAD_FAIL',
// }
```

## mapActions(actions, actionPrefix)

* actions _Array[String]_
* actionPrefix _String_

Returns an Object

## Releases

Strictly adhere to [semantic versioning](http://semver.org/) for all versions. When a release is ready, the Lead Maintainer will go through the following steps:

1. Make sure the local master branch is 100% up to date with `upstream:master`.
2. Run `npm publish` in the command line to update the npm registry.
3. Tag the version just published to npm. Run `git tag -a vx.y.z -m "version x.y.z"` where `x.y.z` matches the `version` key in "package.json". The format of the tag and the message should match exactly as in the example.
4. Update the tags in the `upstream` remote via `git push upstream --tags`.
