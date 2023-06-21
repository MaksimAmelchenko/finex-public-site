import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Features, IFeature } from './Features/Features';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { PriceCard } from '../../components/PriceCard/PriceCard';
import { Seo } from '../../components/Seo/Seo';
import { useScrollToTop } from '../../lib/use-scroll-to-top';

import * as dataI18n from './data.yaml';

import styles from './Home.module.scss';

interface IPlan {
  price: string;
  title: string;
  description: string;
  isPopular?: boolean;
}

interface IData {
  jumbotron: {
    title: string;
    supportingText: string;
  };
  features: IFeature[];
  cta: {
    title: string;
    supportingText: string;
    buttons: Array<{
      title: string;
      link: string;
      variant: 'primary' | 'secondaryGray';
    }>;
  };
  pricing: {
    title: string;
    supportingText: string;
    plans: IPlan[];
  };
}

export const Home = () => {
  const { locale } = useLocalization();
  const { jumbotron, features, cta, pricing }: IData = dataI18n[locale];

  // useScrollToTop();

  return (
    <>
      <Seo lang={locale} />
      <Header />
      <main className={styles.main}>
        <Jumbotron {...jumbotron} />

        <Features features={features} className={styles.main__features} />

        <section className={clsx(styles.pricingSection)} id="pricing">
          <Container className={styles.pricingSection__container}>
            <div className={styles.pricingSection__headingAndSupportingText}>
              <h2 className={styles.pricingSection__heading}>{pricing.title}</h2>
              <div className={styles.pricingSection__supportingText}>{pricing.supportingText}</div>
            </div>

            <div className={styles.pricingSection__content}>
              {pricing.plans.map(({ price, title, description, isPopular }, index) => (
                <PriceCard title={title} description={description} price={price} isPopular={isPopular} key={index} />
              ))}
            </div>
          </Container>
        </section>

        <section className={clsx(styles.ctaSection)}>
          <Container>
            <div className={styles.ctaSection__content}>
              <div className={styles.ctaSection__headingAndSupportingText}>
                <h2 className={styles.ctaSection__heading}>{cta.title}</h2>
                <div className={styles.ctaSection__supportingText}>{cta.supportingText}</div>
              </div>
              <div className={styles.ctaSection__actions}>
                {cta.buttons.map(({ title, link, variant }, index) => (
                  <Button variant={variant} size="xl" href={link} className={styles.ctaSection__button} key={index}>
                    {title}
                  </Button>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
