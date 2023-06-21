import React from 'react';

import { Container } from '../../../components/Container/Container';
import { FeatureCard } from './FeatureCard/FeatureCard';

import { ReactComponent as BankIcon } from '../../../components/Icons/bank.svg';
import { ReactComponent as Coins02Icon } from '../../../components/Icons/coins-02.svg';
import { ReactComponent as CoinsStacked01Icon } from '../../../components/Icons/coins-stacked-01.svg';
import { ReactComponent as DataFlow03Icon } from '../../../components/Icons/dataflow-03.svg';
import { ReactComponent as FolderIcon } from '../../../components/Icons/folder.svg';
import { ReactComponent as PiggyBank01Icon } from '../../../components/Icons/piggy-bank-01.svg';
import { ReactComponent as Shield01Icon } from '../../../components/Icons/shield-01.svg';
import { ReactComponent as Tag01Icon } from '../../../components/Icons/tag-01.svg';
import { ReactComponent as Users01Icon } from '../../../components/Icons/users-01.svg';
import { ReactComponent as Speedometer02Icon } from '../../../components/Icons/speedometer-02.svg';

const iconMap: Record<string, React.ReactNode> = {
  bankIcon: <BankIcon />,
  overviewIcon: <Speedometer02Icon />,
  budgetIcon: <PiggyBank01Icon />,
  cashFlowIcon: <DataFlow03Icon />,
  detailsIcon: <Tag01Icon />,
  multiCurrencyIcon: <Coins02Icon />,
  multiUserIcon: <Users01Icon />,
  planningIcon: <CoinsStacked01Icon />,
  projectsIcon: <FolderIcon />,
  securityIcon: <Shield01Icon />,
};

import styles from './Features.module.scss';
import clsx from 'clsx';

export interface IFeature {
  icon: string;
  title: string;
  description: string;
}

interface IFeaturesProps {
  features: IFeature[];
  className: string;
}

export function Features({ features, className }: IFeaturesProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <Container className={styles.root__container}>
        {features.map(({ icon, title, description }, index) => (
          <FeatureCard icon={iconMap[icon]} title={title} description={description} iconAlt={icon} key={index} />
        ))}
      </Container>
    </section>
  );
}
