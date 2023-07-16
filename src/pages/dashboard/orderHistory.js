import Head from "next/head";

import DashboardLayout from "@/layouts/dashboard";
import OrderHistory from "@/modules/dashboard/orderHistory";

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>تاریخچه سفارشات</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />				</Head>
			<main>
				<OrderHistory />
			</main>
		</>
	);
};

// getLayout
Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
// export
export default Dashboard;
