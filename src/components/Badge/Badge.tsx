import React from 'react';
import clsx from 'clsx';

import styles from './Badge.module.scss';

export interface BadgeProps {
  size?: 'md';
  children: string;
  className?: string;
}

export function Badge({ size = 'md', children, className }: BadgeProps): JSX.Element {
  return (
    <div className={clsx(styles.root, className, styles[`root_size_${size}`])}>
      <div className={styles.root__label} title={children}>
        {children}
      </div>
    </div>
  );
}
