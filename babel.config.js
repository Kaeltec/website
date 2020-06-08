module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '@app',
      },
    ],
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
