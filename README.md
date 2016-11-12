# call-me-maybe

[![Build Status](https://travis-ci.org/tonybadguy/call-me-maybe.svg?branch=master)](https://travis-ci.org/tonybadguy/call-me-maybe) [![codecov](https://codecov.io/gh/tonybadguy/call-me-maybe/branch/master/graph/badge.svg)](https://codecov.io/gh/tonybadguy/call-me-maybe) [![bitHound Overall Score](https://www.bithound.io/github/tonybadguy/call-me-maybe/badges/score.svg)](https://www.bithound.io/github/tonybadguy/call-me-maybe)

A REST client library with easy model templating and straightforward extensibility

### A simple GET request :+1:
```
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
```
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

### POST with object as body :sparkles::sparkling_heart::sparkles:
```
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
```
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
```
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
```
send({
  url: 'https://httpbin.org/status/500'
}).then(response => {
  // won't be called
}).catch(error => {
  console.log(error.response.statusCode); // 500
});
```