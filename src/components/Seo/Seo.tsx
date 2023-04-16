import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useT } from '../../lib/i18n';

interface ISeoProps {
  title?: string;
  lang: string;
  description?: string;
  keywords?: string;
  meta?: any[];
}

export function Seo({ title, lang, description, keywords, meta = [] }: ISeoProps): JSX.Element {
  const t = useT('Seo');
  const defaultTitle = t('FINEX | Budget Tracker & Planner | Personal Finance Management Online');
  const metaDescription =
    description ||
    t(
      'Online personal finance management tool FINEX helps you easily organize and track your spending, create a budget, and reach your financial goals.'
    );

  const metaKeywords =
    keywords ||
    t(
      'personal finance, finance management, budgeting, financial goals, money management, cash flow management, debt management, expense tracking, financial planning'
    );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={title && defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'keywords',
          content: metaKeywords,
        },
        {
          name: 'image',
          content: '/icons/icon-512x512.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:url',
          content: `https://finex.io/${lang === 'ru' ? '' : lang + '/'}`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: '/icons/icon-512x512.png',
        },
        {
          name: 'twitter:creator',
          content: `@finex_${lang}`,
        },
      ].concat(meta)}
    />
  );
}
