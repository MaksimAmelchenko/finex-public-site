interface IOptions {
  trackingId: string;
}

function addGoogleAnalytics({ trackingId }: IOptions) {
  return new Promise((resolve, reject) => {
    if (window.GDPRCookiesGoogleAnalyticsAdded) return resolve(true);

    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = `text/javascript`;
    script.onload = () => {
      window.GDPRCookiesGoogleAnalyticsAdded = true;
      resolve(true);
    };
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;

    head.appendChild(script);
  });
}

function initializeGoogleAnalytics({ trackingId }: IOptions) {
  if (!window.GDPRCookiesGoogleAnalyticsInitialized) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());

    window.gtag('config', trackingId, {});

    window.GDPRCookiesGoogleAnalyticsInitialized = true;
  }
}

export function initializeAndTrackGoogleAnalytics(options: IOptions) {
  const gdprCookieConsent = localStorage.getItem('gdpr_cookie_consent');

  if (gdprCookieConsent && gdprCookieConsent === 'accepted') {
    addGoogleAnalytics(options).then(status => {
      if (status) {
        initializeGoogleAnalytics(options);
      }
    });
  }
}
