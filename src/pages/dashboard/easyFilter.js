import Head from "next/head";

import DashboardLayout from "@/layouts/dashboard";

const EasyFilterPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />				</Head>
			<main>
				Easy Filter
			</main>
		</>
	);
};

// getLayout
EasyFilterPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
// export
export default EasyFilterPage;
