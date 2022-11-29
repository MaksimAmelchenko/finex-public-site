import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useT } from '../../lib/i18n';

interface ISeoProps {
  title?: string;
  lang: string;
  description?: string;
  meta?: any[];
}

export function Seo({ title, lang, description = '', meta = [] }: ISeoProps): JSX.Element {
  const t = useT('Seo');
  const defaultTitle = t('FINEX | Budget Tracker & Planner | Online Money Management');
  const metaDescription =
    description ||
    t(
      'Take charge of your finances with FINEX online budget planner. Understand your spending and come to a successful financial future.'
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
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        // {
        //   name: 'twitter:creator',
        //   content: site.siteMetadata?.social?.twitter || '',
        // },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
