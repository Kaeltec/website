const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const stylus = require('@zeit/next-stylus');
const composePlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = composePlugins(
  [
    [sourceMaps],
    [optimizedImages],
    [bundleAnalyzer, { enabled: !!process.env.ANALYZE }],
    [
      stylus,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
    ],
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
