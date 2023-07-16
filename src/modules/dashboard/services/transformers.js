
const transformers = {
	ordersTransformers: (data) => {
		if (Array.isArray(data)) {
			return data
		} else {
			return [];
		}
	},
	orderAddTransformers: (orderData, orderId = 0) => {
		return {
			...orderData,
			orderId: orderId
		};
	},
};

export default transformers;
