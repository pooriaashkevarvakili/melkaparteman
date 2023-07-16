import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// languages
import english from "./english.json";
import persian from "./persian.json";

const options = {
	resources: {
		en: {
			translation: english,
		},
		fa: {
			translation: persian,
		},
	},
	fallbackLng: "fa",
	debug: false,
};

i18n.use(initReactI18next).use(LanguageDetector).init(options);

export default i18n;


// for initialization SSR language for CEO we can use https://i18nexus.com/nextjs-tutorial/