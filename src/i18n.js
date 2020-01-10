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
          "Hello! I'm Joseph Hughes, a frontend developer living in Stockholm and have been working on websites since the early 2000s. I specialise in modern JavaScript sites and PWAs, using Vue.js and more recently React. I also have a lot of experience working with Wordpress and Drupal, headless setups and many APIs and GraphQL. I know basic Swedish, and just like development, try to learn something new everyday.",
        "more-info":
          "Take a look at my LinkedIn to see who I have worked with, and feel free to get in touch.",
      },
    },
    sv: {
      translation: {
        change: "Byt språk",
        en: "Engelska",
        sv: "Svenska",
        "frontend-developer": "Frontend Utvecklare",
        about:
          "Hej! Jag är Joseph Hughes, en frontend-utvecklare nu bor i Stockholm efter flyttade från London. Sedan 2001 har jag byggt webbplatser. Jag jobba med modern JavaScript, Vue.js, PWAs, och nyligen React. Och mer också... främst Wordpress och Drupal. (Antar jag, du kan läs jag kan inte tala eller skriva så bra in Svenska, men jag lär mig det här året. Jag rör Google Translate bara lite, jag svär!)",
        "more-info":
          "Kolla in min LinkedIn att se min erfarenhet, och hör av dig om du vill ha mer information.",
      },
    },
  },
});

export default i18n;
