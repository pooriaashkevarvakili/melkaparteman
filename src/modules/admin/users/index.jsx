import { useState, useRef, useEffect, useCallback, Fragment } from "react";
import { useTranslation } from "react-i18next";

import { notificationMaker } from "@/utils/notification";
import { getUsers, switchUserStatus, updateUser, createUser, switchUserStatusAccount } from "../services";

import { Card, Col, Row } from "antd";
import { Buttons, Cards, Loadings, Modals } from "@/components";
import { UserForm, UserFormTabs } from "@/components/app-components";
import UserList from "./components/UserList";
import UserWallet from "./components/Wallet";
import UserOrder from "./components/Order";
import styles from "./styles.module.css";
const UserManagementPage = () => {
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState({});
	const userSelected = selectedRecord?.fullName || "";
	// hooks
	const { t } = useTranslation();
	const refAddUser = useRef();
	const refEditUser = useRef();
	const refWalletUser = useRef();
	const refOrderUser = useRef();
	// fetching data
	const getUsersList = async () => {
		setLoading(true);
		const userList = await getUsers();
		setLoading(false);
		setUserList(userList);
	};
	// handles
	const handleAddUser = async (values) => {
		setLoading(true);
		const response = await createUser(values, { mobileKyc: true, emailKyc: true, documentKYC: true });
		setLoading(false);
		if (response) {
			notificationMaker(t("notification.success"), "success");
			getUsersList();
			hideModal("add");
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};
	const handleUpdateUser = useCallback(
		async (tabValues, perValues) => {
			setLoading(true);
			const response = await updateUser(tabValues, perValues);
			setLoading(false);
			if (response) {
				notificationMaker(t("notification.success"), "success");
				getUsersList();
				hideModal("edit");
			} else {
				notificationMaker(t("notification.error"), "error");
			}
		},
		[selectedRecord],
	);
	const handleSwitchUserStatus = async (userId, updateStatus) => {
		setLoading(true);
		const response = await switchUserStatus(userId, updateStatus);
		setLoading(false);
		if (response.isActive === updateStatus) {
			notificationMaker(t("notification.success"), "success");
			getUsersList();
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};
	const handleSwitchUserAccount = async (userDate, updateStatus) => {
		setLoading(true);
		const response = await switchUserStatusAccount(userDate, updateStatus);
		setLoading(false);
		if (response) {
			notificationMaker(t("notification.success"), "success");
			getUsersList();
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};
	// modals
	const showModal = (mode = "", record = {}) => {
		setSelectedRecord(record);
		switch (mode) {
			case "add":
				return refAddUser.current.showModal();
			case "edit":
				return refEditUser.current.showModal();
			case "order":
				return refOrderUser.current.showModal();
			case "wallet":
				return refWalletUser.current.showModal();
			default:
				return null;
		}
	};
	const hideModal = (mode = "") => {
		setSelectedRecord({});
		switch (mode) {
			case "add":
				return refAddUser.current.hideModal();
			case "edit":
				return refEditUser.current.hideModal();
			case "order":
				return refOrderUser.current.hideModal();
			case "wallet":
				return refWalletUser.current.hideModal();
			default:
				return null;
		}
	};
	// initialize
	useEffect(() => {
		getUsersList();
	}, []);
	// return
	return (
		<Loadings isLoading={loading}>
			<Cards title="مدیریت کاربران">
				<Card.Grid style={{ width: "100%" }}>
					<Row gutter={8} className="mt-5">
						<Col xs={{ span: 24 }} md={{ span: 12, offset: 12 }} lg={{ span: 4, offset: 20 }}>
							<Buttons onClick={() => showModal("add")}>افزودن کاربر جدید</Buttons>
						</Col>
						<Col xs={24}>
							<UserList
								{...{
									loading,
									showModal,
									userList,
									handleSwitchUserStatus,
									handleSwitchUserAccount,
									className: styles["row-color"],
								}}
							/>
						</Col>
					</Row>
				</Card.Grid>
				{/* modals */}
				<Modals title="افزودن کاربر جدید" reference={refAddUser} maskClosable={false}>
					<UserForm onFinish={handleAddUser} userData={{}} />
				</Modals>

				<Modals
					className={styles["poori"]}
					title={`ویرایش ( ${userSelected} )`}
					reference={refEditUser}
				>
					<UserFormTabs onFinish={handleUpdateUser} userData={selectedRecord} />
				</Modals>

				<Modals title={`واریز و برداشت ( ${userSelected} )`} reference={refWalletUser}>
					<UserWallet userId={selectedRecord?.userId} />
				</Modals>
				<Modals title={`خرید و فروش ( ${userSelected} )`} reference={refOrderUser}>
					<UserOrder userId={selectedRecord?.userId} />
				</Modals>
				{/* end modals */}
			</Cards>
		</Loadings>
	);
};

export default UserManagementPage;
