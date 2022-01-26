import React from 'react';
import clsx from 'clsx';

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: IFeatureCardProps) {
  return (
    <article className={clsx(styles.feature, className)}>
      <Icon className={styles.feature__icon} />
      <div className={styles.feature__title}>{title}</div>
      <div className={styles.feature__description} dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
}
