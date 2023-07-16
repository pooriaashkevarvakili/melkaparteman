import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const FooterContent = ({ user }) => {
	return (
		<Row justify={"space-between"} align={"middle"} className="text-right">
			<Col xs={24} md={6}>
				<UserOutlined /> <span className="mx-2">{user?.fullName || ""}</span>
			</Col>
		</Row>
	);
};

export default FooterContent;
