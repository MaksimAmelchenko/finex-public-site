declare interface Window {
  gtag: any;
  ym: any;
  GDPRCookiesGoogleAnalyticsAdded: boolean;
  GDPRCookiesGoogleAnalyticsInitialized: boolean;
  GDPRCookiesYandexMetrikaInitialized: boolean;
  dataLayer: any[];
}

declare module '*.yaml' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  const ReactComponent: any;
  export default content;
  export { ReactComponent };
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
