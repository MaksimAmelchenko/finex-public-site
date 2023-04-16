import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../Container/Container';
import { CookieConsent } from '../../containers/CookieConsent/CookieConsent';
import { FooterLinksColumn } from './FooterLinksColumn/FooterLinksColumn';

import gitHubSvg from './assets/github.svg';
import logoSvg from '../Icons/logo-dart-mode.svg';
import telegramSvg from './assets/telegram.svg';
import twitterSvg from './assets/twitter.svg';

import * as dataI18n from './data.yaml';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

const SocialNetworkIconMap = {
  github: gitHubSvg,
  telegram: telegramSvg,
  twitter: twitterSvg,
};

interface IData {
  supportingText: string;
  footerText: string;
  columns: Array<{
    title: string;
    links: Array<{
      title: string;
      href: string;
      rel?: string;
    }>;
  }>;
  socialNetworks: Array<{
    title: string;
    platform: string;
    href: string;
  }>;
}

export function Footer({ className }: IFooterProps) {
  const { locale } = useLocalization();
  const { supportingText, footerText, columns, socialNetworks }: IData = dataI18n[locale];

  return (
    <>
      <footer className={clsx(styles.root, className)}>
        <section className={styles.root__linksSection}>
          <Container>
            <div className={styles.root__linksSectionContent}>
              <div className={styles.root__logoAndSupportingText}>
                <img src={logoSvg} className={styles.root__logo} alt="Logotype" />
                <div className={styles.root__supportingText}>{supportingText}</div>
              </div>

              <div className={styles.root__links}>
                {columns.map(({ title, links }, index) => (
                  <FooterLinksColumn heading={title} links={links} key={index} />
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.root__footerSection}>
          <Container>
            <div className={styles.root__footerContent}>
              <div className={styles.root__footerText}>
                © {new Date().getFullYear()} {footerText}
              </div>
              <div className={styles.root__socialIcons}>
                {socialNetworks.map(({ title, platform, href }, index) => (
                  <a
                    className={styles.root_socialIcon}
                    href={href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    key={platform}
                  >
                    <img src={SocialNetworkIconMap[platform]} alt={title} />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </footer>

      <CookieConsent />
    </>
  );
}
