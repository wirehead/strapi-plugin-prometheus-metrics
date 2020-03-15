'use strict';

const apiMetrics = require('prometheus-api-metrics').koaMiddleware;

module.exports = strapi => {

  return {
    initialize: function(cb) {
      const promSettings = strapi.config.middleware.settings.prom;
      const metricsPath = promSettings.metricsPath;
      const defaultMetricsInterval = promSettings.defaultMetricsInterval;
      const durationBuckets = promSettings.durationBuckets;
      const requestSizeBuckets = promSettings.requestSizeBuckets;
      const responseSizeBuckets = promSettings.responseSizeBuckets;
      const useUniqueHistogramName = promSettings.useUniqueHistogramName;
      const metricsPrefix = promSettings.metricsPrefix;
      const excludeRoutes = promSettings.excludeRoutes;
      const includeQueryParams = promSettings.includeQueryParams;

      strapi.app.use(apiMetrics({
        metricsPath,
        defaultMetricsInterval,
        durationBuckets,
        requestSizeBuckets,
        responseSizeBuckets,
        useUniqueHistogramName,
        excludeRoutes,
        includeQueryParams
      }));
    },
  };
};