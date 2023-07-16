import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { notificationMaker } from "@/utils/notification";
import { createWallet, deleteSecurity, getWallet } from "../services";

import { Col, Row } from "antd";
import { WalletCard, WalletForm } from "@/components/app-components";
import { Buttons, Cards, Loadings, Modals, submitModals } from "@/components";

const WalletPage = () => {
	const [walletList, setWalletList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState({});
	// hooks
	const refAdd = useRef();
	const refEdit = useRef();
	const { t } = useTranslation();
	// fetching data
	const getWalletList = async () => {
		setLoading(true);
		const wallets = await getWallet();
		setLoading(false);
		setWalletList(wallets);
	};
	// handles
	const handleAddWallet = async (values) => {
		setLoading(true);
		const response = await createWallet(values);
		setLoading(false);
		if (response) {
			notificationMaker(t("notification.success"), "success");
			getWalletList();
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};
	// modals
	const showModal = (mode = "", record = {}) => {
		setSelectedRecord(record);
		switch (mode) {
			case "add":
				return refAdd.current.showModal();
			case "edit":
				return refEdit.current.showModal();
			case "delete":
				return submitModals(
					{
						okType: "danger",
						title: t("messages.delete", { name: record?.name }),
						content: t("messages.deleteDes", { name: "پروژه" }),
					},
					() => deleteSecurity(record?.securitiesId),
				);
			default:
				return null;
		}
	};
	const hideModal = (mode = "") => {
		setSelectedRecord({});
		switch (mode) {
			case "add":
				return refAdd.current.hideModal();
			case "edit":
				return refEdit.current.hideModal();
			default:
				return null;
		}
	};
	// initialize
	useEffect(() => {
		getWalletList();
	}, []);
	// return
	return (
		<Loadings isLoading={loading}>
			<Cards title="مدیریت ولت ها">
				<Row gutter={[8, 8]}>
					<Col xs={{ span: 12, offset: 12 }} md={{ span: 4, offset: 20 }}>
						<Buttons onClick={() => showModal("add")}>افزودن ولت جدید</Buttons>
					</Col>
					<Col xs={24}>
						<Row gutter={[16, 16]}>
							{walletList.map((wallet) => (
								<Col xs={24} md={12} lg={8} key={wallet.walletId}>
									<WalletCard {...wallet} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
				{/* modals */}
				<Modals title="افزودن ولت جدید" reference={refAdd}>
					<WalletForm onFinish={handleAddWallet} />
				</Modals>
				{/* end modals */}
			</Cards>
		</Loadings>
	);
};

export default WalletPage;
