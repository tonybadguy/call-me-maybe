'use strict';

const _test = require('tap').test;
const _defaultRequestFilters = require('./default-request-filters');
const _defaultOptionsFilter = require('./request-filters/default-options');
const _formatUrlFilter = require('./request-filters/format-url');

_test('Returns correct filters', assert =>{
  assert.plan(3);
  
  const defaultRequestFilters = _defaultRequestFilters();
  
  assert.equal(defaultRequestFilters.length, 2);
  assert.equal(defaultRequestFilters[0], _defaultOptionsFilter);
  assert.equal(defaultRequestFilters[1], _formatUrlFilter);
  
});