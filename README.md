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

## Milestones

Milestones are used to keep track of future releases. Both issues and pull requests related to the future release should have a milestone attached to them. Milestone names should be the same as the semantic version of the module. Once all of the attached issues and pull requests are completed, a new version of the module should be published to the npm registry. The milestone is then considered "complete" and should be closed. There should always be one open milestone setup. After closing a milestone, create a new one incrementing the patch number (x.x.patch). When assigning an issue to a milestone that is not just a bug fix but a new feature or breaking change, edit the milestone to reflect the new version. This is critical as it is the only clear way to communicate between collaborators what the changes in master include. Do no assign milestones to questions, discussions, any issue that does not result in a code change, documentation, examples, or pure tests changes. When publishing a new version to npm, tag master with git tag -a v1.2.3 -m 'version 1.2.3' and git push origin --tags. Then close the milestone matching the release and create a new one.

## Releases

Strictly adhere to [semantic versioning](http://semver.org/) for all versions. When a milestone is complete, the Lead Maintainer will go through the following steps:

1. Make sure the local master branch is 100% up to date with `upstream:master`.
2. Run `npm publish` in the command line to update the npm registry.
3. Tag the version just published to npm. Run `git tag -a vx.y.z -m "version x.y.z"` where `x.y.z` matches the `version` key in "package.json". The format of the tag and the message should match exactly as in the example.
4. Update the tags in the `upstream` remote via `git push upstream --tags`.
