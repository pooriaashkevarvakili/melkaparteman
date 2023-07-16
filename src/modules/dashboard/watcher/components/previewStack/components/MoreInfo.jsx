import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";

const MoreInfo = () => {
	const formatter = (value) => (
		<small className="text-sm">
			<CountUp end={value} separator="," />
		</small>
	);
	return (
		<Card className="more-info">
			<Row justify={"space-between"} align={"middle"}>
				<Col xs={12} md={8}>
					<Statistic title="ارزش (تعداد)" value={112893} formatter={formatter} />
				</Col>
				<Col xs={12} md={8}>
					<Statistic title="زمان NAV" value={112893} formatter={formatter} />
				</Col>
				<Col xs={12} md={8}>
					<Statistic title="آخرین معامله" value={112893} formatter={formatter} />
				</Col>
				<Col xs={12} md={8}>
					<Statistic title="اولین قیمت" value={112893} formatter={formatter} />
				</Col>
				<Col xs={12} md={8}>
					<Statistic title="NAV ابطال" value={112893} formatter={formatter} />
				</Col>
				<Col xs={12} md={8}>
					<Statistic title="نوع بازار" value={112893} formatter={formatter} />
				</Col>
			</Row>
		</Card>
	);
};

export default MoreInfo;
