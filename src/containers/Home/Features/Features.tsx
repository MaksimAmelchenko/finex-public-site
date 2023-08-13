import React from 'react';
import clsx from 'clsx';

import { Container } from '../../../components/Container/Container';
import { FeatureCard } from '../../../components/FeatureCard/FeatureCard';
import { GridBackground } from '../../../components/GridBackground/GridBackground';

import { ReactComponent as BankIcon } from '../../../components/Icons/bank.svg';
import { ReactComponent as Coins02Icon } from '../../../components/Icons/coins-02.svg';
import { ReactComponent as CoinsStacked01Icon } from '../../../components/Icons/coins-stacked-01.svg';
import { ReactComponent as DataFlow03Icon } from '../../../components/Icons/dataflow-03.svg';
import { ReactComponent as FolderIcon } from '../../../components/Icons/folder.svg';
import { ReactComponent as PiggyBank01Icon } from '../../../components/Icons/piggy-bank-01.svg';
import { ReactComponent as Shield01Icon } from '../../../components/Icons/shield-01.svg';
import { ReactComponent as Speedometer02Icon } from '../../../components/Icons/speedometer-02.svg';
import { ReactComponent as Tag01Icon } from '../../../components/Icons/tag-01.svg';
import { ReactComponent as Users01Icon } from '../../../components/Icons/users-01.svg';
import { ReactComponent as ZapIcon } from '../../../components/Icons/zap.svg';

const iconMap: Record<string, React.ReactNode> = {
  bankIcon: <BankIcon />,
  budgetIcon: <PiggyBank01Icon />,
  cashFlowIcon: <DataFlow03Icon />,
  detailsIcon: <Tag01Icon />,
  multiCurrencyIcon: <Coins02Icon />,
  multiUserIcon: <Users01Icon />,
  overviewIcon: <Speedometer02Icon />,
  planningIcon: <CoinsStacked01Icon />,
  projectsIcon: <FolderIcon />,
  securityIcon: <Shield01Icon />,
  zapIcon: <ZapIcon />,
};

import styles from './Features.module.scss';

export interface IFeature {
  icon: string;
  title: string;
  description: string;
  heading: string;
  supportingText: string;
  items: string[];
  link?: string;
}

interface IFeaturesProps {
  features: IFeature[];
  className: string;
}

export function Features({ features, className }: IFeaturesProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <GridBackground />
      <Container>
        <div className={styles.root__container}>
          {features.map(({ icon, heading, supportingText, items, link }, index) => (
            <FeatureCard
              icon={iconMap[icon]}
              heading={heading}
              supportingText={supportingText}
              items={items}
              link={link}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
