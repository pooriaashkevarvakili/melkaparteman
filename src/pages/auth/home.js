import Head from "next/head";

import MainLayout from "@/layouts/mainLayout/index";
import DashboardPage from "@/modules/dashboard/watcher";

const Login = () => {
	return (
		<>
			<Head>
				<title>ورود</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />

			</Head>
			<main>
				<DashboardPage />
			</main>
		</>
	);
};

// getLayout
Login.getLayout = (page) => <MainLayout>{page}</MainLayout>;
// export
export default Login;
