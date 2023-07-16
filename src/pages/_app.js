import { Provider } from "react-redux";
// localization
import i18n from "@/langs";
import { I18nextProvider } from "react-i18next";
// styles
import "@/assets/styles/modules/tailwind.css";
import "@/assets/styles/main.scss";
// store
import { store } from "@/store";
// context

import ApplicationContext from "@/context/AppContext";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const App = ({ Component, pageProps }) => {
	// getLayout
	const getLayout = Component.getLayout ?? ((page) => page);
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);
	// return
	return (
		<>
			<div className="flex items-center justify-center relative top-52">
				{showLoading && <Loading />}
			</div>
			<Provider store={store}>
				<ApplicationContext>
					<I18nextProvider i18n={i18n}>{getLayout(<Component {...pageProps} />)}</I18nextProvider>
				</ApplicationContext>
			</Provider>
		</>
	);
};

export default App;
