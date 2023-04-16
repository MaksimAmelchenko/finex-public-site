exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  /*
  for (const { test, use } of config.module.rules) {
    if (String(test).includes('.svg')) {
      for (const rule of use) {
        if (rule.loader.includes('/url-loader/')) {
          rule.options.limit = 1024;
        }
      }
    }
  }
  */

  actions.replaceWebpackConfig(config);
};
