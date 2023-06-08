interface IOptions {
  trackingId: string;
}

function addGoogleTagManager({ trackingId }: IOptions) {
  return new Promise((resolve, reject) => {
    if (window.GDPRCookiesGoogleTagManagerAdded) return resolve(true);

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement('script'),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode!.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', trackingId);

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${trackingId}`;
    iframe.height = '0';
    iframe.width = '0';
    // @ts-ignore
    iframe.style = 'display: none; visibility: hidden';

    document.body.insertBefore(iframe, document.body.firstChild);

    window.GDPRCookiesGoogleTagManagerAdded = true;
  });
}

export function initializeGoogleTagManager(options: IOptions) {
  const gdprCookieConsent = localStorage.getItem('gdpr_cookie_consent');

  if (gdprCookieConsent && gdprCookieConsent === 'accepted') {
    addGoogleTagManager(options);
  }
}
