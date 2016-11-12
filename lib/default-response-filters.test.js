'use strict';

const _test = require('tap').test;
const _defaultResponseFilters = require('./default-response-filters');
const _unhandledStatusFilter = require('./response-filters/unhandled-status');
const _jsonBodyFilter = require('./response-filters/json-body');

_test('Returns correct filters', assert =>{
  assert.plan(3);
  
  const defaultResponseFilters = _defaultResponseFilters();
  
  assert.equal(defaultResponseFilters.length, 2);
  assert.equal(defaultResponseFilters[0], _unhandledStatusFilter);
  assert.equal(defaultResponseFilters[1], _jsonBodyFilter);
  
});