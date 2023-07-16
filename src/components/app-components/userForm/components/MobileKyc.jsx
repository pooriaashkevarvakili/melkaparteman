import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Col, Form, Row, Statistic } from "antd";

import { uIdMaker } from "@/utils/jsHandlers";
import { notificationMaker } from "@/utils/notification";

import { getKycMobile } from "@/modules/main/services";
import { Buttons, Inputs } from "@/components";

const MobileKyc = ({ userData, setKycReject, kycRejected }) => {
	const [disableBtn, setDisableBtn] = useState(false);
	const [kycKey, setKycKey] = useState("");
	// hooks
	const { t } = useTranslation();
	const [formKyc] = Form.useForm();
	// handles
	const sendAgain = async (mobile) => {
		setDisableBtn(true);
		const key = uIdMaker(4);
		setKycKey(key);
		mobile && (await getKycMobile(mobile, key));
	};
	const onFinish = (kycKey) => {
		const { mobileKycCode } = formKyc.getFieldsValue();
		if (mobileKycCode === kycKey) {
			setKycReject(false);
		} else {
			notificationMaker(t("کد را به درستی وارد نمایید"), "error");
		}
	};
	// return
	return (
		<Form form={formKyc} name="mobile-kyc-form" className="mobile-info-form" layout="vertical">
			<Row gutter={[32, 32]}>
				{kycRejected ? (
					<>
						<Col xs={24} lg={10}>
							<Inputs
								label={t("کد تایید")}
								name="mobileKycCode"
								required={true}
								placeholder={`کد تایید به شماره همراه ${
									userData.mobile || ""
								} ارسال می شود .`}
							/>
						</Col>
						<Col xs={24} lg={6}>
							{disableBtn ? (
								<Statistic.Countdown
									title="تا ارسال مجدد"
									value={Date.now() + 120 * 1000}
									onChange={(number) => number < 10 && setDisableBtn(false)}
								/>
							) : (
								<Buttons
									type="primary"
									classes="mt-8"
									onClick={() => sendAgain(userData.mobile)}
								>
									ارسال کد
								</Buttons>
							)}
						</Col>
						<Col xs={24} lg={8}>
							{kycKey && (
								<Buttons
									type="ghost"
									flavor="success"
									classes="mt-8"
									onClick={() => onFinish(kycKey)}
								>
									بررسی کد
								</Buttons>
							)}
						</Col>
					</>
				) : (
					<Col xs={24}>
						<Alert
							message="کد به درستی تایید شد . برای ادامه مراحل روی ذخیره و ادامه کلید کنید ."
							showIcon
							type="success"
						/>
					</Col>
				)}
			</Row>
		</Form>
	);
};

export default MobileKyc;
