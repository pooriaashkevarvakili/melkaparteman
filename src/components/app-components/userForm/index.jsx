import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Steps } from "antd";

import StepOnePersonal from "./components/StepOnePersonal";
import StepOneCall from "./components/StepOneCall";
import StepTow from "./components/StepTow";
import StepThree from "./components/StepThree";
import MobileKyc from "./components/MobileKyc";

const UserForm = ({ onFinish = () => {}, registerMode = false, userData = {} }) => {
	const [formValues, setFormValues] = useState({});
	const [kycRejected, setKycReject] = useState(registerMode);
	// hooks
	const [form] = Form.useForm();
	// steps
	const [current, setCurrent] = useState(0);
	const next = (values, perValues) => {
		setFormValues(Object.assign({}, perValues, values));
		setCurrent(current + 1);
	};
	const prev = (perValues) => {
		form.setFieldsValue(perValues);
		setCurrent(current - 1);
	};
	const steps = [
		registerMode && {
			title: "تایید شماره همراه",
			content: <MobileKyc {...{ userData, kycRejected, setKycReject }} />,
		},
		{
			title: "اطلاعات شخصی",
			content: <StepOnePersonal {...{ registerMode }} />,
		},
		{
			title: "اطلاعات تماس",
			content: <StepOneCall {...{ registerMode }} />,
		},
		{
			title: "اطلاعات حساب",
			content: <StepTow {...{ formValues, form }} />,
		},
		{
			title: "بارگزاری مدارک",
			content: <StepThree />,
		},
	].filter(Boolean);
	// init form
	const items = steps.map(({ title }) => ({
		key: title,
		title,
	}));
	useEffect(() => {
		form.setFieldsValue(userData);
	}, [userData, form]);
	// return
	return (
		<Form
			form={form}
			name="user-info-form"
			className="user-info-form"
			layout="vertical"
			onFinish={(values) => next(values, formValues)}
		>
			<Row gutter={[32, 32]}>
				<Col span={24}>
					<Steps current={current} items={items} />
				</Col>
				<Col span={24}>
					<div className="user-form__layout">{steps[current].content}</div>
				</Col>
				<Col span={24} className="my-3">
					<div>
						{current < steps.length - 1 && (
							<Button type="primary" htmlType="submit" disabled={kycRejected}>
								ذخیره و ادامه
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button type="primary" onClick={() => onFinish(formValues)}>
								ذخیره اطلاعات
							</Button>
						)}
						{current > 0 && (
							<Button className="mx-3" onClick={() => prev(formValues)}>
								قبلی
							</Button>
						)}
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default UserForm;
