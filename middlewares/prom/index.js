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

      const wrapped = apiMetrics({
        metricsPath,
        defaultMetricsInterval,
        durationBuckets,
        requestSizeBuckets,
        responseSizeBuckets,
        useUniqueHistogramName,
        metricsPrefix,
        excludeRoutes,
        includeQueryParams
      });

      strapi.app.use((ctx, next) => {
        if (ctx.req.url === metricsPath) {
          return wrapped(ctx,next);
        } else if (ctx.req.url === `${metricsPath}.json`) {
          return wrapped(ctx,next);
        } else if ((ctx.response.status != 404)) {
          return wrapped(ctx,next);
        } else {
          return next();
        }
      });
    },
  };
};
