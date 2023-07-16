import { useTranslation } from "react-i18next";
import { Tables } from "@/components";

const HistoryList = ({ walletHistory = [] }) => {
	const { t } = useTranslation();
	// table
	const columns = [
		// {
		// 	title: t("کد"),
		// 	dataIndex: "walletId",
		// 	key: "walletId",
		// },
		// {
		// 	title: t("کد کاربر"),
		// 	dataIndex: "userCode",
		// 	key: "userCode",
		// },
		{
			title: t("تاریخ"),
			dataIndex: "registerDate",
			key: "registerDate",
		},
		{
			title: t("بدهکار"),
			dataIndex: "debtor",
			key: "debtor",
		},
		{
			title: t("بستانکار"),
			dataIndex: "creditor",
			key: "creditor",
		},
		{
			title: t("مقدار"),
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: t("توضیحات"),
			dataIndex: "description",
			key: "description",
		},
	];
	// return
	return (
		<div className="app-table">
			<Tables dataSource={walletHistory} columns={columns} pagination={{ pageSize: 8 }} />
		</div>
	);
};

export default HistoryList;
