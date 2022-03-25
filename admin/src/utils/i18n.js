import localeData from "../assets/translations.data.json";
import { LOCALSTORAGE_LANGUAGE } from "../../../src/utils/i18n";
const navigatorLang = ((navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage)
  .toLowerCase()
  .split(/[_-]+/)[0];
export const lang = localStorage.getItem(LOCALSTORAGE_LANGUAGE)
  ? localStorage.getItem(LOCALSTORAGE_LANGUAGE)
  : (localeData[navigatorLang] && navigatorLang) || "en";
export const messages = localeData[lang] || localeData.en;
