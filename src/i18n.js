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
        change: "Change language",
        en: "English",
        sv: "Swedish",
        "frontend-developer": "Frontend Developer",
        about:
          "Hello! I'm a frontend developer living in Stockholm and have been working on websites since the early 2000s. I specialise in modern JavaScript sites and PWAs, using Vue.js and more recently React. I also have a lot of experience working with Wordpress and Drupal, headless setups and many APIs and GraphQL. I know basic Swedish, and just like development, try to learn something new everyday.",
        "more-info": "If you would like to know more, please get in touch.",
      },
    },
    sv: {
      translation: {
        change: "Byt språk",
        en: "Engelska",
        sv: "Svenska",
        "frontend-developer": "Frontend Utvecklare",
        about:
          "Hej! Jag ar en frontend utvecklare nu bor i Stockholm efter flyttade från London. Sedan 2001 har jag byggt webbplatser. Jag jobba med modern JavaScript, Vue.js, nyligen React. Jag har jobbat mycket med Wordpress och Drupal. (Antar jag du kan läs jag kan inte tala eller skriva så bra in Svenska, men jag lär mig det här året. Jag rör Google Translate bara lite, jag svär!)",
        "more-info":
          "Om vill du mer information, kolla min LinkedIn eller komma i kontakt.",
      },
    },
  },
});

export default i18n;
