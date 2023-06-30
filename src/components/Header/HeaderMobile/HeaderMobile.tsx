import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../Button/Button';
import { Link } from '../../Link/Link';

import { ReactComponent as Logo } from '../../Icons/logotype.svg';

import styles from './HeaderMobile.module.scss';

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

interface HeaderMobileProps {
  navigation: INavItem[];
  actions: INavItem[];
  className?: string;
}

export function HeaderMobile({ navigation, actions, className }: HeaderMobileProps) {
  const { config, defaultLang } = useLocalization();

  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const handleOnBurgerClick = () => {
    setIsOpenedMenu(isOpenedMenu => !isOpenedMenu);
  };

  return (
    <header className={clsx(styles.root, className)}>
      <div className={styles.root__container}>
        <div className={clsx(styles.navIcon, isOpenedMenu && styles.active)} onClick={handleOnBurgerClick}>
          <div />
        </div>
        <div className={styles.root__logo}>
          <Link to="/" className={styles.logo} aria-label="Go to home page">
            <Logo />
          </Link>
        </div>
      </div>

      <div className={clsx(styles.root__content, !isOpenedMenu && styles.root__content_hide)}>
        <nav className={styles.navigation}>
          {navigation.map(({ title, link }, index) => (
            <Link to={link} className={styles.navMenuItem} key={index}>
              {title}
            </Link>
          ))}
        </nav>

        <div className={styles.root__actions}>
          {actions.map(({ title, link, buttonVariant }, index) => (
            <Button variant={buttonVariant} size="lg" fullSize href={link} key={index}>
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
    </header>
  );
}
