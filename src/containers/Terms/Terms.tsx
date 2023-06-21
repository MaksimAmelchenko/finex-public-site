import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Seo } from '../../components/Seo/Seo';
import { THtml } from '../../types';
import { useScrollToTop } from '../../lib/use-scroll-to-top';

import * as dataI18n from './data.yaml';

interface IPage {
  title: string;
  content: THtml;
}

import styles from './Terms.module.scss';

export function Terms(): JSX.Element {
  const { locale, defaultLang } = useLocalization();
  const { title, content }: IPage = dataI18n[locale] || dataI18n[defaultLang];

  useScrollToTop();

  return (
    <div className={styles.root}>
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
      <Header />
      <main className={styles.root__main}>
        <Container className={styles.root__content}>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
