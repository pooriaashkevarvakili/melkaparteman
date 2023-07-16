import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Inputs } from "@/components";
import { BankCard } from "../../index";

const StepTow = ({ setUpdate, cardValues }) => {
	// hooks
	const { t } = useTranslation();
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
