import callApi from "@/service";
import transformers from "./transformers";

// order services
export const getAllOrder = async (data) => {
	return await callApi({ url: `Order/GetAllOrder`, params:data })
		.then((response) => transformers.ordersTransformers(response))
		.catch(() => []);
};
export const getOrderByUserId = async (userId) => {
	return await callApi({ url: `Order/GetorderByUserId`, params: { userId } })
		.then((response) => transformers.ordersTransformers(response))
		.catch((error) => error);
};
export const getOrderById = async (orderId = 0,) => {
	return await callApi({ url: `Order/GetorderByOrderId`, params: { orderId } })
		.then((response) => transformers.ordersTransformers(response))
		.catch((error) => error);
};
export const getOrderBySecurityId = async (securityId, orderType ) => {
	return await callApi({ url: `Order/GetorderBySecurityId`, params: { securityId, orderType } })
		.then((response) => response)
		.catch((error) => error);
};
export const createUpdateOrder = async (orderData = {}, orderId) => {
	const data = transformers.orderAddTransformers(orderData, orderId);
	return await callApi({ url: `Order/EditOrder`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
export const deleteOrder = async (orderId = 0) => {
	return await callApi({ url: `Order/DeleteOrder`, data: { orderId }, method: "PUT" })
		.then((response) => response)
		.catch((error) => error);
};

export const getUserById = async (userId = 0) => {
	return await callApi({ url: `/User/GetUserById`, params: { userId } })
		.then((response) => response)
		.catch((error) => error)
}
// end order services


