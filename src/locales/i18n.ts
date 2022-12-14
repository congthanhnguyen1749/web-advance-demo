import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/translation.json';
import translationVI from './vi/translation.json';
import translationRU from './ru/translation.json';
import translationJP from './jp/translation.json';
import translationKO from './ko/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
  jp: {
    translation: translationJP,
  },
  ru: {
    translation: translationRU,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'jp',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
