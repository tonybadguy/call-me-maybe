'use strict';

const _test = require('tap').test;
const _defaultOptions = require('./default-options');

_test('GET method by default', assert =>{
  assert.plan(1);
  
  const result = _defaultOptions.filter({});
  
  assert.equals(result.method, 'GET');
});

_test('Defaults do not override setting', assert =>{
  assert.plan(1);
  
  const result = _defaultOptions.filter({
    method: 'POST'
  });
  
  assert.equals(result.method, 'POST');
});