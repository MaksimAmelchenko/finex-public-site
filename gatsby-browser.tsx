import React from 'react';

import './src/styles/global.scss';

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

export function onClientEntry() {
  window.GDPRCookiesGoogleAnalyticsAdded = false;
  window.GDPRCookiesGoogleAnalyticsInitialized = false;
  window.GDPRCookiesYandexMetrikaInitialized = false;
}
