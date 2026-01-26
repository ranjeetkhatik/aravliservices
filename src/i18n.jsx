import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
      debug: true,
      lng: "hi",
      resources:{
       
        hi:{
          translation:{
            "greeting": "अरावली ई सर्विसेज में आपका स्वागत है",
            "home": "मुख्य पृष्ठ",
            "features": "विशेषताएं",
            "get_started": "शुरू करें",
            "change_lang": "English चुनें"
          },

        },
         en:{
          translation:{
            "greeting":"Welcome to Aravli E services",
            "home": "Home",
            "features": "Features",
            "get_started": "Get Started",
            "change_lang": "हिंदी चुनें"
          },

        },
      }

});
export default i18n;