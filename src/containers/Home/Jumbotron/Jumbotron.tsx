import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../../components/Button/Button';
import { Container } from '../../../components/Container/Container';
import { useDeviceSize } from '../../../lib/use-device-size';
import { useT } from '../../../lib/i18n';

import { ReactComponent as PlayCircleIcon } from '../../../components/Icons/play-circle.svg';

import styles from './Jumbotron.module.scss';

interface IJumbotronProps {
  title: string;
  supportingText: string;
  className: string;
}

export function Jumbotron({ title, supportingText, className }: IJumbotronProps) {
  const t = useT('Jumbotron');
  const { isSmall } = useDeviceSize();

  const { locale } = useLocalization();

  return (
    <section className={clsx(styles.root, className)}>
      <Container className={styles.root__container}>
        <div className={styles.hero}>
          <div className={clsx(styles.hero__headingAndSupportingText, styles.headingAndSupportingText)}>
            <h1 className={styles.headingAndSupportingText__header}>
              {title} <span className={styles.headingAndSupportingText__logotype}>FINEX</span>
            </h1>
            <p className={styles.headingAndSupportingText__supportingText}>{supportingText}</p>
          </div>

          <div className={styles.hero__actions}>
            <Button
              variant="secondaryGray"
              size={isSmall ? 'xl' : '2xl'}
              href={`https://app.finex.io/demo?locale=${locale}`}
              startIcon={<PlayCircleIcon />}
              className={styles.hero__button}
            >
              {t('Demo')}
            </Button>
            <Button
              variant="primary"
              size={isSmall ? 'xl' : '2xl'}
              href={`https://app.finex.io/sign-up?locale=${locale}`}
              className={styles.hero__button}
            >
              {t('Sign up')}
            </Button>
          </div>
        </div>

        <div className={styles.root__images}>
          <div className={styles.images}>
            <StaticImage
              style={{ position: 'absolute' }}
              src="./assets/screen-1.png"
              className={styles.images__report}
              alt="Report example"
            />
            <StaticImage
              style={{ position: 'absolute' }}
              src="./assets/screen-2.png"
              className={styles.images__dashboard}
              alt="Dashboard example"
            />
          </div>
        </div>

        <div className={styles.root__mobileImages}>
          <StaticImage src="./assets/mobile-screens.png" alt="Screenshots example" />
        </div>
      </Container>
    </section>
  );
}
