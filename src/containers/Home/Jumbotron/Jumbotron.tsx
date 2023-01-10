import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../../components/Button/Button';
import { Container } from '../../../components/Container/Container';
import { useT } from '../../../lib/i18n';

import rocketSvg from './assets/rocket.svg';

import styles from './Jumbotron.module.scss';

interface IJumbotronProps {
  title: string;
  subTitle: string;
  rocket: {
    title: string;
    text: string;
  };
  className: string;
}

export function Jumbotron({ title, subTitle, rocket, className }: IJumbotronProps) {
  const t = useT('Jumbotron');

  const { locale } = useLocalization();

  return (
    <section className={clsx(styles.jumbotron, className)}>
      <Container>
        <div className={clsx(styles.jumbotron__header, styles.header)}>
          <h1 className={styles.header__title}>
            {title}
            <span className={styles.header__logotype}>FINEX</span>
          </h1>
          <p className={styles.header__description}>{subTitle}</p>
        </div>

        <div className={styles.jumbotron__mobileImage}>
          <div className={styles.mobileImage}>
            <StaticImage src="./assets/screen2.png" className={styles.image_} alt="Dashboard example" />
          </div>
        </div>

        <div className={clsx(styles.jumbotron__quickStart, styles.quickStart)}>
          <div className={clsx(styles.quickStart__rocket, styles.rocket)}>
            <div className={styles.rocket__icon}>
              <img src={rocketSvg} alt="Rocket" />
            </div>
          </div>
          <div className={styles.quickStart__text}>
            {/*<div className={styles.quickStart__title}>{rocket.title}</div>*/}
            <div className={styles.quickStart__description} dangerouslySetInnerHTML={{ __html: rocket.text }} />
          </div>
        </div>

        <div className={styles.jumbotron__callToAction}>
          <Button color="orange" size="large" fullSize href={`https://app.finex.io/demo?locale=${locale}`}>
            {t('Посмотреть как это работает')}
          </Button>
        </div>
      </Container>

      <div className={styles.jumbotron__images}>
        <div className={styles.images}>
          <StaticImage
            style={{ position: 'absolute' }}
            src="./assets/screen1.png"
            className={styles.images__report}
            width={600}
            alt="Report example"
          />
          <StaticImage
            style={{ position: 'absolute' }}
            src="./assets/screen2.png"
            className={styles.images__dashboard}
            width={600}
            alt="Dashboard example"
          />
        </div>
      </div>
    </section>
  );
}
