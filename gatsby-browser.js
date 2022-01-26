import 'normalize.css';
import './src/styles/global.css';

import { initializeI18n } from './src/lib/i18n';

import * as ru from './locales/ru';
import * as en from './locales/en';
import * as de from './locales/de';

const languages = ['ru', 'en', 'de'];
const lang = window.location.pathname.split('/')[1];
const defaultLanguage = languages[0];
const currentLocale = languages.includes(lang) ? lang : defaultLanguage;

initializeI18n(
  {
    ru,
    en,
    de,
  },
  currentLocale,
  defaultLanguage
);
