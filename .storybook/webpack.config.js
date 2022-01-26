// const cfg = require('config');

module.exports = async ({ config }) => {
  // config.externals = config.externals || {};
  // config.externals.config = JSON.stringify(cfg);

  // config.resolve.extensions.push('.ts', '.tsx');

  // Update svg rules from existing webpack rule
  const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
  assetRule.exclude = /\.inline\.svg$/;

  // Add SVGR Loader
  config.module.rules.push({
    test: /\.inline\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
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
          modules: true,
        },
      },
      'sass-loader',
    ],
  });

  return config;
};
