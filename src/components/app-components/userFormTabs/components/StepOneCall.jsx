import { useTranslation } from "react-i18next";
import Regex from "@/utils/regex";
import { Col, Row } from "antd";
import { Inputs } from "@/components";

const StepOneCall = () => {
	// hooks
	const { t } = useTranslation();
	// return
	return (
		<Row gutter={8}>
			<Col xs={24} md={12} lg={8}>
				<Inputs
					label={t("شماره همراه")}
					name="mobile"
					required={true}
					pattern={Regex.mobileNumber}
					patternMessage={t("schemas.mobile")}
				/>
			</Col>
			<Col xs={24} md={12} lg={8}>
				<Inputs label={t("تلفن ثابت")} name="phone" required={true} />
			</Col>
			<Col xs={24} md={12} lg={8}>
				<Inputs label={t("کد پستی")} name="postalCode" required={true} />
			</Col>
			<Col xs={24} md={24} lg={16}>
				<Inputs label={t("آدرس")} name="address" required={true} />
			</Col>
		</Row>
	);
};

export default StepOneCall;
