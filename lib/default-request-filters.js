'use strict';

const _defaultOptions = require('./request-filters/default-options');
const _bearerToken = require('./request-filters/bearer-token');
const _formatUrl = require('./request-filters/format-url');
const _urlencodedBody = require('./request-filters/urlencoded-body');
const _jsonBody = require('./request-filters/json-body');

const defaultFilters = () => [
  _defaultOptions,
  _bearerToken,
  _formatUrl,
  _urlencodedBody,
  _jsonBody
];

module.exports = defaultFilters;