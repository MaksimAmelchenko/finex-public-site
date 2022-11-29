import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Header as HeaderBase, INavItem } from '../../components/Header/Header';

import * as dataI18n from './data.yaml';

interface IData {
  nav: INavItem[];
}

interface IHeaderProps {
  variant?: 'default' | 'light';
  className?: string;
}

export function Header({ variant = 'default', className }: IHeaderProps): JSX.Element {
  const { locale } = useLocalization();
  const { nav }: IData = dataI18n[locale];

  return <HeaderBase navItems={nav} variant={variant} className={className} />;
}
