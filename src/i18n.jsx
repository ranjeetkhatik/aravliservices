import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
      debug: true,
      lang: "hi",
      resources:{
        en:{
          translation:{
            "greeting":"Welcome to Aravli E services"
          },

        },
        hi:{
          translation:{
            "greeting": "अरावली ई सेवाओं में आपका स्वागत है"
          },

        },
      }

});
export default i18n;