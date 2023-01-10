import 'normalize.css';
import './src/styles/global.css';
import '@fontsource/nunito';
import '@fontsource/nunito/600.css';

import { initializeI18n } from './src/lib/i18n';

import * as ru from './locales/ru';
import * as en from './locales/en';
import * as de from './locales/de';

initializeI18n(
  {
    ru,
    en,
    de,
  },
  'ru'
);
