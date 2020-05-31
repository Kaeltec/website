const { resolve } = require('path');

module.exports = {
  onCreateWebpackConfig: ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
      actions.setWebpackConfig({
        devtool: false,
      });
    }

    actions.setWebpackConfig({
      resolve: {
        modules: [resolve(__dirname, 'src'), 'node_modules'],
      },
    });
  },
};
