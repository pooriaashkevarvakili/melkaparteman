import callApi from "@/service";
import transformers from "./transformers";

import { createUpdateUser } from "@/modules/admin/services";

// login services
export const fundingGetLogin = async (params={}) => {
	return await callApi({ url: `Login/GetAllLogin`,params })
		.then((response) => response)
		.catch(() => []);
};
export const registerEditLogin = async (userData = {}, accountInfo = {}) => {
	// createUser
	const response = await createUpdateUser({ ...userData, type: 1, isActive: true });
	if (response?.userId) {
		// createAccount
		const data = transformers.loginEditTransformers({ ...userData, ...accountInfo }, response.userId)
		return await callApi({ url: `Login/EditLogin`, data, method: "POST" })
			.then((response) => response)
			.catch((error) => error);
	} else {
		return false;
	}
};
export const authenticate = async (userData = {}) => {
	const data = {
		mobile: userData.mobile || "",
		email: userData.email || "",
		password: userData.password,
	}
	return await callApi({ url: `Login/Authenticate`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
// end login services
