import { Buttons, Inputs } from "@/components";
import { ActiveSms, SendSmsPremium } from "@/modules/main/services";
import { notificationMaker } from "@/utils/notification";
import { Alert, Col, Form, Row, Statistic } from "antd";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const MobileKyc = ({ userData, kycRejected, current, setCurrent, setKycReject }) => {
	const [disableBtn, setDisableBtn] = useState(false);
	const [kycKey, setKycKey] = useState("");
	const { t } = useTranslation();
	const [formKyc] = Form.useForm();
	// ok
	const sendCode = async (mobile) => {
		const response = await SendSmsPremium(mobile);
		if (response === "0") {
			setDisableBtn(true);
			notificationMaker(t("کدفرستاده شد "), "success");
		} else {
			notificationMaker(t("کد  اشتباه  است"), "error");
		}
	};
	// checkCode
	const checkCode = useCallback(
		async (mobile) => {
			const response = await ActiveSms(kycKey, mobile);
			if (response === "-1") {
				notificationMaker(t("کد تایید درست است"), "success");
				setCurrent(current + 1);
				setDisableBtn(false);
				setKycReject(false);
			} else {
				notificationMaker(t("کد  اشتباه  است"), "error");
			}
		},
		[current, kycKey],
	);
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
								maxLength={4}
								placeholder={`کد تایید به شماره همراه ${userData.mobile || ""
									} ارسال می شود .`}


								onChange={(e) => setKycKey(e.target.value)}
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
									onClick={() => sendCode(userData.mobile)}
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
									onClick={() => checkCode(userData.mobile)}
								>
									بررسی کد
								</Buttons>
							)}
						</Col>
					</>
				) : (
					<Col xs={24}>
						<Alert message="کد به درستی تایید شد." showIcon type="success" />
					</Col>
				)}
			</Row>
		</Form>
	);
};

export default MobileKyc;
