import React from 'react';
import PropTypes from 'prop-types';

const googleTagManagerId = process.env.GATSBY_GOOGLE_TAG_MANAGER_ID;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: ` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          if (localStorage.getItem('consentMode') === null) {
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'personalization_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'denied',
            });
          } else {
            gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
          }
        `,
          }}
        />

        {/* <!-- Google Tag Manager --> */}
        {googleTagManagerId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleTagManagerId}');
        `,
            }}
          />
        )}
        {/* <!-- End Google Tag Manager --> */}

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {googleTagManagerId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src=https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
            }}
          />
        )}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
