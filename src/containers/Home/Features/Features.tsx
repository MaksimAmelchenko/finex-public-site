import React from 'react';

import { Container } from '../../../components/Container/Container';
import { FeatureCard } from './FeatureCard/FeatureCard';
import { TUrl } from '../../../types';

import budgetIconSvg from './assets/budget-icon.svg';
import cashFlowIconSvg from './assets/cash-flow-icon.svg';
import detailsIconSvg from './assets/details-icon.svg';
import multiCurrencyIconSvg from './assets/multi-currency-icon.svg';
import multiUserIconSvg from './assets/multi-user-icon.svg';
import planningIconSvg from './assets/planning.svg';
import projectsIconSvg from './assets/projects-icon.svg';
import securityIconSvg from './assets/security-icon.svg';

const iconMap: Record<string, TUrl> = {
  budgetIcon: budgetIconSvg,
  cashFlowIcon: cashFlowIconSvg,
  detailsIcon: detailsIconSvg,
  multiCurrencyIcon: multiCurrencyIconSvg,
  multiUserIcon: multiUserIconSvg,
  planningIcon: planningIconSvg,
  projectsIcon: projectsIconSvg,
  securityIcon: securityIconSvg,
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
          <FeatureCard icon={iconMap[icon]} title={title} description={description} iconAlt={icon} key={index} />
        ))}
      </Container>
    </section>
  );
}
