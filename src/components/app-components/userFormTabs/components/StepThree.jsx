import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Switches, UploadCards } from "@/components";

const StepThree = ({ userId }) => {
	// hooks
	const { t } = useTranslation();
	// return
	return (
		<Row gutter={8} justify={"space-between"} align={"middle"} className="px-20">
			<Col>
				<UploadCards userId={userId} />
			</Col>
			<Col>
				<Switches
					name="documentKYC"
					label={t("users.status")}
					checkedChildren={t("commons.accept")}
					unCheckedChildren={t("commons.notAccept")}
					defaultChecked={false}
				/>
			</Col>
		</Row>
	);
};

export default StepThree;
