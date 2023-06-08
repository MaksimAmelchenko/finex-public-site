import React, { useEffect, useState } from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../Button/Button';
import { initializeAndTrackYandexMetrika } from '../../lib/yandex-metrika';
import { initializeGoogleTagManager } from '../../lib/google-tag-manager';
import { useT } from '../../lib/i18n';

import { ReactComponent as Flag05Icon } from '../Icons/flag-05.svg';

import styles from './CookieConsent.module.scss';

export interface CookieConsentProps {
  googleTagManager: {
    trackingId: string;
  };
  yandexMetrika: {
    trackingId: string;
  };
}

export function CookieConsent({ googleTagManager, yandexMetrika }: CookieConsentProps): JSX.Element | null {
  const t = useT('CookieConsent');
  const { locale } = useLocalization();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const consentCookie = localStorage.getItem('gdpr_cookie_consent');
    if (!consentCookie) {
      setShow(true);
    } else {
      if (consentCookie === 'accepted') {
        initializeGoogleTagManager({ trackingId: googleTagManager.trackingId });
        if (locale === 'ru') {
          initializeAndTrackYandexMetrika({ trackingId: yandexMetrika.trackingId });
        }
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('gdpr_cookie_consent', 'accepted');
    initializeGoogleTagManager({ trackingId: googleTagManager.trackingId });
    if (locale === 'ru') {
      initializeAndTrackYandexMetrika({ trackingId: yandexMetrika.trackingId });
    }
    setShow(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('gdpr_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.root__content}>
        <div className={styles.root__info}>
          <div className={styles.root__featuredFlag}>
            <Flag05Icon />
          </div>
          <div className={styles.root__textAndSupportingText}>
            <div className={styles.root__text}>{t('We use cookies to improve your experience and for marketing.')}</div>
            <div className={styles.root__supportingText}>
              {t('Learn more in our ')}
              <a
                href="/legal/cookies-policy/"
                target="_blank"
                rel="nofollow"
                className={styles.root__supportingTextLink}
              >
                {t('Cookie Policy')}
              </a>
              {'.'}
            </div>
          </div>
        </div>
        <div className={styles.root__actions}>
          <Button size="lg" variant="secondaryGray" className={styles.root__button} onClick={handleDeclineCookies}>
            {t('Decline')}
          </Button>
          <Button size="lg" variant="secondaryColor" className={styles.root__button} onClick={handleAcceptCookies}>
            {t('Allow')}
          </Button>
        </div>
      </div>
    </div>
  );
}
