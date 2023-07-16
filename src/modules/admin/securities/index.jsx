import { Buttons, Cards, Loadings, Modals } from "@/components";
import { ProjectForm } from "@/components/app-components";
import { notificationMaker } from "@/utils/notification";
import { Carousel, Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { createUpdateSecurity, getSecurities } from "../services";
import SecuritiesCards from "./components/SecuritiesList";
import SecurityDetail from "./components/SecurityDetail";
import UploadimageProject from "./components/UploadimageProject";

const Securities = () => {
	const [securitiesList, setSecuritiesList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState({});
	// hooks
	const refUpload = useRef();
	const refAdd = useRef();
	const refEdit = useRef();
	const refInfo = useRef();
	const refDescription = useRef();
	const { t } = useTranslation();
	// fetching data
	const getSecurityList = async () => {
		setLoading(true);
		const securities = await getSecurities();
		setLoading(false);
		setSecuritiesList(securities);
	};
	// handles
	const handleAddSecurity = async (values) => {
		setLoading(true);
		const response = await createUpdateSecurity(values);
		setLoading(false);
		if (response) {
			notificationMaker(t("notification.success"), "success");
			getSecurityList();
			hideModal("add");
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};
	const handleUpdateSecurity = useCallback(
		async (values) => {
			setLoading(true);
			const response = await createUpdateSecurity(values, selectedRecord.securitiesId);
			setLoading(false);
			if (response) {
				notificationMaker(t("notification.success"), "success");
				getSecurityList();
				hideModal("edit");
			} else {
				notificationMaker(t("notification.error"), "error");
			}
		},
		[selectedRecord],
	);
	// modals
	const showModal = (mode = "", record = {}) => {
		setSelectedRecord(record);
		switch (mode) {
			case "add":
				return refAdd.current.showModal();
			case "edit":
				return refEdit.current.showModal();
			case "info":
				return refInfo.current.showModal();
			case "description":
				return refDescription.current.showModal();
			case "upload":
				return refUpload.current.showModal();
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
		getSecurityList();
	}, []);
	// return
	return (
		<Loadings isLoading={loading}>
			<Cards title="مدیریت پروژه ها">
				<Row gutter={8}>
					<Col xs={{ span: 24 }} md={{ span: 12, offset: 12 }} lg={{ span: 4, offset: 20 }}>
						<Buttons onClick={() => showModal("add")}>افزودن پروژه جدید</Buttons>
					</Col>
					<Col xs={24}>
						<Carousel dotPosition="bottom" dots={{ className: "dots-color" }} easing>
							<SecuritiesCards {...{ partArray: securitiesList, showModal }} />
						</Carousel>
					</Col>
				</Row>
				{/* modals */}
				<Modals title="افزودن پروژه جدید" reference={refAdd}>
					<ProjectForm onFinish={handleAddSecurity} projectData={{}} />
				</Modals>
				<Modals title="ویرایش پروژه" reference={refEdit}>
					<ProjectForm onFinish={handleUpdateSecurity} projectData={selectedRecord} />
				</Modals>
				<Modals title="مشخصات پروژه" reference={refInfo}>
					<ProjectForm editable={false} projectData={selectedRecord} />
				</Modals>
				<Modals title="درباره پروژه" reference={refDescription}>
					<SecurityDetail projectData={selectedRecord}/>
				</Modals>
				<Modals title=" اپلود عکس" reference={refUpload}>
					<UploadimageProject />
				</Modals>
				{/* end modals */}
			</Cards>
		</Loadings>
	);
};

export default Securities;