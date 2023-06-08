module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    siteUrl: 'https://finex.io',
    googleTagManager: {
      trackingId: 'GTM-PX8XHX8',
    },
    yandexMetrika: {
      trackingId: '29763990',
    },
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
                  cleanupIds: false,
                },
              },
            },
          ],
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          //
          '**/legal/**',
          '**/404.html',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'FINEX',
        short_name: 'FINEX',
        start_url: '/?source=pwa',
        background_color: '#6172F3',
        theme_color: '#6172F3',
        display: 'standalone',
        icon: 'src/images/icon.png',
        include_favicon: false,
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
