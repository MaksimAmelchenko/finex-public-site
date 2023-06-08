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
          googleTagManager {
            trackingId
          }
          yandexMetrika {
            trackingId
          }
        }
      }
    }
  `);
  const { googleTagManager, yandexMetrika } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Container>
        <CookieConsentBase googleTagManager={googleTagManager} yandexMetrika={yandexMetrika} />
      </Container>
    </div>
  );
}
