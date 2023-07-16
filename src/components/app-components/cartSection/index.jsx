import { Cards } from "@/components";
import { getAllOrder } from "@/modules/dashboard/services";
import { setUserOrderData } from "@/store/order";
import { notificationMaker } from "@/utils/notification";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import WaitingOrderCard from "../WaitingOrderCard";
import OrderCard from "../orderCard";
import styles from "./drawerProjectOperation.module.scss";
import { CardTitle } from "./helper";
const CartSection = ({
	setHaveDrawer,
	haveDrawer,
	showCardOrder,
	setShowCardOrder,
}) => {
	//Hooks ---------------------------------------------------------
	const { t } = useTranslation();
	const { userInfo } = useSelector((state) => state.userInfo);
	const {userOrderData}=useSelector((state)=>state.order)
	const dispatch=useDispatch()


	//UseEffcts -----------------------------------------------------
	useEffect(() => {
		if ((haveDrawer.flag && haveDrawer.type === "buy") || haveDrawer.type === "sell") {
			setShowCardOrder(true);
		}
	}, []);

	useEffect(() => {
		getOrdersByUserId(userInfo?.userId);
	}, []);

	//Functions ------------------------------------------------------
	const getOrdersByUserId = async (userId) => {
		const data={UserCode:userId}
		const response = await getAllOrder(data);
		if (Array.isArray(response)) {
			dispatch(setUserOrderData(response))
		} else {
			notificationMaker(t("notification.error"), "error");
		}
	};

	return (
		<div className={styles["drawerProjectOperation__container"]}>
			<Cards
				bordered={false}
				title={<CardTitle setHaveDrawer={setHaveDrawer} />}
				bodyStyle={{ padding: 0, paddingTop: 8, margin: 5 }}
				className={styles["drawerProjectOperation__card"]}
				headStyle={{ background: "#4F6883", color: "#FFFFFF", minHeight: "35px" }}
			>
				{showCardOrder && (
					<OrderCard
						setShowCardOrder={setShowCardOrder}
						haveDrawer={haveDrawer}
					/>
				)}
				{userOrderData
					?.filter((order) => order?.result === 9 && order?.orderType === 7)
					?.map((order) => {
						return <WaitingOrderCard key={order?.orderId} order={order} setShowCardOrder={setShowCardOrder}/>;
					})}
				{userOrderData
					?.filter((order) => order?.result === 9 && order?.orderType === 8)
					?.map((order) => {
						return <WaitingOrderCard key={order?.orderId} order={order} setShowCardOrder={setShowCardOrder}/>;
					})}
			</Cards>
		</div>
	);
};

export default CartSection;