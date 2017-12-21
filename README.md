# react-map-actions

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
