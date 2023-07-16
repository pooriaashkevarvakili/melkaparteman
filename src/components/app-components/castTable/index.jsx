import { Cards, countUp } from "@/components";
import { Col, Divider, Row, Tag } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

const CastTable = () => {
	//States -------------------------------------------------------------
	const [volume, setVolume] = useState({ sellVolume: 0, buyVolume: 0 });
	const {securityOrderdata}=useSelector((state)=>state.order);

	// components
	const FirstRowSection = ({ ...item }) => (
		<div
			className="flex justify-between align-middle my-2 bg-red cursor-pointer px-2"
		>
			<span>{countUp(item.count)}</span>
			<span>{countUp(item.volume)}</span>
			<span>{countUp(item.value)}</span>
		</div>
	);
	
	const SecondRowSection = ({ ...item }) => (
		<div
			className="flex justify-between align-middle my-2 bg-green cursor-pointer px-2"
		>
			<span>{countUp(item.value)}</span>
			<span>{countUp(item.volume)}</span>
			<span>{countUp(item.count)}</span>
		</div>
	);
	

	//UseEffects ------------------------------------------------------
	useEffect(() => {
		const buyVolume = (securityOrderdata.buy || []).reduce(
			(accumulator, current) => accumulator + current?.volume,
			0,
		);
		const sellVolume = (securityOrderdata.sell || []).reduce(
			(accumulator, current) => accumulator + current?.volume,
			0,
		);
		setVolume({ buyVolume, sellVolume });
	}, [securityOrderdata]);

	
	return (
		<Cards
			title={
				<Row className="app-table" gutter={[16, 16]}>
					<Col xs={24} md={12}>
						<div className="flex justify-between align-middle">
							<span>تعداد</span>
							<span>حجم</span>
							<span>قیمت</span>
						</div>
					</Col>
					<Col xs={24} md={12}>
						<div className="flex justify-between align-middle">
							<span>قیمت</span>
							<span>حجم</span>
							<span>تعداد</span>
						</div>
					</Col>
				</Row>
			}
			headStyle={{ padding: "10px" }}
			bodyStyle={{ background: "#F8F8F9", padding: "10px" }}
			style={{ with: "100%" }}
		>
			<Row gutter={[16, 16]} className="app-table">
				<Col xs={24} md={12}>
					{securityOrderdata?.buy?.slice(0, 5).map((item, idx) => (
						<FirstRowSection key={idx} {...item} />
					))}
				</Col>
				<Col xs={24} md={12} style={{ borderRight: "1px dashed grey" }}>
					{securityOrderdata?.sell?.slice(0, 5).map((item, idx) => (
						<SecondRowSection key={idx} {...item} />
					))}
				</Col>
				<Divider plain orientation="left" style={{ margin: "0px" }}>
					کل
				</Divider>
				<Col xs={24} md={24}>
					<div className="flex justify-between align-middle">
						<span>
							<span>تعداد: </span>
							<Tag icon={""} color="#333333">
								{securityOrderdata?.buy?.length > 0 && (
									<CountUp end={securityOrderdata?.buy?.length} separator="," duration={0.1} />
								)}
							</Tag>{" "}
							<span>حجم: </span>
							<Tag icon={""} color="#18a979">
								{volume?.buyVolume > 0 && (
									<CountUp end={volume?.buyVolume} separator="," duration={0.1} />
								)}
							</Tag>{" "}
						</span>
						<span>
							<span>تعداد: </span>
							<Tag icon={""} color="#333333">
								{securityOrderdata?.sell?.length > 0 && (
									<CountUp end={securityOrderdata?.sell?.length} separator="," duration={0.1} />
								)}
							</Tag>{" "}
							<span>حجم: </span>
							<Tag icon={""} color="#D73E36">
								{volume?.sellVolume > 0 && (
									<CountUp end={volume?.sellVolume} separator="," duration={0.1} />
								)}
							</Tag>{" "}
						</span>
					</div>
				</Col>
			</Row>
		</Cards>
	);
};
export default CastTable;