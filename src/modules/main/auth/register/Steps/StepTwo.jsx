import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Inputs } from "@/components";
import BankCard from "./BankCard";
import Regex from "@/utils/regex";
import { useState } from "react";

const StepTow = ({ setUpdate, cardValues }) => {
	// hooks
	const { t } = useTranslation();
	const [state, setState] = useState("IR");
	const [nameBank, setNameBank] = useState();
	// return
	return (
		<Row gutter={8}>
			<Col span={8}>
				<Row gutter={8}>
					<Col span={24}>
						<div className="shomare-shaba">
							<Inputs
								pattern={Regex.night}
								patternMessage={t("schemas.night")}
								placeholder="شماره شبا"
								label={t("شماره شبا")}
								name="accountNumber"
								required={true}
								onChange={(e) => setState(e.target.value)}
								value={state}
							/>
						</div>
					</Col>
					{/* {state} */}
					<Col span={24}>
						<Inputs
							pattern={Regex.address}
							patternMessage={t("schemas.address")}
							placeholder="نام بانک "
							label={t("نام بانک صادرکننده")}
							name="accountBankName"
							required={true}
							value={nameBank}
							onChange={(e) => setNameBank(e.target.value)}
						/>
					</Col>
				</Row>
			</Col>
			<Col span={16}>
				<BankCard state={state} nameBank={nameBank} />
			</Col>
		</Row>
	);
};

export default StepTow;
