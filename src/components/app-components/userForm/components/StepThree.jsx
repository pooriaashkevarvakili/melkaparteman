import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Uploads } from "@/components";

const StepThree = () => {
	// hooks
	const { t } = useTranslation();
	// return
	return (
		<Row gutter={8}>
			<Col span={24}>
				<Uploads
					maxCount={2}
					uploadHint={t("upload.uploadHint")}
					uploadText={t("upload.nationalCard")}
				/>
			</Col>
		</Row>
	);
};

export default StepThree;
