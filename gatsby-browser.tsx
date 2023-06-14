import React from 'react';

import './src/styles/global.scss';

import { initializeI18n } from './src/lib/i18n';

import en from './locales/en';
import ru from './locales/ru';
import de from './locales/de';

initializeI18n(
  {
    ru,
    en,
    de,
  },
  'en'
);
