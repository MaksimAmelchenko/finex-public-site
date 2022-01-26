// https://v4.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
import { action } from '@storybook/addon-actions';
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

//

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import 'normalize.css';
import '../src/styles/global.css';

// import { initializeI18n } from './src/lib/i18n';
//
// import * as ru from './locales/ru';
// import * as en from './locales/en';
// import * as de from './locales/de';
//
// const languages = ['ru', 'en', 'de'];
// const lang = window.location.pathname.split('/')[1];
// const defaultLanguage = languages[0];
// const currentLocale = languages.includes(lang) ? lang : defaultLanguage;
//
// initializeI18n(
//     {
//       ru,
//       en,
//       de,
//     },
//     currentLocale,
//     defaultLanguage
// );
