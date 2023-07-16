import Head from "next/head";

import DashboardLayout from "@/layouts/dashboard";
import EasyChart from "@/modules/dashboard/easyChart";

const EasyChartPage = () => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />				</Head>
			<main>
				<EasyChart />
			</main>
		</>
	);
};

// getLayout
EasyChartPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
// export
export default EasyChartPage;
