import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "antd";

import { TabsMenu, Loadings } from "@/components";

import StepOnePersonal from "./components/StepOnePersonal";
import StepOneCall from "./components/StepOneCall";
import StepTow from "./components/StepTow";
import StepThree from "./components/StepThree";

const UserFormTabs = ({ onFinish = () => { }, userData = {} }) => {
	const [formValues, setFormValues] = useState({});
	const [loading, setLoading] = useState(true);
	// hooks
	const [form] = Form.useForm();
	// steps
	const next = (values = {}, perValues = {}) => {
		setFormValues(Object.assign({}, perValues, values));
	};
	// options
	const tabs = [
		{
			title: "اطلاعات شخصی",
			content: <StepOnePersonal />,
		},
		{
			title: "اطلاعات تماس",
			content: <StepOneCall />,
		},
		{
			title: "اطلاعات حساب",
			content: <StepTow {...{ form, formValues }} />,
		},
		{
			title: "بارگزاری مدارک",
			content: <StepThree userId={userData?.userId} />,
		},
	];
	// init
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			setFormValues(userData);
			form.setFieldsValue(userData);
		}, 1000);
	}, [userData, form]);
	// return
	return (
		<Form
			form={form}
			name="user-info-form"
			layout="vertical"
			onFinish={(values) => onFinish(values, formValues)}
		>
			<Row gutter={[32, 32]}>
				<Col span={24}>
					<Loadings isLoading={loading}>
						<TabsMenu tabs={tabs} onChange={() => next(form.getFieldsValue(), formValues)} />
					</Loadings>
				</Col>
				<Col span={24} className="mb-2">
					<Button type="primary" htmlType="submit">
						ذخیره اطلاعات
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default UserFormTabs;
