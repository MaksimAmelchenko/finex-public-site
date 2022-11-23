import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../Container/Container';
import { Link } from '../Link/Link';

import { ReactComponent as Logo } from './assets/logo.svg';

import styles from './Header.module.scss';

export interface INavItem {
  title: string;
  link: string;
}

interface IHeaderProps {
  navItems: INavItem[];
  variant?: 'default' | 'light';
  className?: string;
}

export function Header({ navItems, variant = 'default', className }: IHeaderProps) {
  const { config, defaultLang } = useLocalization();

  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const handleOnBurgerClick = () => {
    setIsOpenedMenu(isOpenedMenu => !isOpenedMenu);
  };

  return (
    <header className={clsx(styles.header, styles[`header_${variant}`], className)}>
      <Container>
        <div className={styles.header__row}>
          <div className={styles.menu__icon}>
            <div
              className={clsx(
                styles.navIcon,
                variant === 'default' && styles.navIcon_white,
                isOpenedMenu && styles.active
              )}
              onClick={handleOnBurgerClick}
            >
              <div />
            </div>
          </div>

          <div className={styles.header__logo}>
            <Link to="/" className={styles.logo} aria-label="Go to home page">
              <Logo alt="FINEX.io" />
            </Link>
          </div>

          <nav className={clsx(styles.header__menu, styles.menu)}>
            <div className={clsx(styles.menu__body, isOpenedMenu && styles.menu__body_opened)}>
              <ul className={styles.menu__list}>
                {navItems.map(({ title, link }, index) => {
                  return (
                    <li key={index}>
                      <Link to={link} className={styles.menu__link}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className={clsx(styles.menu__languages, styles.languages)}>
                {config.map((lang, index, array) => {
                  return (
                    <a
                      href={`/${lang.code === defaultLang ? '' : lang.code}`}
                      className={styles.languages__item}
                      key={lang.code}
                    >
                      {index < array.length - 1 ? `${lang.localName} | ` : lang.localName}
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
