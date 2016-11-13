'use strict';

const _format = require('string-template');
const _url = require('url');

const filter = (request) => {
  if(request.urlParams){
    for(let key in request.urlParams){
      request.urlParams[key] = encodeURIComponent(request.urlParams[key]);
    }
                     
    request.url = _format(request.url, request.urlParams);
  }
  
  const url = _url.parse(request.url);
    
  if(request.query){
    url.query = request.query;
  }
  
  request.url = _url.format(url);
  
  return request;
};

module.exports = {
  filter: filter
};