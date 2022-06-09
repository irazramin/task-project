const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#023047',
              '@info-color': '#FB8400',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
