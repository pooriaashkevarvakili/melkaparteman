import Head from "next/head";

import DashboardLayout from "@/layouts/dashboard";
import DashboardPage from "@/modules/dashboard/watcher";

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>دیده بان</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />				</Head>
			<main>
				<DashboardPage />
			</main>
		</>
	);
};

// getLayout
Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
// export
export default Dashboard;
