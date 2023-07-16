import React from 'react'
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, } from "antd";
import { useCardValue } from "../bank";
import StepOnePersonal from "../../components/StepOnePersonal";
import StepOneCall from "../../components/StepOneCall";
import StepTow from "../../components/StepTow";
import StepThree from "../../components/StepThree";
function TabsOne({ onFinish = () => { }, registerMode = false, userData = {} }) {
	const [formValues, setFormValues] = useState({});
	// hooks
	const [form] = Form.useForm();
	const { cardValues, setUpdate } = useCardValue(formValues, form);
	// steps
	const [current, setCurrent] = useState(0);
	
	const prev = (perValues) => {
		form.setFieldsValue(perValues);
		setCurrent(current - 1);
	};

	const steps = [
		{
			title: "اطلاعات شخصی",
			content: <StepOnePersonal registerMode={registerMode} />,
		},
		{
			title: "اطلاعات تماس",
			content: <StepOneCall {...{ setUpdate }} />,
		},
		{
			title: "اطلاعات حساب",
			content: <StepTow {...{ cardValues, setUpdate }} />,
		},
		{
			title: "بارگزاری مدارک",
			content: <StepThree />,
		},
	];
	const items = steps.map(({ title }) => ({
		key: title,
		title,
	}));
	// init form
	
	return (
		
			<Row gutter={[32, 32]}>

				<Col span={24}>
					<div className="user-form__layout">{steps[current].content}</div>
				</Col>
				<Col span={24} className="my-3">
					<div>
						{/* {current < steps.length - 1 && (
							<Button type="primary" htmlType="submit">
								ذخیره و ادامه
							</Button>
						// )} */}
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
	
	)
}

export default TabsOne