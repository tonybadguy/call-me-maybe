'use strict';

const _defaultOptionsFilter = require('./request-filters/default-options');
const _formatUrlFilter = require('./request-filters/format-url');
const _jsonBodyFilter = require('./request-filters/json-body');

const defaultFilters = () => [
  _defaultOptionsFilter,
  _formatUrlFilter,
  _jsonBodyFilter
];

module.exports = defaultFilters;