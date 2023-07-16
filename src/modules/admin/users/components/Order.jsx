import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { notificationMaker } from "@/utils/notification";

import { OrderActions } from "@/components/app-components";
import { getOrderByUserId, createUpdateOrder } from "@/modules/dashboard/services";
import { getSecurities } from "../../services";
// import { errorServiceCodeMessage } from "@/service/serviceCodeMessage";

const UserOrder = ({ userId }) => {
	const [securitiesList, setSecuritiesList] = useState([]);
	const [orderHistory, setOrderHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	// hooks
	const { t } = useTranslation();
	// fetching data
	const getOrderList = async (userId) => {
		setLoading(true);
		const orders = await getOrderByUserId(userId);
		setLoading(false);
		setOrderHistory(orders);
	};
	const getSecurityList = async () => {
		setLoading(true);
		const securities = await getSecurities();
		setLoading(false);
		if (Array.isArray(securities)) {
			setSecuritiesList(securities.map(({ securitiesId: id, name }) => ({ id, name })));
		}
	};
	// handles
	const onFinishAction = useCallback(
		async (values, orderType, formActions) => {
			setLoading(true);
			const params = {
				...values,
				orderType,
				userCode: userId,
			};
			const response = await createUpdateOrder(params);
			setLoading(false);
			if (response) {
				// errorServiceCodeMessage(response.messageCode)
				if (response.messageCode === 14) return notificationMaker(t("notification.notEnough"), "error");
				notificationMaker(t("notification.success"), "success");
				formActions.resetFields();
				getOrderList(userId);
			} else {
				notificationMaker(t("notification.error"), "error");
			}
		},
		[userId],
	);
	// initialize data
	useEffect(() => {
		getSecurityList();
		getOrderList(userId);
	}, [userId]);
	// return
	return (
		<>
			<OrderActions {...{ onFinishAction, orderHistory, projects: securitiesList, loading }} />
		</>
	);
};

export default UserOrder;
