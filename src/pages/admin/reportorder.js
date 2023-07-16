import Head from "next/head";
import AdminLayout from "@/layouts/admin";
import TableReportOrder from "@/modules/admin/ReportOrder";



const Reportorder = () => {
	return (
		<>
			<Head>
				<title>تاریخچه سفارشات</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				<TableReportOrder />
			</main>
		</>
	);
};

// getLayout
// export

Reportorder.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
// export
export default Reportorder;

