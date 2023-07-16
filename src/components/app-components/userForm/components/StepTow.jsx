import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";

import { Inputs } from "@/components";
import { useCardValue } from "../helper";
import { BankCard } from "../..";

const StepTow = ({ formValues, form }) => {
	// hooks
	const { t } = useTranslation();
	const { cardValues, setUpdate } = useCardValue(formValues, form);
	// return
	return (
		<Row gutter={8}>
			<Col span={8}>
				<Row gutter={8}>
					<Col span={24}>
						<Inputs
							label={t("شماره شبا")}
							name="accountNumber"
							required={true}
							onChange={setUpdate}
						/>
					</Col>
					<Col span={24}>
						<Inputs
							label={t("نام بانک صادرکننده")}
							name="accountBankName"
							required={true}
							onChange={setUpdate}
						/>
					</Col>
				</Row>
			</Col>
			<Col span={16}>
				<BankCard {...cardValues} />
			</Col>
		</Row>
	);
};

export default StepTow;
