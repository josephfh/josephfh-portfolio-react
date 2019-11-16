import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        hello: "Hello world",
        change: "Change language",
      },
    },
    sv: {
      translation: {
        hello: "Hej världen",
        change: "Byt språk",
      },
    },
  },
});

export default i18n;
