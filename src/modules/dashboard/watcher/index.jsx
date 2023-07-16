import { CartSection } from "@/components/app-components";
import { setLoadingSecurityOrderData, setSecurityOrderdata } from "@/store/order";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderBySecurityId } from "../services";
import Projects from "./components/Projects";
import WatchPreviewStack from "./components/previewStack";
import styles from "./styles.module.scss";


const DashboardPage = () => {
	//Hooks --------------------------------------------------------
	const dispatch=useDispatch();

	
	//States -------------------------------------------------------
	const [haveDrawer, setHaveDrawer] = useState({
		flag: false,
		type:''
	});
	const [showCardOrder,setShowCardOrder]=useState(false);
	const {selectedSecurity}=useSelector((state)=>state.order)
	
	
	//Functions ----------------------------------------------------
	const getSecurityOrderData = async (securitiesId) => {
		dispatch(setLoadingSecurityOrderData(true))
		const sell = await getOrderBySecurityId(securitiesId, 8);
		const buy = await getOrderBySecurityId(securitiesId, 7);
		dispatch(setSecurityOrderdata({ sell, buy }))
		dispatch(setLoadingSecurityOrderData(false))
	};

	//UseEffects ---------------------------------------------------
	useEffect(() => {
		getSecurityOrderData(selectedSecurity?.securitiesId);
	}, [selectedSecurity]);

	return (
		<Row  className={styles["projectList"]} >
			<Col xs={24} lg={haveDrawer.flag?18:24} style={{backgroundColor:"#E3E8F1", borderRadius:'5px'}}>
				<Row>
					<Col xs={24} lg={haveDrawer.flag?14:16} className={styles["projectList__projects"]}>
						<Projects />
					</Col>
					<Col xs={24} lg={haveDrawer.flag?10:8} className={styles["projectList__projectOperations"]}>
						<WatchPreviewStack {...{ setHaveDrawer, setShowCardOrder}} />
					</Col>
				</Row>
			</Col>
			{haveDrawer.flag && (
				<Col xs={24} lg={6} className={styles["watcher-sider"]}>
					<CartSection
						{...{
							setHaveDrawer,
							haveDrawer,
							showCardOrder,
							setShowCardOrder,
						}}
					/>
				</Col>
			)}
		</Row>
	);
};

export default DashboardPage;