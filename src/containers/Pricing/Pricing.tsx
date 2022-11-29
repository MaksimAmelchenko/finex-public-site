import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { PriceCard } from './PriceCard/PriceCard';
import { Seo } from '../../components/Seo/Seo';
import { THtml } from '../../types';
import { useScrollToTop } from '../../lib/use-scroll-to-top';
import { useT } from '../../lib/i18n';

import * as dataI18n from './data.yaml';

import styles from './pricing.module.scss';

interface ICard {
  title: string;
  description: THtml;
  price: string;
  buttonTitle: string;
}

export function Pricing(): JSX.Element {
  const { locale, defaultLang } = useLocalization();

  const { cards }: { cards: ICard[] } = dataI18n[locale] || dataI18n[defaultLang];

  const t = useT('Pricing');

  useScrollToTop();

  return (
    <div className={styles.page}>
      <Seo
        lang={locale}
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />
      <Header className={styles.header} />
      <main>
        <Jumbotron title={t('FINEX Pricing')} subTitle={t('Get started for free with 14 day trial period')} />

        <Container>
          <section className={styles.priceSection}>
            {cards.map(({ title, description, price, buttonTitle }, index) => (
              <PriceCard
                title={title}
                description={description}
                price={price}
                buttonTitle={buttonTitle}
                className={styles.priceSection__priceCard}
                key={index}
              />
            ))}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
