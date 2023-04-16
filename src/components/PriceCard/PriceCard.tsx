import React from 'react';
import clsx from 'clsx';

import { Button } from '../Button/Button';
import { useLocalization } from 'gatsby-theme-i18n';
import { useT } from '../../lib/i18n';

import { ReactComponent as HandDrawnArrow36Icon } from '../Icons/hand-drawn-arrow-36.svg';

import styles from './PriceCard.module.scss';

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  className?: string;
}

export function PriceCard({ title, description, price, isPopular = false, className }: PriceCardProps): JSX.Element {
  const t = useT('PriceCard');
  const { locale } = useLocalization();

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.root__header}>
        <h3 className={styles.root__price} dangerouslySetInnerHTML={{ __html: price }} />
        <div className={styles.root__headingAndSupportingText}>
          <div className={styles.root__heading}>{title}</div>
          <div className={styles.root__supportingText} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        {isPopular && <CallOut className={styles.root__callOut} />}
      </div>
      <div className={styles.root__content}></div>
      <div className={styles.root__footer}>
        <Button variant="primary" size="xl" href={`https://app.finex.io/sign-up?locale=${locale}`} fullSize>
          {t('Get started')}
        </Button>
      </div>
    </div>
  );
}

interface CallOutProps {
  className?: string;
}
function CallOut({ className }: CallOutProps): JSX.Element {
  const t = useT('PriceCard');
  return (
    <div className={clsx(styles.callOut, className)}>
      <HandDrawnArrow36Icon strokeWidth={3} className={styles.callOut__icon} />
      <div className={styles.callOut__text}>{t('Most popular!')}</div>
    </div>
  );
}
