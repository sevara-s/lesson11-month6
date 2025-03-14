import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import English from "../locals/eng/eng.json";
import Russian from "../locals/ru/ru.json";
import Uzbek from "../locals/uzb/uzb.json";

const resources = {
  en: { translation: English },
  ru: { translation: Russian },
  uz: { translation: Uzbek },
};

const savedLang = localStorage.getItem("language") || "en";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources,
  });

export default i18next;
