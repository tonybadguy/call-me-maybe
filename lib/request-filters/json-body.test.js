'use strict';

const _test = require('tap').test;
const _jsonBody = require('./json-body');

_test('Body replaced with jsonBody if exists', assert =>{
  assert.plan(1);
  const request = {
    body: 'nothing',
    jsonBody:{
      foo:'bar'
    }
  };
  
  const result = _jsonBody.filter(request);
  
  assert.equals(JSON.parse(result.body).foo, 'bar');
});

_test('Body unchanged if jsonBody not set', assert =>{
  assert.plan(1);
  const request = {
    body: 'expected'
  };
  
  const result = _jsonBody.filter(request);
  
  assert.equals(result.body, 'expected');
});
