import Head from "next/head";

import MainLayout from "@/layouts/mainLayout";
import LoginPage from "@/modules/main/auth/login";

const Main = () => {
	return (
		<>
			<Head>
				<title>ورود</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<LoginPage />
			</main>
		</>
	);
};

// getLayout
Main.getLayout = (page) => <MainLayout>{page}</MainLayout>;
// export
export default Main;
