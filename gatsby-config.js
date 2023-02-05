module.exports = {
  siteMetadata: {
    siteUrl: 'https://finex.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIDs: false,
                },
              },
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-ZB37ZJ6SVJ'],
      },
    },
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: 29763990,
        webvisor: true,
        trackHash: false,
        afterBody: false,
        defer: true,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          //
          '**/legal/**',
          '**/pricing/',
          '**/404.html',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'FINEX.io',
        short_name: 'FINEX',
        start_url: '/?source=pwa',
        background_color: '#005eaf',
        theme_color: '#005eaf',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-theme-i18n',
      options: {
        defaultLang: 'ru',
        configPath: require.resolve('./i18n/config.json'),
      },
    },
  ],
};
