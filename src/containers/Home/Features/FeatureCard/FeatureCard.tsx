import React from 'react';
import clsx from 'clsx';

import { TUrl } from '../../../../types';

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  icon: TUrl;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: IFeatureCardProps) {
  return (
    <article className={clsx(styles.feature, className)}>
      <img className={styles.feature__icon} src={icon} alt={''} />
      <div className={styles.feature__title}>{title}</div>
      <div className={styles.feature__description} dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
}
