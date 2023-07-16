import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import InputType from "@/components/separatorsInput/index";
import { Col, Form, Row } from "antd";
import { Buttons, Selects, submitModals } from "@/components";


const inputOptions = {
	type: "number",
	required: true,
	size: "middle",
	min: 0,
	style: {
		width: "100%",
	},
};

const options = {
	7: {
		// type: 1,
		okType: "dashed",
		title: "آیا از خرید خود اطمینان دارید ؟",
		btnLabel: "خرید",
	},
	8: {
		// type: 0,
		okType: "danger",
		title: "آیا از فروش خود اطمینان دارید ؟",
		btnLabel: "فروش",
	},
};

const AmountForm = ({ onFinish, projects = [], type }) => {
	// hooks
	const [form] = Form.useForm();
	const { t } = useTranslation();
	// handles
	const formatter = ({ volume, value }) => {
		return (
			<div className="pt-3">
				تعداد :
				<span className="text-xl mx-2">
					<CountUp end={Number(volume || 0)} separator="," />
				</span>
				<br />
				قیمت :
				<span className="text-xl mx-2">
					<CountUp end={Number(value || 0)} separator="," />
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
					{ ...options[type], content: formatter(values) },
					async () => await onFinish(values, type, form),
				)
			}
		>
			<Row gutter={[8, 8]}>
				<Col xs={24} lg={12}>
					<Selects
						name="securitiesCode"
						label={t("انتخاب پروژه")}
						required={true}
						options={projects}
					/>
				</Col>
				<Col xs={24} lg={12}></Col>
				<Col xs={24} lg={12}>
					<InputType label={t("تعداد")} name="volume" {...inputOptions} />
				</Col>
				<Col xs={24} lg={12}>
					<InputType label={t("قیمت")} name="value" {...inputOptions} />
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
