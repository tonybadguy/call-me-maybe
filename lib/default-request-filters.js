'use strict';

const _defaultOptionsFilter = require('./request-filters/default-options');
const _formatUrlFilter = require('./request-filters/format-url');

const defaultFilters = () => [
  _defaultOptionsFilter,
  _formatUrlFilter
];

module.exports = defaultFilters;