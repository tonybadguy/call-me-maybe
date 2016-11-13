'use strict';

const _send = require('./index');
const _test = require('tap').test;

_test('Basic GET succeeds', assert => {
  assert.plan(2);
  
  const url = 'https://httpbin.org/get';
  
  _send({
    url: url
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.url, url);
  });
});

_test('Basic GET with formatted url', assert => {
  assert.plan(2);
  
  const url = 'https://httpbin.org/{foo}';
  
  _send({
    url: url,
    urlParams:{
      foo:'get'
    }
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.url, 'https://httpbin.org/get');
  });
});

_test('Basic GET with query object', assert => {
  assert.plan(2);
  
  const url = 'https://httpbin.org/get';
  
  _send({
    url: url,
    query:{
      foo:'bar'
    }
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.url, 'https://httpbin.org/get?foo=bar');
  });
});

_test('Basic POST', assert => {
  
  assert.plan(2);
  const url = 'https://httpbin.org/post';
  
  _send({
    url: url,
    method: 'POST'
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.url, url);
  });
});

_test('Basic POST with body', assert => {
  
  assert.plan(2);
  const url = 'https://httpbin.org/post';
  
  _send({
    url: url,
    method: 'POST',
    body: 'my data'
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.data, 'my data');
  });
});

_test('POST json body', assert => {
  
  assert.plan(2);
  const url = 'https://httpbin.org/post';
  
  _send({
    url: url,
    method: 'POST',
    jsonBody:{
      foo:'bar'
    }
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.json.foo, 'bar');
  });
});

_test('POST urlencoded body', assert => {
  
  assert.plan(2);
  const url = 'https://httpbin.org/post';
  
  _send({
    url: url,
    method: 'POST',
    urlencodedBody:{
      foo:'bar'
    }
  }).then(response => {
    assert.equal(response.statusCode, 200);
    assert.equal(response.jsonBody.form.foo, 'bar');
  });
});

_test('Headers are sent', assert => {
  
  assert.plan(1);
  const url = 'https://httpbin.org/headers';
  
  const headerName = 'X-Test-Header';
  const headerValue = 'test header value';
  
  _send({
    url: url,
    headers: {
      [headerName]: headerValue
    }
  }).then(response => {
    assert.equal(response.jsonBody.headers[headerName], headerValue);
  });
});

_test('Reject promise when server responds with status code >= 300', assert =>{
  assert.plan(1);
  
  const url = 'https://httpbin.org/status/300';
  
  _send({
    url: url
  }).then(response => {
    assert.fail();
  }).catch(error => {
    assert.equal(error.response.statusCode, 300);
  });
});

_test('Reject promise when server responds with status code < 200', assert =>{
  assert.plan(1);
  
  const url = 'https://httpbin.org/status/199';
  
  _send({
    url: url
  }).then(response => {
    assert.fail();
  }).catch(error => {
    assert.equal(error.response.statusCode, 199);
  });
});

_test('Connection error rejects promise', assert =>{
  assert.plan(1);
  
  const url = 'https://localhost:9999';
  
  _send({
    url: url
  }).then(response => {
    assert.fail();
  }).catch(error => {
    assert.equal(error.code, 'ECONNREFUSED');
  });
});