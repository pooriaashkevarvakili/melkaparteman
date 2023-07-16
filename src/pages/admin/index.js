// import Head from "next/head";

// import AdminLayout from "@/layouts/admin";
// import AdminPage from "@/modules/admin/dashboard";

// const Admin = () => {
// 	return (
// 		<>
// 			<Head>
// 				<title>Dashboard</title>
// 				<meta name="description" content="Dashboard" />
// 				<meta name="viewport" content="width=device-width, initial-scale=1" />
// 				<link rel="icon" href="assets/images/favicon.ico" />
// 			</Head>
// 			<main>
// 				<AdminPage />
// 			</main>
// 		</>
// 	);
// };

// // getLayout
// Admin.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// // export
// export default Admin;

import Head from "next/head";

import AdminLayout from "@/layouts/admin";
import SecuritiesPage from "@/modules/admin/securities";

const Securities = () => {
	return (
		<>
			<Head>
				<title>Securities</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/images/favicon.ico" />
			</Head>
			<main>
				<SecuritiesPage />
			</main>
		</>
	);
};

// getLayout
Securities.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// export
export default Securities;
