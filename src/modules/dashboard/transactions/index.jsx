import { Col, Row } from "antd";
import TransactionsList from "./components/TransactionsList";
import styles from "./styles.module.scss";

const Transactions = () => {

	return (
		<Row className={styles["order"]}>
			<Col xs={24} md={24} lg={24} xxl={24} className={styles["order-content"]}>
				<TransactionsList />
			</Col>
			{/* <Col xs={24} md={12} lg={6} xxl={5} className={styles["order-sider"]}>
				<Form
					name="order-form"
					className="order-form"
					dir={direction}
					layout="vertical"
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
				>
					<SiderFilter />
				</Form>
			</Col>  */}
		</Row>
	);
};

// export
export default Transactions;
