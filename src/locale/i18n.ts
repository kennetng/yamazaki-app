import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import no from "./no";

const resources = {
  en: {
    translation: en,
  },
  no: {
    translation: no,
  },
};

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "no",
    fallbackLng: "no",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const getLanguage = () => i18n.language || window.localStorage.i18nLng;
