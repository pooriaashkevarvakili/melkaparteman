import Head from "next/head";

import AdminLayout from "@/layouts/admin";
import WalletPage from "@/modules/admin/wallet";

const Wallet = () => {
	return (
		<>
			<Head>
				<title>Wallet</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<WalletPage />
			</main>
		</>
	);
};

// getLayout
Wallet.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// export
export default Wallet;
