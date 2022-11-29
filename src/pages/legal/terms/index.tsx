import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../../components/Container/Container';
import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../containers/Header/Header';
import { Seo } from '../../../components/Seo/Seo';
import { THtml } from '../../../types';
import { useScrollToTop } from '../../../lib/use-scroll-to-top';

import * as dataI18n from './data.yaml';

interface IPage {
  title: string;
  content: THtml;
}

import styles from './terms.module.scss';

export default function Terms(): JSX.Element {
  const { locale, defaultLang } = useLocalization();
  const { title, content }: IPage = dataI18n[locale] || dataI18n[defaultLang];

  useScrollToTop();

  return (
    <div className={styles.page}>
      <Seo
        title={title}
        lang={locale}
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />
      <Header variant="light" />
      <Container className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
      <Footer />
    </div>
  );
}
