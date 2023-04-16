interface IOptions {
  trackingId: string;
}

function initializeYandexMetrika({ trackingId }: IOptions) {
  if (!window.GDPRCookiesYandexMetrikaInitialized) {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      // @ts-ignore
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      // @ts-ignore
      (k = e.createElement(t)),
        // @ts-ignore
        (a = e.getElementsByTagName(t)[0]),
        // @ts-ignore
        (k.async = 1),
        // @ts-ignore
        (k.src = r),
        // @ts-ignore
        a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

    window.ym(trackingId, 'init', {
      clickmap: false,
      trackLinks: true,
      accurateTrackBounce: true,
      trackHash: true,
    });
    window.GDPRCookiesYandexMetrikaInitialized = true;
  }
}

export function initializeAndTrackYandexMetrika(options: IOptions) {
  const gdprCookieConsent = localStorage.getItem('gdpr_cookie_consent');

  if (gdprCookieConsent && gdprCookieConsent === 'accepted') {
    initializeYandexMetrika(options);
  }
}
