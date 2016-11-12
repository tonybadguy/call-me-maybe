# call-me-maybe

[![npm version](https://badge.fury.io/js/small-request.svg)](https://badge.fury.io/js/small-request) [![Build Status](https://travis-ci.org/tonybadguy/call-me-maybe.svg?branch=master)](https://travis-ci.org/tonybadguy/call-me-maybe) [![codecov](https://codecov.io/gh/tonybadguy/call-me-maybe/branch/master/graph/badge.svg)](https://codecov.io/gh/tonybadguy/call-me-maybe) [![bitHound Overall Score](https://www.bithound.io/github/tonybadguy/call-me-maybe/badges/score.svg)](https://www.bithound.io/github/tonybadguy/call-me-maybe)

A REST client Node.js module with easy request model templating and straightforward extensibility

### A simple GET request :+1:
```javascript
const send = require('call-me-maybe');

send({
  url: 'https://httpbin.org/get'
}).then(response => {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
  console.log(response.jsonBody.origin);
});
```

### POST with body :sparkling_heart:
```javascript
const send = require('call-me-maybe');

send({
  url: 'https://httpbin.org/post',
  method: 'POST',
  body: 'my data'
}).then(response => {
  console.log(response.body);
  console.log(response.jsonBody.data); // 'my data'
});
```

## All features below are enabled by default as pluggable filters

* They are implemented using pluggable filter modules on request / response
* You can customize which filters to use via optional params of the send() function
* You can write your own filters -- see existing for reference

### POST with object as body :sparkles::sparkling_heart::sparkles:
```javascript
const send = require('call-me-maybe');

send({
  url: 'https://httpbin.org/post',
  method: 'POST',
  jsonBody: {
    foo: 'bar'
  }
}).then(response => {
  console.log(response.body);
  console.log(response.jsonBody.json.foo); // 'bar'
});
```

### Make it fancy with urlParams :sparkles::scream::sparkles:
```javascript
const send = require('call-me-maybe');

send({
  url: 'https://httpbin.org/{foo},  // 'https://httpbin.org/get'
  urlParams:{
    foo:'get'
  }
}).then(response => {
  console.log(response.body);
});
```

### Or with a query :sparkles::sparkling_heart::scream::sparkling_heart::sparkles:
```javascript
const send = require('call-me-maybe');

send({
  url: 'https://httpbin.org/get,  // 'https://httpbin.org/get?foo=bar%20baz'
  query:{
    foo:'bar baz'
  }
}).then(response => {
  console.log(response.body);
});
```

### Handle non-200 status :fire::poop::fire::ok_hand:
```javascript
send({
  url: 'https://httpbin.org/status/500'
}).then(response => {
  // won't be called
}).catch(error => {
  console.log(error.response.statusCode); // 500
});
```
