import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Regex from "@/utils/regex";

import { Col, Divider, Form, Row } from "antd";
import { Buttons, Calendars, Inputs, Switches, Uploads, Selects } from "@/components";
import { useCardValue } from "./helper";
import { BankCard } from "../index";

const EditableUserForm = ({ onFinish = () => {}, userData = {}, editable = true }) => {
	// hooks
	const { t } = useTranslation();
	const [form] = Form.useForm();
	// initializeValues
	useEffect(() => {
		form.setFieldsValue(userData);
	}, [userData]);
	// cardValues
	const { cardValues, setUpdate } = useCardValue(form);
	// return
	return (
		<Form
			form={form}
			name="user-info-form"
			className="user-info-form"
			layout="vertical"
			onFinish={onFinish}
		>
			<Row gutter={8}>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("شماره شناسنامه")} name="shsh" required={true} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("کد ملی")} name="nationalCode" required={true} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Calendars label={t("تاریخ تولد")} name="birthDate" required={true} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Selects
						name="type"
						label={t("نوع کاربر")}
						required={true}
						options={[
							{ id: 2, name: "ادمین" },
							{ id: 1, name: "مشتری" },
						]}
						defaultValue={1}
					/>
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Switches
						name="isActive"
						label={t("commons.status")}
						checkedChildren={t("commons.active")}
						unCheckedChildren={t("commons.deActive")}
						defaultChecked={false}
					/>
				</Col>
				<Divider>اطلاعات شخصی</Divider>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("نام")} name="firstName" required={true} onChange={setUpdate} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("نام خانوادگی")} name="lastName" required={true} onChange={setUpdate} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("نام پدر")} name="fatherName" required={true} />
				</Col>
				<Divider>اطلاعات تماس</Divider>
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
					<Inputs label={t("شماره تماس")} name="phone" required={true} />
				</Col>
				<Col xs={24} md={12} lg={8}>
					<Inputs label={t("کد پستی")} name="postalCode" required={true} />
				</Col>
				<Col xs={24} md={24} lg={16}>
					<Inputs label={t("آدرس")} name="address" required={true} />
				</Col>
				<Divider>اطلاعات حساب</Divider>
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
				<Divider>بارگزاری مدارک</Divider>
				<Col span={8}>
					<Inputs placeholder={"کد معرف"} name="affiliateCode" />
					{editable && <Buttons htmlType="submit">{t("ذخیره")}</Buttons>}
				</Col>
				<Col span={16}>
					<Uploads
						maxCount={2}
						uploadHint={t("upload.uploadHint")}
						uploadText={t("upload.nationalCard")}
					/>
				</Col>
			</Row>
		</Form>
	);
};

export default EditableUserForm;
