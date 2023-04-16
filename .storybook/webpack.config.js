const { getCSSModuleLocalIdent } = require('./getCSSModuleLocalIdent');

module.exports = async ({ config }) => {
  // config.externals = config.externals || {};
  // config.externals.config = JSON.stringify(cfg);

  // config.resolve.extensions.push('.ts', '.tsx');

  // Update svg rules from existing webpack rule
  // remove svg rules from existing webpack rule
  const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
  assetRule.exclude = /\.svg$/;

  // Add SVGR Loader
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    cleanupIds: false,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
      },
      'sass-loader',
    ],
  });

  return config;
};
