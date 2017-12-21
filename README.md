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
