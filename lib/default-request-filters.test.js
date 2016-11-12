'use strict';

const _test = require('tap').test;
const _defaultRequestFilters = require('./default-request-filters');
const _defaultOptionsFilter = require('./request-filters/default-options');
const _formatUrlFilter = require('./request-filters/format-url');
const _jsonBodyFilter = require('./request-filters/json-body');

_test('Returns correct filters', assert =>{
  assert.plan(4);
  
  const defaultRequestFilters = _defaultRequestFilters();
  
  assert.equal(defaultRequestFilters.length, 3);
  assert.equal(defaultRequestFilters[0], _defaultOptionsFilter);
  assert.equal(defaultRequestFilters[1], _formatUrlFilter);
  assert.equal(defaultRequestFilters[2], _jsonBodyFilter);
  
});