import { Buttons, Cards } from "@/components";
import { Badge, Col, Row } from "antd";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import styles from "./previewStack.module.scss";

const PreviewStack = ({ setHaveDrawer, setShowCardOrder }) => {
	//Hooks -------------------------------------------------------------
	const {selectedSecurity}=useSelector((state)=>state.order);

	const {
		name,
		companyName,
		lastPrice,
	} = selectedSecurity;
	
	
	return (
		<>
			<Row gutter={[8, 8]} className={styles["previewStack__container"]}>
				<Col xs={24} md={24}>
					<Badge.Ribbon text={<strong>{companyName}</strong>} color="#18A979">
						<Cards
							title={<small>{name}</small>}
							size="small"
							bodyStyle={{ background: "#F8F8F9", padding: "15px" }}
						>
							<div className={styles["projectOperaion__CountUpContainer"]}>
								<span className="text-xl" style={{ color: "black" }}>
									<CountUp end={lastPrice} duration={0.01} separator="," />
								</span>
							</div>
						</Cards>
					</Badge.Ribbon>
				</Col>
			</Row>

			<Row gutter={[8, 8]} style={{ marginTop: "10px" }}>
				<Col xs={24} md={12}>
					<Buttons
						onClick={() => {
							setHaveDrawer({
								flag: true,
								type: "buy",
							});
							setShowCardOrder(true);
						}}
						shape={"round"}
						classes={styles["projectOperaion__buy"]}
					>
						خرید
					</Buttons>
				</Col>

				<Col xs={24} md={12}>
					<Buttons
						onClick={() => {
							setHaveDrawer({
								flag: true,
								type: "sale",
							});
							setShowCardOrder(true);
						}}
						classes={styles["projectOperaion__sale"]}
					>
						فروش
					</Buttons>
				</Col>
			</Row>
		</>
	);
};

export default PreviewStack;
