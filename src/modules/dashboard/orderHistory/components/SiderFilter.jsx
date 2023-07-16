import { Buttons, CalenderDateRange, Selects } from "@/components";
import { Col, Row } from "antd";

const SiderFilter = () => {
	return (
		<Row gutter={4}>
			<Col xs={24} md={18}>
				<Selects name="symbol" label={"نماد :"} required={true} />
			</Col>
			<Col xs={24} md={6} className="pt-8">
				<Buttons>فیلتر</Buttons>
			</Col>
			<Col xs={24} md={12}>
				<Selects name="order" label={"سمت سفارش :"} required={true} />
			</Col>
			<Col xs={24} md={12}>
				<Selects name="status" label={"وضعیت :"} required={true} />
			</Col>
			<Col xs={24} md={24}>
				<CalenderDateRange />
			</Col>
		</Row>
	);
};

export default SiderFilter;
