import React from 'react';
import clsx from 'clsx';

import { Container } from '../../../components/Container/Container';

import quarterCircleHeroVelocitySvg from './assets/quarter-circle-hero-velocity.svg';

import styles from './Jumbotron.module.scss';

interface IJumbotronProps {
  title: string;
  subTitle: string;
  className?: string;
}

export function Jumbotron({ title, subTitle, className }: IJumbotronProps) {
  return (
    <section className={clsx(styles.jumbotron, className)}>
      <img src={quarterCircleHeroVelocitySvg} className={styles.jumbotron__image} alt="" />
      <Container>
        <div className={clsx(styles.jumbotron__header, styles.header)}>
          <h1 className={styles.header__title}>{title}</h1>
          <div className={styles.header__description}>{subTitle}</div>
        </div>
      </Container>
    </section>
  );
}
