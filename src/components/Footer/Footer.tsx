import React from 'react';

import clsx from 'clsx';

import { Container } from '../Container/Container';
import { useT } from '../../lib/i18n';

// import fbSvg from './assets/fb.svg';
// import vkSvg from './assets/vk.svg';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  const t = useT('Footer');

  return (
    <footer className={clsx(styles.footer, className)}>
      <Container className={styles.container}>
        {/*<div className={clsx(styles.footer__social, styles.social)}>*/}
        {/*  <a className={styles.social__link} href="#">*/}
        {/*    <img src={fbSvg} alt="Facebook" />*/}
        {/*  </a>*/}
        {/*  <a className={styles.social__link} href="#">*/}
        {/*    <img src={vkSvg} alt="VK" />*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className={styles.footer__copyright}>
          © {new Date().getFullYear()} {t('Online money management FINEX')}
        </div>

        <div className={clsx(styles.footer__legalLinks, styles.legalLinks)}>
          <a className={styles.legalLinks__link} href="/legal/agreement/">
            {t('Agreement')}
          </a>
          <a className={styles.legalLinks__link} href="/legal/privacy/">
            {t('Privacy Policy')}
          </a>
          <a className={styles.legalLinks__link} href="/legal/terms/">
            {t('Terms of Use')}
          </a>
        </div>
      </Container>
    </footer>
  );
}
