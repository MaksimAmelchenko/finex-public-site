import React from 'react';

import { Container } from '../../../components/Container/Container';
import { FeatureCard } from './FeatureCard/FeatureCard';

import BudgetIcon from './assets/BudgetIcon.inline.svg';
import CashFlowIcon from './assets/CashFlowIcon.inline.svg';
import DetailsIcon from './assets/DetailsIcon.inline.svg';
import MultiCurrencyIcon from './assets/MultiCurrencyIcon.inline.svg';
import MultiUserIcon from './assets/MultiUserIcon.inline.svg';
import PlanningIcon from './assets/Planning.inline.svg';
import ProjectsIcon from './assets/ProjectsIcon.inline.svg';
import SecurityIcon from './assets/SecurityIcon.inline.svg';

const iconMap: Record<string, React.FC<any>> = {
  budgetIcon: BudgetIcon,
  cashFlowIcon: CashFlowIcon,
  detailsIcon: DetailsIcon,
  multiCurrencyIcon: MultiCurrencyIcon,
  multiUserIcon: MultiUserIcon,
  planningIcon: PlanningIcon,
  projectsIcon: ProjectsIcon,
  securityIcon: SecurityIcon,
};

import styles from './Features.module.scss';

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
    <section className={className}>
      <Container className={styles.features}>
        {features.map(({ icon, title, description }, index) => (
          <FeatureCard icon={iconMap[icon]} title={title} description={description} key={index} />
        ))}
      </Container>
    </section>
  );
}
