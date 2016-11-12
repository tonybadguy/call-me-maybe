'use strict';

const _test = require('tap').test;

_test('Default request filters if not specified', assert => {
  
  assert.plan(1);
  
  const proxyquire = require('proxyquire');

  const mocks = {
    './default-request-filters': () =>{
      assert.ok(true);
    },
    './process-filters': () =>{}
  };
  
  const index = proxyquire('./index', mocks);
  
  index({});
});

_test('Default request filters not called if specified', assert => {
  
  assert.plan(0);
  
  const proxyquire = require('proxyquire');

  const mocks = {
    './default-request-filters': () =>{
      assert.fail();
    },
    './process-filters': () =>{}
  };
  
  const index = proxyquire('./index', mocks);
  
  index({}, {});
});

_test('Default response filters if not specified', assert => {
  
  assert.plan(1);
  
  const proxyquire = require('proxyquire');

  const mocks = {
    './default-response-filters': () =>{
      assert.ok(true);
    },
    './process-filters': () =>{}
  };
  
  const index = proxyquire('./index', mocks);
  
  index({});
});

_test('Calls process filters for request', assert => {
  
  assert.plan(1);
  
  const proxyquire = require('proxyquire');

  const request = {};
  const requestFilters = ['request filters'];
  
  const mocks = {
    './process-filters': (context, filters) =>{

      if(context === request && filters === requestFilters){
        assert.ok(true);
      }
    }
  };
  
  const index = proxyquire('./index', mocks);
  
  index(request, requestFilters);
});

_test('Calls process filters for response', assert => {
  
  assert.plan(1);
  
  const proxyquire = require('proxyquire');

  const response = {};
  const responseFilters = ['response filters'];
  
  const mocks = {
    'small-request':{
      send: () => {
        return new Promise((resolve, reject) => {
          resolve(response);
        });
      }
    },
    './process-filters': (context, filters) =>{

      if(context === response && filters === responseFilters){
        assert.ok(true);
      }
    }
  };
  
  const index = proxyquire('./index', mocks);
  
  index({}, null, responseFilters);
});