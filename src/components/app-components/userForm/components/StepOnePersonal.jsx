import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Calendars, Inputs, Switches, Selects } from "@/components";

const StepOnePersonal = ({ setUpdate, registerMode }) => {
	// hooks
	const { t } = useTranslation();
	// return
	return (
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
				<Inputs label={t("نام")} name="firstName" required={true} onChange={setUpdate} />
			</Col>
			<Col xs={24} md={12} lg={8}>
				<Inputs label={t("نام خانوادگی")} name="lastName" required={true} onChange={setUpdate} />
			</Col>
			<Col xs={24} md={12} lg={8}>
				<Inputs label={t("نام پدر")} name="fatherName" required={true} />
			</Col>
			<Col xs={24} md={12} lg={8}>
				<Inputs label={"کد معرف"} name="affiliateCode" />
			</Col>
			{!registerMode && (
				<>
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
							defaultChecked={true}
						/>
					</Col>
				</>
			)}
		</Row>
	);
};

export default StepOnePersonal;
