import { createUpdateOrder, getAllOrder, getOrderBySecurityId } from "@/modules/dashboard/services";
import { setLoadingSecurityOrderData, setSecurityOrderdata, setUserOrderData } from "@/store/order";
import { convertDateMiladiToShamsi } from "@/utils/convertDate";
import { notificationMaker } from "@/utils/notification";
import { DeleteOutlined } from "@ant-design/icons";
import { Row } from "antd";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import styles from "./waitingOrderCard.module.scss";
function WaitingOrderCard({ order,setShowCardOrder }) {
	//Hooks ---------------------------------------------------------
	const {
		userInfo,
	} = useSelector((state) => state.userInfo);
	const {selectedSecurity}=useSelector((state)=>state.order)
	const dispatch=useDispatch()
	const registerDate = convertDateMiladiToShamsi(order?.registerDate, true);

	//Functions -------------------------------------------------------
	const handleCancelOrderClick = async () => {
		const orderDataParams = {
			securitiesCode: order.securitiesCode,
			userCode: userInfo?.userId,
			registerDate: order.registerDate,
			volume: order.volume,
			value: order.value,
			orderType: order.orderType,
			result: 11,
		};
		const response = await createUpdateOrder(orderDataParams, order?.orderId);
		if (response.messageCode===0) {
			notificationMaker("سفارش مربوطه با موفقیت لغو شد.", "success");
			const orderByUserId=await getAllOrder({UserCode:userInfo?.userId});
			if(Array.isArray(orderByUserId) && orderByUserId[0].messageCode===0){
				dispatch(setUserOrderData(orderByUserId))
			}
			
			await getSecurityOrderData(selectedSecurity?.securitiesId)
			setShowCardOrder(false)
		}else{
			notificationMaker(response.messageCodeName, "error")
		}
	};

	const getSecurityOrderData = async (securitiesId) => {
		dispatch(setLoadingSecurityOrderData(true))
		const sell = await getOrderBySecurityId(securitiesId, 8);
		const buy = await getOrderBySecurityId(securitiesId, 7);
		dispatch(setSecurityOrderdata({ sell, buy }))
		dispatch(setLoadingSecurityOrderData(false))
	};

	return (
		<Row
			className={`${styles["waitingOrderCard__container"]} ${order?.orderType === 7 ? styles["buyContainer"] : styles["saleContainer"]
				}`}
		>
			<div
				className={styles["waitingOrderCard__header"]}
				style={
					order?.orderType === 7 ? { backgroundColor: "#18A979" } : { backgroundColor: "#D73E36" }
				}
			>
				<span>{order?.securitiesName}</span>
			</div>
			<div className={styles["waitingOrderCard__body"]}>
				<div className={styles["waitingOrderCard__body__inputFrame"]}>
					<span>تعداد: </span>
					<span>
						<CountUp end={order?.volume} duration={0.01} separator="," />
					</span>
				</div>
				<div className={styles["waitingOrderCard__body__inputFrame"]}>
					<span>قیمت: </span>
					<span>
						<CountUp end={order?.value} duration={0.01} separator="," />
					</span>
				</div>
				<div className={styles["waitingOrderCard__body__inputFrame"]}>
					<span>جمع کل: </span>
					<span>
						<CountUp end={order && order?.volume * order?.value} duration={0.01} separator="," />
					</span>
				</div>
				<div className={styles["waitingOrderCard__body__dateFrame"]}>
					<span>
						<DeleteOutlined style={{ color: "#D73E36" }} onClick={handleCancelOrderClick} />
					</span>
					<span>{`${registerDate?.Time}  ${registerDate?.Date}`}</span>
				</div>
			</div>
		</Row>
	);
}

export default WaitingOrderCard;
