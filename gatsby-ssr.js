require('./src/styles/global.scss');

const { initializeI18n } = require('./src/lib/i18n');

const en = require('./locales/en').default;
const ru = require('./locales/ru').default;
const de = require('./locales/de').default;

exports.wrapRootElement = ({ element }) => {
  initializeI18n(
    {
      ru,
      en,
      de,
    },
    'ru'
  );

  return element;
};
