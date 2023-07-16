import AppContext from "@/context";
import { Col, Row } from "antd";
import { useContext } from "react";
import OrderList from "./components/OrderList";
import styles from "./styles.module.scss";

const OrderHistory = () => {
	const { direction } = useContext(AppContext);
	return (
		<Row className={styles["orderHistory"]}>
			<Col xs={24} md={24} lg={24} xxl={24} style={{ backgroundColor: "#E3E8F1", borderRadius: "5px" }}>
				<Row></Row>
				<Row style={{width:'100%'}}>
					<OrderList />
				</Row>
			</Col>
		</Row>
			// {/* <Col xs={24} md={12} lg={6} xxl={5} className={styles["order-sider"]}>
			// 	<Form
			// 		name="order-form"
			// 		className="order-form"
			// 		dir={direction}
			// 		layout="vertical"
			// 		// onFinish={onFinish}
			// 		// onFinishFailed={onFinishFailed}
			// 	>
			// 		<SiderFilter />
			// 	</Form>
			// </Col> */}
	);
};

// export
export default OrderHistory;
