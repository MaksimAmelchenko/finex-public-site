module.exports = {
  staticDirs: ['../public/static'],
  stories: [
    //
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    //
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby|gatsby-theme-i18n)\/)/];
    config.resolve.alias['@reach/router'] = require.resolve(`@gatsbyjs/reach-router`);

    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    // https://github.com/storybookjs/frontpage/issues/43#issuecomment-948302915
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve('babel-plugin-remove-graphql-queries'),
      {
        stage: config.mode === `development` ? 'develop-html' : 'build-html',
        staticQueryDir: './page-data/sq/d',
      },
    ]);
    return config;
  },
};
