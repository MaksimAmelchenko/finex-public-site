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
              {t('Explore with Demo')}
            </Button>
            <Button
              variant="primary"
              size={isSmall ? 'xl' : '2xl'}
              href={`https://app.finex.io/sign-up?locale=${locale}`}
              className={styles.hero__button}
            >
              {t('Get started with FINEX')}
            </Button>
          </div>
        </div>

        <div className={styles.root__images}>
          <div className={styles.images}>
            {locale === 'de' ? (
              <>
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/de/screen-1.png"
                  className={styles.images__report}
                  alt={t('Report example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/de/screen-2.png"
                  className={styles.images__dashboard}
                  alt={t('Outcome example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/de/screen-3-mobile.png"
                  className={styles.images__mobile}
                  alt={t('Mobile example')}
                />
              </>
            ) : locale === 'ru' ? (
              <>
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/ru/screen-1.png"
                  className={styles.images__report}
                  alt={t('Report example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/ru/screen-2.png"
                  className={styles.images__dashboard}
                  alt={t('Outcome example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/ru/screen-3-mobile.png"
                  className={styles.images__mobile}
                  alt={t('Mobile example')}
                />
              </>
            ) : (
              <>
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/en/screen-1.png"
                  className={styles.images__report}
                  alt={t('Report example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/en/screen-2.png"
                  className={styles.images__dashboard}
                  alt={t('Outcome example')}
                />
                <StaticImage
                  style={{ position: 'absolute' }}
                  src="./assets/en/screen-3-mobile.png"
                  className={styles.images__mobile}
                  alt={t('Mobile example')}
                />
              </>
            )}
          </div>
        </div>

        <div className={styles.root__mobileImages}>
          {locale === 'de' ? (
            <>
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-01.png"
                alt={t('Outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-02.png"
                alt={t('Transactions screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-03.png"
                alt={t('Debts screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-04.png"
                alt={t('Debt details screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-05.png"
                alt={t('Bank connection screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-10.png"
                alt={t('Desktop outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-11.png"
                alt={t('Desktop CashFlows screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-12.png"
                alt={t('Report Dynamic screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-13.png"
                alt={t('Report Dynamic table screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-14.png"
                alt={t('Report Distribution screen')}
              />
            </>
          ) : locale === 'ru' ? (
            <>
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-01.png"
                alt={t('Outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-02.png"
                alt={t('Transactions screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-03.png"
                alt={t('Debts screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-04.png"
                alt={t('Debt details screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-05.png"
                alt={t('Bank connection screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-10.png"
                alt={t('Desktop outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-11.png"
                alt={t('Desktop CashFlows screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/de/mobile-15.png"
                alt={t('Desktop Planning screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-12.png"
                alt={t('Report Dynamic screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-13.png"
                alt={t('Report Dynamic table screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/ru/mobile-14.png"
                alt={t('Report Distribution screen')}
              />
            </>
          ) : (
            <>
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-01.png"
                alt={t('Outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-02.png"
                alt={t('Transactions screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-03.png"
                alt={t('Debts screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-04.png"
                alt={t('Debt details screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-05.png"
                alt={t('Bank connection screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-10.png"
                alt={t('Desktop outcome screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-11.png"
                alt={t('Desktop CashFlows screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-12.png"
                alt={t('Report Dynamic screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-13.png"
                alt={t('Report Dynamic table screen')}
              />
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                height={400}
                src="./assets/en/mobile-14.png"
                alt={t('Report Distribution screen')}
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
