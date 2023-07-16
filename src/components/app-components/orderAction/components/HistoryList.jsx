import { useTranslation } from "react-i18next";
import { Tables } from "@/components";
import { switchers } from "@/modules/admin/services/transformers";

const HistoryList = ({ orderHistory = [], projects = [] }) => {
	const { t } = useTranslation();
	// table
	const columns = [
		{
			title: t("نوع عملیات"),
			dataIndex: "orderType",
			key: "orderType",
			render: (_, { orderType }) => (
				<span style={{ color: orderType === 7 ? "green" : "red" }} className="text-base">
					{switchers.orderType(orderType)}
				</span>
			),
		},
		{
			title: t("نام پروژه"),
			dataIndex: "securitiesCode",
			key: "securitiesCode",
			render: (_, { securitiesCode }) => projects.find((item) => item?.id === securitiesCode)?.name,
		},
		{
			title: t("تعداد"),
			dataIndex: "result",
			key: "result",
		},
		{
			title: t("حجم"),
			dataIndex: "volume",
			key: "volume",
		},
		{
			title: t("قیمت"),
			dataIndex: "value",
			key: "value",
			render: (_, { value }) => value.toLocaleString(),
		},
		{
			title: t("تاریخ"),
			dataIndex: "registerDateDisplay",
			key: "registerDateDisplay",
		},
	];
	// return
	return (
		<div className="app-table">
			<Tables dataSource={orderHistory} columns={columns} pagination={{ pageSize: 8 }} />
		</div>
	);
};

export default HistoryList;
