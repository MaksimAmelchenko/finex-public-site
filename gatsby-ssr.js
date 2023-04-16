require('./src/styles/global.scss');

const { initializeI18n } = require('./src/lib/i18n');

const ru = require('./locales/ru');
const en = require('./locales/en');
const de = require('./locales/de');

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
