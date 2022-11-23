import I18n, { ToCurrencyOptions } from 'i18n-js';
import dateFormat from 'date-fns/format';
import dateParseISO from 'date-fns/parseISO';
import deepmerge from 'deepmerge';
import get from 'lodash.get';
import { useCallback } from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';

import { TDate } from '../types';

const scopeSeparator = '.';

function normalizeKey(text: string): string {
  return text.replace(/\./g, '_');
}

const locales = {
  de: deLocale,
  en: enLocale,
  ru: ruLocale,
};

interface TParams {
  count?: number;

  [key: string]: any;
}

export type TFunction = (phrase: string, params?: TParams) => string;

/**
 * Initialize global I18n with translations
 */
export function initializeI18n(translations: { [key: string]: any }, defaultLocale: string, pluralization?: any) {
  I18n.fallbacks = true;
  I18n.translations = translations;
  I18n.pluralization = pluralization;
  I18n.defaultLocale = defaultLocale;
}

export function injectTranslations(translations: Record<string, Record<string, string>>) {
  I18n.translations[I18n.locale] = deepmerge(I18n.translations[I18n.locale], translations);
}

export function toCurrency(num: number, options?: ToCurrencyOptions): string {
  return I18n.toCurrency(num, options);
}

export function formatDate(value: TDate, formatPath = 'date.formats.short'): string {
  if (!value) {
    return '';
  }
  const locale = currentLocale();
  const format = get(I18n.translations[locale], formatPath);
  return dateFormat(dateParseISO(value), format, { locale: locales[locale] });
}

export function currentLocale() {
  if (I18n.locale) {
    return I18n.locale;
  }

  throw new Error('Please, initialize translator with initializeI18n before using');
}

export function defaultLocale() {
  if (I18n.locale) {
    return I18n.defaultLocale;
  }

  throw new Error('Please, initialize translator with initializeI18n before using');
}

export function getWeek(): string[] {
  return get(I18n.translations[currentLocale()], 'date.week.short');
}

/**
 * Initialize with scope and get t() function
 * This function should be called in every file you need translator like this:
 * const t = useT('scope');
 * @param scope
 */

export function useT(scope: string): any {
  const { locale } = useLocalization();

  return useCallback(
    (phrase: string, params?: TParams) => {
      const translatorParams = {
        defaultValue: process.env.NODE_ENV === 'development' ? `{${phrase}}` : `${phrase}`,
      };

      if (params) {
        Object.assign(translatorParams, params);
      }
      I18n.locale = locale;
      return I18n.translate(`${scope}${scopeSeparator}${normalizeKey(phrase)}`, translatorParams);
    },
    [locale]
  );
}
