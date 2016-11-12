'use strict';

const _test = require('tap').test;
const _formatUrl = require('./format-url');

_test('Noop on basic Url', assert =>{
  assert.plan(1);
  
  const url = 'https://www.google.com';
  const result = _formatUrl.filter({
    url: url
  });
  
  assert.equals(result.url, 'https://www.google.com/');
});

_test('UrlParams update request url and urlParams', assert => {
  assert.plan(2);
  
  const url = 'https://www.google.com/{resource}/{id}'
  const result = _formatUrl.filter({
    url: url,
    urlParams: {
      resource: 'someResource',
      id: '123'
    }
  });
  
  assert.equals(result.url, 'https://www.google.com/someResource/123');
  assert.equals(result.urlParams, null);
});

_test('UrlParams url encode urlParams', assert => {
  assert.plan(2);
  
  const url = 'https://www.google.com/{resource}'
  const result = _formatUrl.filter({
    url: url,
    urlParams: {
      resource: 'some resource'
    }
  });
  
  assert.equals(result.url, 'https://www.google.com/some%20resource');
  assert.equals(result.urlParams, null);
});

_test('Original url gets url encoded', assert => {
  assert.plan(1);
  
  const url = 'https://www.google.com/foo bar'
  const result = _formatUrl.filter({
    url: url
  });
  
  assert.equals(result.url, 'https://www.google.com/foo%20bar');
});