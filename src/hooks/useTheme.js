import { useEffect, useState } from "react";

import { getFromStorage, setToStorage } from "@/utils/storage";
import tokens from "@/theme";

let defaultTheme = getFromStorage("theme") || "light";
let defaultFontSize = getFromStorage("fontSize") || "default";
let defaultToken = getFromStorage("tokenColor") || "default";

const useTheme = (theme) => {
	const [themeMode, setThemeMode] = useState("light");
	const [fontMode, setFontSize] = useState("default");
	const [selectedToken, setToken] = useState("default");
	// themeAntMode
	const changeTheme = (mode) => {
		// light, dark
		setThemeMode(mode);
		// setToStorage
		setToStorage("theme", mode);
	};
	let themeAntMode;
	switch (themeMode) {
		case "light":
			themeAntMode = theme["defaultAlgorithm"];
			break;
		case "dark":
			themeAntMode = theme["darkAlgorithm"];
			break;
		default:
			themeAntMode = theme["defaultAlgorithm"];
			break;
	}
	// fontAntMode
	const changeFontMode = (mode) => {
		setFontSize(mode); // small, default
		// setToStorage
		setToStorage("fontSize", mode);
	};
	let fontAntMode;
	switch (fontMode) {
		case "default":
			fontAntMode = [];
			break;
		case "small":
			fontAntMode = [theme["compactAlgorithm"]];
			break;
		default:
			fontAntMode = [];
			break;
	}
	// tokenMode
	const changeTokenMode = (mode) => {
		setToken(mode);
		// setToStorage
		setToStorage("tokenColor", mode);
	};
	// init theme
	useEffect(() => {
		changeTheme(defaultTheme);
		changeFontMode(defaultFontSize);
		changeTokenMode(defaultToken)
	}, []);
	// return
	return {
		changeTheme,
		themeAntMode,
		themeMode,
		changeFontMode,
		fontAntMode,
		fontMode,
		changeTokenMode,
		tokens,
		selectedToken,
	};
};

export default useTheme;
