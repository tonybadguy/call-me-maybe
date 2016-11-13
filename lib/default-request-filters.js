'use strict';

const _defaultOptionsFilter = require('./request-filters/default-options');
const _formatUrlFilter = require('./request-filters/format-url');
const _jsonBodyFilter = require('./request-filters/json-body');
const _urlencodedBodyFilter = require('./request-filters/urlencoded-body');

const defaultFilters = () => [
  _defaultOptionsFilter,
  _formatUrlFilter,
  _urlencodedBodyFilter,
  _jsonBodyFilter
];

module.exports = defaultFilters;