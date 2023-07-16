import Head from "next/head";

import DashboardLayout from "@/layouts/dashboard";
import Transactions from "@/modules/dashboard/transactions";

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>گردش حساب</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />				</Head>
			<main>
				<Transactions />
			</main>
		</>
	);
};

// getLayout
Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
// export
export default Dashboard;
