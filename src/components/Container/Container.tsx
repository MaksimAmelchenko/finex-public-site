import React from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children, ...rest }: ContainerProps): JSX.Element {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {children}
    </div>
  );
}
