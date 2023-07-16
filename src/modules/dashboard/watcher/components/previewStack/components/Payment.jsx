import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const Payments = () => {
	const formatter = (value) => <small>{value}</small>;
	return (
		<Card bordered={false} >
			<Row>
				<Col span={8}>
					<Statistic
						title={<small>بازده یک ماهه ( % )</small>}
						value={9.3}
						precision={2}
						valueStyle={{
							color: "green",
						}}
						prefix={<ArrowUpOutlined style={{ fontSize: 15 }} />}
						formatter={formatter}
					/>
				</Col>
				<Col span={8}>
					<Statistic
						title={<small>بازده سه ماهه ( % )</small>}
						value={9.3}
						precision={2}
						valueStyle={{
							color: "red",
						}}
						prefix={<ArrowDownOutlined style={{ fontSize: 15 }} />}
						formatter={formatter}
					/>
				</Col>
				<Col span={8}>
					<Statistic
						title={<small>بازده یک ساله ( % )</small>}
						value={9.3}
						precision={2}
						valueStyle={{
							color: "red",
						}}
						prefix={<ArrowDownOutlined style={{ fontSize: 15 }} />}
						formatter={formatter}
					/>
				</Col>
			</Row>
		</Card>
	);
};

export default Payments;
