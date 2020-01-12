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
          "Hello! I'm Joseph Hughes, a frontend developer living in Stockholm. I have been building websites since the early 2000s, and now specialise in modern JavaScript, using Vue.js and more recently React. I've worked a lot with Wordpress and Drupal, headless apps, APIs and GraphQL. I know basic Swedish, just as with web development, try to learn something new everyday.",
        "more-info":
          "Take a look at my LinkedIn to see who I have worked with, and feel free to get in touch.",
      },
    },
    sv: {
      translation: {
        change: "Byt språk",
        en: "Engelska",
        sv: "Svenska",
        "frontend-developer": "Frontend– Utvecklare",
        about:
          "Hej! Jag heter Joseph Hughes och är en frontend-utvecklare som bor i Stockholm efter att ha flyttat från London. Sedan 2001 har jag byggt webbsidor. Idag använder jag modern JavaScript, Vue.js, PWAs och, på senaste tiden, React. Jag har även lång erfarenhet av Wordpress och Drupal. (Jag är inte 100% flytande i tal eller skrift på svenska, men ska lära mig i år. Jag använder bara Google Translate lite, I promise!)",
        "more-info":
          "Kolla in min LinkedIn för att läsa mer om min erfarenhet, och hör av dig om du undrar något.",
      },
    },
  },
});

export default i18n;
