import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../Container/Container';
import { useT } from '../../lib/i18n';

import telegramSvg from './assets/telegram.svg';
import twitterSvg from './assets/twitter.svg';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  const t = useT('Footer');
  const { locale } = useLocalization();

  return (
    <footer className={clsx(styles.footer, className)}>
      <Container className={styles.footer__social}>
        <div className={styles.social}>
          <a
            className={styles.social__link}
            href={`https://twitter.com/finex_${locale}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={twitterSvg} alt="Twitter" />
          </a>
          <a
            className={styles.social__link}
            href={`https://t.me/finex_${locale}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={telegramSvg} alt="Telegram" />
          </a>
        </div>
      </Container>

      <Container className={styles.container}>
        <div className={styles.footer__copyright}>
          © {new Date().getFullYear()} {t('Online money management FINEX')}
        </div>

        <div className={clsx(styles.footer__legalLinks, styles.legalLinks)}>
          <a
            className={styles.legalLinks__link}
            href="/legal/agreement/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {t('Agreement')}
          </a>
          <a
            className={styles.legalLinks__link}
            href="/legal/privacy/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {t('Privacy Policy')}
          </a>
          <a
            className={styles.legalLinks__link}
            href="/legal/terms/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {t('Terms of Use')}
          </a>
        </div>
      </Container>
    </footer>
  );
}
