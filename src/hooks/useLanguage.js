import { useState, useEffect } from "react";

import i18next from "i18next";
import { getFromStorage, setToStorage } from "@/utils/storage";

import localeFa from "antd/lib/locale/fa_IR";
import localeEn from "antd/lib/locale/en_US";

let defaultLanguage = getFromStorage("language") || "fa";

const useLanguage = () => {
	const [language, setLanguage] = useState("");
	// handles
	const changeLanguage = (lang = "fa") => {
		i18next.changeLanguage(lang);
		setLanguage(lang);
		// setToStorage
		setToStorage("language", lang);
	};
	// init langs
	let direction = language === "en" ? "ltr" : "rtl"
	let placement = language === "en" ? "right" : "left"
	let locale = language === "en" ? localeEn : localeFa
	useEffect(() => {
		changeLanguage(defaultLanguage);
	}, []);
	// return
	return { language, direction, locale, placement, changeLanguage };
};

export default useLanguage;
