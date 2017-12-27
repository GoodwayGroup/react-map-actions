'use strict';

/**
 * Create contextual action hash
 * @param  {Array[String]} actions Actions to map
 * @param  {String} actionPrefix   Prefix to all actions
 * @return {Object}                Actions as keys and {prefix}/{action} as the value
 */
module.exports = function (actions, actionPrefix) {

    if (Array.isArray(actions) === false) {
        throw new Error('actions must be an array');
    }

    return actions.reduce(function (mapping, action) {

        mapping[action] = actionPrefix + '/' + action;
        return mapping;
    }, {});
};
