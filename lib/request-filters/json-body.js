'use strict';

const filter = (request) => {
  if(request.jsonBody){
    request.body = JSON.stringify(request.jsonBody);
  }
  
  return request;
};

module.exports = {
  filter: filter
};