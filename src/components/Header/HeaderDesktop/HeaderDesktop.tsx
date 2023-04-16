import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../Button/Button';
import { Container } from '../../Container/Container';
import { Link } from '../../Link/Link';

import logoSvg from '../../Icons/logomark.svg';

import styles from './HeaderDesktop.module.scss';

export interface INavItem {
  title: string;
  link: string;
  buttonVariant?:
    | 'primary'
    | 'secondaryColor'
    | 'secondaryGray'
    | 'tertiaryColor'
    | 'tertiaryGray'
    | 'linkColor'
    | 'linkGray';
}

interface HeaderDesktopProps {
  navigation: INavItem[];
  actions: INavItem[];
  className?: string;
}

export function HeaderDesktop({ navigation, actions, className }: HeaderDesktopProps) {
  const { config, defaultLang } = useLocalization();

  return (
    <header className={clsx(styles.root, className)}>
      <Container className={styles.root__container}>
        <div className={styles.root__content}>
          <div className={styles.root__logo}>
            <Link to="/" className={styles.logo} aria-label="Go to home page">
              <img src={logoSvg} alt="logo" />
            </Link>
          </div>

          <nav className={styles.navigation}>
            {navigation.map(({ title, link }, index) => (
              <Link to={link} className={styles.navigation__item} key={index}>
                {title}
              </Link>
            ))}
          </nav>

          <div className={styles.root__actions}>
            {actions.map(({ title, link, buttonVariant }, index) => (
              <Button variant={buttonVariant} size="lg" href={link} key={index}>
                {title}
              </Button>
            ))}
          </div>

          <div className={styles.locales}>
            {config.map((locale: any) => (
              <a
                href={`/${locale.code === defaultLang ? '' : locale.code + '/'}`}
                className={styles.locales__item}
                key={locale.code}
              >
                {locale.localName}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
