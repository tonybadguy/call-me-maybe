'use strict';

const _test = require('tap').test;
const _defaultRequestFilters = require('./default-request-filters');
const _defaultOptions = require('./request-filters/default-options');
const _formatUrl = require('./request-filters/format-url');
const _jsonBody = require('./request-filters/json-body');
const _urlencodedBody = require('./request-filters/urlencoded-body');
const _bearerToken = require('./request-filters/bearer-token');

_test('Returns correct filters', assert =>{
  const defaultRequestFilters = _defaultRequestFilters();
  
  const expected = [_defaultOptions, _bearerToken, _formatUrl, _urlencodedBody, _jsonBody];
  
  assert.equal(defaultRequestFilters.length, expected.length);
  for(let i=0; i<expected.length; i++){
    assert.equal(defaultRequestFilters[i], expected[i]);
  }
  assert.end();
});