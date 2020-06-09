const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const composePlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');

module.exports = composePlugins(
  [
    [sourceMaps],
    [optimizedImages],
    [bundleAnalyzer, { enabled: !!process.env.ANALYZE }],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          register: true,
          disable: process.env.NODE_ENV !== 'production',
        },
      },
    ],
  ],
  {
    distDir: '__next',
    devIndicators: {
      autoPrerender: false,
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      return config;
    },
  },
);
