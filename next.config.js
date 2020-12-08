const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const composePlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = composePlugins(
  [
    [sourceMaps],
    [optimizedImages],
    [bundleAnalyzer, { enabled: !!process.env.ANALYZE }],
  ],
  {
    distDir: '__next',
    devIndicators: {
      autoPrerender: false,
    },
    experimental: {
      trailingSlash: true,
    },
    webpack: config => {
      config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
      return config;
    },
  },
);
