import React from 'react';

import clsx from 'clsx';

import { Container } from '../Container/Container';

// import fbSvg from './assets/fb.svg';
// import vkSvg from './assets/vk.svg';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  return (
    <footer className={clsx(styles.footer, className)}>
      <Container>
        {/*<div className={clsx(styles.footer__social, styles.social)}>*/}
        {/*  <a className={styles.social__link} href="#">*/}
        {/*    <img src={fbSvg} alt="Facebook" />*/}
        {/*  </a>*/}
        {/*  <a className={styles.social__link} href="#">*/}
        {/*    <img src={vkSvg} alt="VK" />*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className={styles.footer__copyright}>Домашняя бухгалтерия FINEX © {new Date().getFullYear()}</div>
      </Container>
    </footer>
  );
}
