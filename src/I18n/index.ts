import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./en.json";
import jp from "./jp.json";


const language = localStorage.getItem('language') || 'en'
i18n.use(initReactI18next).init({
  resources: {
    en: {
        common: en
    },
    jp: {
        common: jp
    }
  },
  fallbackLng: language,
  lng: language,
  interpolation: {
    escapeValue: false,
  },
//   debug: process.env.NODE_ENV !== "production",
//   ns: ["translations"],
//   defaultNS: "translations",
//   keySeparator: false,
//   react: {
//     wait: true,
//   },
});

export default i18n;
