import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Link } from '../../components/Link/Link';
import { Seo } from '../../components/Seo/Seo';
import { Topic } from './Topic/Topic';
import { useT } from '../../lib/i18n';

import { ReactComponent as Logo } from '../../components/Icons/logo.svg';

import styles from './HowItWorks.module.scss';

interface ITopic {
  title: string;
  content: string;
}

interface IData {
  topics: ITopic[];
}

import * as dataI18n from './data.yaml';

export function HowItWorks(): JSX.Element {
  const { locale, defaultLang } = useLocalization();
  const { topics }: IData = dataI18n[locale] || dataI18n[defaultLang];
  const t = useT('HowItWork');

  return (
    <>
      <Seo title={t('Описание')} lang={locale} />
      <Header />
      <Container>
        <h1 className={styles.header}>{t('Как работает FINEX')}</h1>
        <div className={styles.howItWorks}>
          {/*
          <aside className={styles.howItWorks__aside}>
            <article className={styles.feedback}>
              <div className={styles.feedback__logo}>
                <Logo />
              </div>

              <div className={styles.feedback__text}>
                {t('Остались вопросы?')}
                <Link to="mailto:support@finex.io"> {t('Напишите нам')}</Link>
              </div>
            </article>
          </aside>
          */}
          <main className={styles.main}>
            <section className={clsx(styles.main__topics)}>
              {topics.map(({ title, content }, index) => (
                <Topic title={title} content={content} key={index} />
              ))}
            </section>
          </main>
        </div>
      </Container>
      <Footer />
    </>
  );
}
