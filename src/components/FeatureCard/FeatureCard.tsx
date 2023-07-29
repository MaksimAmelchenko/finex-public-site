import React from 'react';
import clsx from 'clsx';

import { Button } from '../Button/Button';
import { useT } from '../../lib/i18n';

import { ReactComponent as ArrowRightIcon } from '../Icons/arrow-right.svg';
import { ReactComponent as CheckCircleIcon } from '../Icons/check-circle.svg';

import styles from './FeatureCard.module.scss';

interface IFeatureCardProps {
  icon?: React.ReactNode;
  heading: React.ReactNode;
  supportingText?: string;
  items: string[];
  link?: string;
  className?: string;
}

export function FeatureCard({ icon, heading, supportingText, items, link, className }: IFeatureCardProps) {
  const t = useT('FeatureCard');

  return (
    <article className={clsx(styles.root, className)}>
      <div className={styles.root__iconAndText}>
        {icon && <div className={styles.featuredIcon}>{icon}</div>}
        <div className={styles.headingAndSupportingText}>
          <h2 className={styles.headingAndSupportingText__heading}>{heading}</h2>
          {supportingText && (
            <div
              className={styles.headingAndSupportingText__supportingText}
              dangerouslySetInnerHTML={{ __html: supportingText }}
            />
          )}
        </div>
      </div>

      <ul className={styles.root__checkItems}>
        {items.map((item, index) => (
          <li className={styles.checkItem} key={index}>
            <div className={styles.checkItem__checkIcon}>
              <CheckCircleIcon />
            </div>
            <div className={styles.checkItem__textWrapper}>
              <div className={styles.checkItem__text} dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          </li>
        ))}
      </ul>

      {link && (
        <Button variant="linkColor" size="lg" href={link} endIcon={<ArrowRightIcon />}>
          {t('Learn more')}
        </Button>
      )}
    </article>
  );
}
