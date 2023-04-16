import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../../components/Container/Container';
import { CookieConsent as CookieConsentBase } from '../../components/CookieConsent/CookieConsent';

import styles from './CookieConsent.module.scss';

export function CookieConsent(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          googleAnalytics {
            trackingId
          }
          yandexMetrika {
            trackingId
          }
        }
      }
    }
  `);
  const { googleAnalytics, yandexMetrika } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Container>
        <CookieConsentBase googleAnalytics={googleAnalytics} yandexMetrika={yandexMetrika} />
      </Container>
    </div>
  );
}
