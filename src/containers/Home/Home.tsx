import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Features, IFeature } from './Features/Features';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Seo } from '../../components/Seo/Seo';
import { useT } from '../../lib/i18n';

import * as dataI18n from './data.yaml';

import styles from './Home.module.scss';

interface IData {
  jumbotron: {
    title: string;
    subTitle: string;
    rocket: {
      title: string;
      text: string;
    };
  };
  features: IFeature[];
}

export const Home = () => {
  const { locale } = useLocalization();
  const { jumbotron, features }: IData = dataI18n[locale];
  const t = useT('Home');

  return (
    <>
      <Seo lang={locale} />
      <Header />
      <main className={styles.main}>
        <Jumbotron {...jumbotron} className={styles.main__jumbotron} />

        <Features features={features} className={styles.main__features} />

        <Container>
          <section className={clsx(styles.main__buttons, styles.buttons)}>
            <Button color="orange" size="large" href="/how-it-works" className={styles.buttons__button}>
              {t('Узнать больше')}
            </Button>
            <Button
              color="blue"
              size="large"
              href={`https://app.finex.io/sign-up?locale=${locale}`}
              className={styles.buttons__button}
            >
              {t('Начать пользоваться')}
            </Button>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};
