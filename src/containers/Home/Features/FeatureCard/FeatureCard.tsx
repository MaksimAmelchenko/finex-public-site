import React from 'react';
import clsx from 'clsx';

/*
import { Button } from '../../../../components/Button/Button';
import { ReactComponent as ArrowRightIcon } from '../../../../components/Icons/arrow-right.svg';
*/

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconAlt?: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: IFeatureCardProps) {
  return (
    <article className={clsx(styles.root, className)}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.root__textAndSupportingText}>
        <h2 className={styles.root__text}>{title}</h2>
        <div className={styles.root__supportingText} dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {/*
      <Button variant="linkColor" size="lg" href={`https://app.finex.io/sign-up`} endIcon={<ArrowRightIcon />}>
        Learn more
      </Button>
       */}
    </article>
  );
}
