import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<IContainerProps> = ({ className, children }) => {
  return <div className={clsx(styles.container, className)}> {children} </div>;
};
