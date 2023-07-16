import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

import useLanguage from "@/hooks/useLanguage";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";

import { Waiting } from "@/components";
import AppContext from "./index";

const ApplicationContext = ({ children }) => {
	// language
	const { language, changeLanguage, direction, locale, placement } = useLanguage();
	// theme
	const {
		themeAntMode,
		themeMode,
		changeTheme,
		fontAntMode,
		fontMode,
		changeFontMode,
		selectedToken,
		changeTokenMode,
		tokens,
	} = useTheme(theme);
	// authentication
	const { user, isLoading, error } = useAuth();
	if (isLoading) {
		return <Waiting />;
	}
	if (error) {
		return <Waiting>{error}</Waiting>;
	}
	// initialize pages
	return (
		<AppContext.Provider
			value={{
				user,
				isLoading,
				language,
				placement,
				direction,
				// themeHandlers
				changeLanguage,
				themeMode,
				changeTheme,
				fontMode,
				changeFontMode,
				tokens,
				selectedToken,
				changeTokenMode,
			}}
		>
			<StyleProvider hashPriority="high">
				<ConfigProvider
					locale={locale}
					direction={direction}
					theme={{
						algorithm: [themeAntMode, ...fontAntMode],
						token: tokens[selectedToken],
					}}
				>
					{children}
				</ConfigProvider>
			</StyleProvider>
		</AppContext.Provider>
	);
};

export default ApplicationContext;
