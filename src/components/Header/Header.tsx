import React from 'react';

import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

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

interface HeaderProps {
  navigation: INavItem[];
  actions: INavItem[];
  mobileActions: INavItem[];
  className?: string;
}

export function Header({ navigation, actions, mobileActions, className }: HeaderProps) {
  return (
    <>
      <HeaderDesktop navigation={navigation} actions={actions} className={className} />
      <HeaderMobile navigation={navigation} actions={mobileActions} className={className} />
    </>
  );
}
