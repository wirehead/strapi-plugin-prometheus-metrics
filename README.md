# strapi-plugin-prometheus-metrics

[![CircleCI](https://circleci.com/gh/wirehead/strapi-plugin-prometheus-metrics.svg?style=shield)](https://circleci.com/gh/wirehead/strapi-plugin-prometheus-metrics)[![npm version](https://badge.fury.io/js/strapi-plugin-prometheus-metrics.svg)](https://www.npmjs.com/package/strapi-plugin-prometheus-metrics)[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)[![Contributor Covenant](https://img.shields.io/badge/license-Hippocratic%20OSL%202.0-4baaaa)](https://firstdonoharm.dev/)

Adds Prometheus metrics to a [Strapi](http://strapi.io/) instance using [prometheus-api-metrics](https://github.com/Zooz/prometheus-api-metrics).

Alternatively, it's a good extremely-simple example of how to add koa functionality to strapi.

## Release status

It's probably usable at this point.

## Installation

Use the package manager [npm](https://https://www.npmjs.com/) to install.

```bash
npm i strapi-plugin-prometheus-metrics
```

## Usage

In the relevant `config/environents/**/middleware.json` add a key that looks like this:

```javascript
{
  "prom": {
    "enabled": true
  }
}

````

## Configuration:

In the relevant `config/environents/**/middleware.json` you can configure things like so:

```javascript
{
  "prom": {
    "enabled": true,
    "metricsPath": "/metrics"
  }
}

````

Keys you can set are:

* `metricsPath` - The URL path the metrics are accessible under.  The default is `/metrics`
* `defaultMetricsInterval` - The interval that metrics are collected over.  The default is `10000`
* `durationBuckets` - An array of buckets that the response time is bucketed over, in seconds.  The default is `[0.001, 0.005, 0.015, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5]`
* `requestSizeBuckets` - An array of buckets that the request size is bucketed over, in bytes.  The default is `[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]`
* `responseSizeBuckets` - An array of buckets that the response size is bucketed over, in bytes.  The default is `[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]`
* `useUniqueHistogramName` - Set this key to use the project name (from the `package.json` file) as a prefix.
* `metricsPrefix` - Set this key to set a string that will be added with an undescore before the metrics name.
* `excludeRoutes` - Set this key to exclude routes from collection.
* `includeQueryParams` - A boolean that indicate if to include query params in route, the query parameters will be sorted in order to eliminate the number of unique labels.

## A few security concerns to think about

Generally, you want to be running strapi with some sort of front-end process (say Apache HTTPD or nginx), just as a matter of good practice.  If you expose the `/metrics` endpoint to the world, it might leak some amount of information to an attacker.

Also, if you aren't careful with the includeQueryParams feature, it might leak more information than you intended.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Code of conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## License

[Hippocratic Open Source License 2.0](https://firstdonoharm.dev/) see LICENSE.md