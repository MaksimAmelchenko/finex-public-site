import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Link } from '../../components/Link/Link';
import { Topic } from './Topic/Topic';
import { getT } from '../../lib/i18n';

import Logo from '../../components/Icons/Logo.inline.svg';

import styles from './HowItWorks.module.scss';

interface ITopic {
  title: string;
  content: string;
}

interface IData {
  topics: ITopic[];
}

import * as dataI18n from './data.yaml';
import { Seo } from '../../components/Seo/Seo';

const t = getT('HowItWork');

export function HowItWorks(): JSX.Element {
  const { locale, defaultLang } = useLocalization();
  const { topics }: IData = dataI18n[locale] || dataI18n[defaultLang];

  return (
    <>
      <Seo title="Описание" lang={locale} />
      <Header variant="light" />
      <Container>
        <h1 className={styles.header}>{t('Как работает FINEX')}</h1>
        <div className={styles.howItWorks}>
          <aside className={styles.howItWorks__aside}>
            <article className={styles.feedback}>
              <div className={styles.feedback__logo}>
                <Logo />
              </div>

              <div className={styles.feedback__text}>
                {t('Остались вопросы?')} {t('Напишите нам в')} <Link to="/c">{t('сообщество')}</Link> {t('или')}
                <Link to="mailto:support@finex.io"> {t('свяжитесь с нами')}</Link>
              </div>
            </article>
          </aside>
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
