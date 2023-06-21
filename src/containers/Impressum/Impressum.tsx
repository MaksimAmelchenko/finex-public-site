import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Seo } from '../../components/Seo/Seo';
import { useScrollToTop } from '../../lib/use-scroll-to-top';

import styles from './Impressum.module.scss';

export function Impressum(): JSX.Element {
  const { locale } = useLocalization();

  useScrollToTop();

  return (
    <div className={styles.root}>
      <Seo
        title="Impressum"
        lang={locale}
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />
      <Header />
      <main className={styles.root__main}>
        <Container className={styles.root__content}>
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Maksim Amelchenko
            <br />
            Harscampstraße 49
            <br />
            52062 Aachen
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@finex.io">info@finex.io</a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE360843507
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
