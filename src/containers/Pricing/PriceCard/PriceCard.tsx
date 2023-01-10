import React from 'react';
import clsx from 'clsx';

import { Button } from '../../../components/Button/Button';
import { useT } from '../../../lib/i18n';

import styles from './PriceCard.module.scss';

interface PriceProps {
  title: string;
  description: string;
  price: string;
  buttonTitle: string;
  className?: string;
}

export function PriceCard({ title, description, price, buttonTitle, className }: PriceProps): JSX.Element {
  const t = useT('PriceCard');

  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.card__header}>{title}</h2>
      <div className={styles.card__description} dangerouslySetInnerHTML={{ __html: description }} />
      <div className={styles.card__price} dangerouslySetInnerHTML={{ __html: price }} />
      <div className={styles.card__cancelText}>{t('until cancelled')}</div>

      <Button color="blue" size="large" href="https://app.finex.io/sign-up/" className={styles.card__button}>
        {buttonTitle}
      </Button>
    </div>
  );
}
