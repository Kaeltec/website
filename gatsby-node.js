module.exports = {
  modifyWebpackConfig: ({ config, stage }) => {
    if (stage === 'build-javascript') {
      config.merge({ devtool: false });
    }
  },
};
