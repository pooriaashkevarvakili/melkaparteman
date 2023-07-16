import Head from "next/head";

import MainLayout from "@/layouts/mainLayout";
import RegisterPage from "@/modules/main/auth/register";

const Register = () => {
	return (
		<>
			<Head>
				<title>ثبت نام</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<RegisterPage />
			</main>
		</>
	);
};

// getLayout
Register.getLayout = (page) => <MainLayout>{page}</MainLayout>;
// export
export default Register;
