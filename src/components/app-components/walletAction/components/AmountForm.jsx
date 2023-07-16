import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

import { Col, Form, Row } from "antd";
import { Buttons, submitModals } from "@/components";
import Inputs from "@/components/separatorsInput/index"

const options = {
	13: {
		// type: 1,
		okType: "dashed",
		title: "آیا از مبلغ واریز اطمینان دارید ؟",
		btnLabel: "واریز",
	},
	12: {
		// type: 0,
		okType: "danger",
		title: "آیا از مبلغ برداشت اطمینان دارید ؟",
		btnLabel: "برداشت",
	},
};

const AmountForm = ({ onFinish, type }) => {
	// hooks
	const [form] = Form.useForm();
	const { t } = useTranslation();


	// const numberWithCommas = (x) => {
	// 	x = x.toString();
	// 	var pattern = /(-?\d+)(\d{3})/;
	// 	while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
	// 	return x;
	//   };

	// handles
	const formatter = () => {
		const amount = form.getFieldValue("amount");
		return (
			<div className="pt-3">
				<span className="text-xl">
					<CountUp end={Number(amount || 0)} separator="," />
				</span>
				<small> ریال</small>
			</div>
		);
	};
	// return
	return (
		<Form
			form={form}
			name={`amount-${type}`}
			className="amount-form"
			layout="vertical"
			onFinish={(values) =>
				submitModals(
					{ ...options[type], content: formatter() },
					async () => await onFinish(values, type, form),
				)
			}
		>
			<Row gutter={[16, 16]}>
				<Col xs={24} md={8} lg={12}>
					<Inputs label={t("مبلغ به ریال")} name="amount" required={true} />
				</Col>
				<Col xs={24} md={10} lg={12}>
					{/* <Inputs label={t("توضیحات")} name="description" required={true} /> */}
				</Col>
				<Col xs={24} md={6} lg={4}>
					<Buttons htmlType="submit" classes={"mt-5"}>
						{options[type].btnLabel}
					</Buttons>
				</Col>
			</Row>
		</Form>
	);
};

export default AmountForm;
