import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Form } from "antd";

const WalletForm = ({ onFinish = () => {}, projectData = {}, editable = true }) => {
	// hooks
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// initializeValues
	useEffect(() => {
		form.setFieldsValue(projectData);
	}, [projectData]);
	return (
		<Form
			form={form}
			name="wallet-form"
			className="wallet-form"
			layout="vertical"
			onFinish={onFinish}
		></Form>
	);
};

export default WalletForm;
