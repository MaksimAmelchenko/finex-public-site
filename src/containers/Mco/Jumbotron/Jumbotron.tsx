import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';

import { Badge } from '../../../components/Badge/Badge';
import { Button } from '../../../components/Button/Button';
import { Container } from '../../../components/Container/Container';
import { useDeviceSize } from '../../../lib/use-device-size';

import styles from './Jumbotron.module.scss';

interface IJumbotronProps {
  className?: string;
}
export const mcoLink = 'https://mco.nalog.ru/?utm_source=finex.io&utm_medium=referral&utm_campaign=partner-landing';

export function Jumbotron({ className }: IJumbotronProps) {
  const { isSmall } = useDeviceSize();
  return (
    <section className={clsx(styles.root, className)}>
      <Container>
        <div className={styles.hero}>
          <div className={clsx(styles.hero__headingAndSupportingText, styles.headingAndSupportingText)}>
            <h1 className={styles.headingAndSupportingText__header}>
              Забудьте о ручном вводе расходов{' '}
              <Badge className={styles.headingAndSupportingText__badge}>Будет доступно в августа 2023</Badge>
            </h1>

            <p className={styles.headingAndSupportingText__supportingText}>
              Подключите{' '}
              <a href={mcoLink} className={styles.mcoLogotype}>
                МОИ ЧЕКИ ОНЛАЙН
              </a>{' '}
              ФНС России и <span className={styles.finexLogotype}>FINEX</span> автоматически создаст операции расходов
              на основе ваших электронных чеков
            </p>
          </div>

          <div className={styles.hero__actions}>
            <Button
              variant="primary"
              size={isSmall ? 'xl' : '2xl'}
              href="https://app.finex.io/settings/mco?utm_source=finex.io&utm_medium=referral&utm_campaign=mco&utm_content=hero"
              className={styles.hero__button}
            >
              Подключить
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.images}>
          <StaticImage
            src="./assets/banner.png"
            className={styles.images__banner}
            alt="Бумажные и электронные чеки в приложении"
          />
        </div>
      </Container>
    </section>
  );
}
