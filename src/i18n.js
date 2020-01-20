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
          "Hello! I'm Joseph Hughes, a frontend developer living in Stockholm. I have been building websites since the early 2000s, and now specialise in Vue.js, Nuxt, e-commerce, PWAs.",
        "more-info": "Living in Stockholm, still learning Swedish.",
      },
    },
    sv: {
      translation: {
        change: "Byt språk",
        en: "Engelska",
        sv: "Svenska",
        "frontend-developer": "Frontend– Utvecklare",
        about:
          "Hej! Jag heter Joseph Hughes och är en frontend-utvecklare som bor i Stockholm efter att ha flyttat från London. Sedan 2001 har jag byggt webbsidor. Idag använder jag Vue.js, Nuxt, e-commerce och PWA.",
        "more-info": "Bor i Stockholm. Jag ska lära mig bra Svenska snart.",
      },
    },
  },
});

export default i18n;
