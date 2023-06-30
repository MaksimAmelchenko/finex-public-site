import React from 'react';

import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';
import { useDeviceSize } from '../../lib/use-device-size';

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
  const { isLarge } = useDeviceSize();

  if (isLarge) {
    return <HeaderDesktop navigation={navigation} actions={actions} className={className} />;
  }

  return <HeaderMobile navigation={navigation} actions={mobileActions} className={className} />;
}
