import { Tables } from "@/components";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import { SlNote, SlWallet } from "react-icons/sl";
import { TfiMoney } from "react-icons/tfi";
const UserList = ({ loading, userList, showModal, handleSwitchUserStatus, handleSwitchUserAccount }) => {
	const { t } = useTranslation();
	// table options
	const columns = [
		{
			title: t("ردیف"),
			dataIndex: "row",
			key: "row",
			width: 70,
		},
		{
			title: t("نام کامل"),
			dataIndex: "fullName",
			key: "fullName",
		},
		{
			title: t("کد کاربر"),
			dataIndex: "userId",
			key: "userId",
		},
		{
			title: t("کد ملی"),
			dataIndex: "nationalCode",
			key: "nationalCode",
		},
		{
			title: t("شماره همراه"),
			dataIndex: "mobile",
			key: "mobile",
		},
		{
			title: t("نقش"),
			dataIndex: "typeName",
			key: "typeName",
		},
		// {
		// 	title: t("وضعیت حساب"),
		// 	dataIndex: "kyc",
		// 	key: "kyc",
		// 	filters: [
		// 		{
		// 			text: t("commons.accept"),
		// 			value: true,
		// 		},
		// 		{
		// 			text: t("commons.notAccept"),
		// 			value: false,
		// 		},
		// 	],
		// // 	onFilter: (value, { emailKyc, mobileKyc }) => !!(emailKyc && mobileKyc) === value,
		// // 	className: "text-center",
		// // 	width: 150,
		// // 	render: (_, { emailKyc, mobileKyc, ...other }) => (
		// // 		<Switch
		// // 			id={`kyc-${other.userId}`}
		// // 			disabled={other?.type === 2}
		// // 			checkedChildren={t("commons.accept")}
		// // 			unCheckedChildren={t("commons.notAccept")}
		// // 			loading={loading}
		// // 			defaultChecked={!!(emailKyc && mobileKyc)}
		// // 			onChange={() => handleSwitchUserAccount(other, !(emailKyc && mobileKyc))}
		// // 		/>
		// // 	),
		// },
		{
			title: t("وضعیت کاربر"),
			dataIndex: "isActive",
			key: "isActive",
			filters: [
				{
					text: t("commons.active"),
					value: true,
				},
				{
					text: t("commons.deActive"),
					value: false,
				},
			],
			onFilter: (value, { isActive }) => !!isActive === value,
			className: "text-center",
			width: 150,
			render: (_, { isActive, userId }) => (
				<Switch
					id={`status-${userId}`}
					checkedChildren={t("commons.active")}
					unCheckedChildren={t("commons.deActive")}
					loading={loading}
					defaultChecked={isActive}
					onChange={() => handleSwitchUserStatus(userId, !isActive)}
				/>
			),
		},
		{
			title: t("عملیات"),
			key: "action",
			width: 180,
			render: (_, record) => {
				return (
					<div className="flex justify-around">
						<TfiMoney
							title={t("خرید و فروش")}
							type="SwapOutlined"
							classes="icon-secondary"
							onClick={() => {
								showModal("order", record);
							}}
						/>
						<SlWallet
							title={t("واریز و برداشت")}
							type="WalletOutlined"
							classes="icon-success"
							onClick={() => {
								showModal("wallet", record);
							}}
						/>
						{/* <Icons
							title={t("اطلاعات")}
							type="InfoCircleOutlined"
							classes="icon-info mx-3"
							onClick={() => {
								showModal("info", record);
							}}
						/> */}
						<SlNote
							title={t("ویرایش")}
							type="EditOutlined"
							classes="icon-info"
							onClick={() => {
								showModal("edit", record);
							}}
						/>
						{/* <Icons
							title={t("حذف")}
							type="DeleteOutlined"
							classes="icon-delete"
							onClick={() => {
							showModal("delete", record);
							}}
						/> */}
					</div>
				);
			},
		},
	];
	// return
	return (
		<div className="app-table">
			<Tables
				dataSource={userList}
				columns={columns}
				pagination={{ pageSize: 6 }}
				scroll={{ x: "100%" }}
			/>
		</div>
	);
};

export default UserList;
