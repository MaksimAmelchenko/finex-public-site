import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Header as HeaderBase, INavItem } from '../../components/Header/Header';

import * as dataI18n from './data.yaml';

interface IData {
  navigation: INavItem[];
  actions: INavItem[];
  mobileActions: INavItem[];
}

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): JSX.Element {
  const { locale } = useLocalization();
  const { navigation, actions, mobileActions }: IData = dataI18n[locale];

  return <HeaderBase navigation={navigation} actions={actions} mobileActions={mobileActions} className={className} />;
}
