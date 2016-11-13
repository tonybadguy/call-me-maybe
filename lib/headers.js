'use strict';

const _caseless = require('caseless');

const setHeaderIfNotExist = (request, headerName, headerValue) => {
  if(!request.headers){
    request.headers = {};
  }

  const headers = _caseless(request.headers);
  if(!headers.has(headerName)){
    headers.set(headerName, headerValue);
  }
};

const setContentTypeIfNotExist = (request, contentType) =>{
  return setHeaderIfNotExist(request, 'Content-Type', contentType);
};

module.exports = {
  setHeaderIfNotExist: setHeaderIfNotExist,
  setContentTypeIfNotExist: setContentTypeIfNotExist
};