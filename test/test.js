'use strict';

const { expect, it } = exports.lab = require('lab').script();
const MapActions = require('../');

it('returns a correct object', () => {

    expect(MapActions(['LOAD', 'LOAD_SUCCESS'], 'TEST')).to.equal({
        LOAD: 'TEST/LOAD',
        LOAD_SUCCESS: 'TEST/LOAD_SUCCESS'
    });
});

it('throws an error if not given an array', () => {

    expect(() => {

        MapActions('LOAD', 'TEST');
    }).to.throw();
});
