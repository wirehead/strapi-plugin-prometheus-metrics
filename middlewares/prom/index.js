'use strict';

const apiMetrics = require('prometheus-api-metrics').koaMiddleware;

module.exports = strapi => {
  return {
    initialize: function(cb) {
      strapi.app.use(apiMetrics());
    },
  };
};