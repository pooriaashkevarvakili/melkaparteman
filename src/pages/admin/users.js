import Head from "next/head";

import AdminLayout from "@/layouts/admin";
import UserManagementPage from "@/modules/admin/users";

const UserManagement = () => {
	return (
		<>
			<Head>
				<title>مدیریت کاربران</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<UserManagementPage />
			</main>
		</>
	);
};

// getLayout
UserManagement.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// export
export default UserManagement;
