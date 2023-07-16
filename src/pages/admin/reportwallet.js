import Head from "next/head";
import AdminLayout from "@/layouts/admin";
import TableRepotWallet from "@/modules/admin/RepotWallet";

const Reportwallet = () => {
	return (
		<>
			<Head>
				<title>گزارش گردش حساب</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<TableRepotWallet />
			</main>
		</>
	);
};

// getLayout
Reportwallet.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// export
export default Reportwallet;
