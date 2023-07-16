import callApi from "@/service";
import transformers from "./transformers";

import { createUser } from "@/modules/admin/services";

// auth services
export const fundingGetLogin = async (params={}) => {
	return await callApi({ url: `Login/GetAllLogin`,params })
		.then((response) => response)
		.catch(() => []);
};
export const registerEditLogin = async (userData = {}, accountInfo = {}) => {
	// createUser
	const user = await createUser({ ...userData, mobile: accountInfo.mobile, type: 1, isActive: true }, {});
	if (user?.userId) {
		const data = transformers.loginEditTransformers({ ...userData, ...accountInfo }, user.userId);
		// createAccount
		return await callApi({ url: `Login/EditLogin`, data, method: "POST" })
			.then(async (response) => {
				await getKycEmail(response?.userCode, response.email);
				return !!response && user;
			})
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
	};
	return await callApi({ url: `Login/Authenticate`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};

export const SendSmsPremium = async (Phone, Type = 1) => {
	return await callApi({ url: `Sms/SendSmsPremium`, params: { Phone, Type }, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
export const getKycEmail = async (userCode = 0, Email = "") => {
	return await callApi({
		url: `Login/LoginKycEmail`,
		data: { userCode, Email },
		method: "POST",
	})
		.then((response) => response)
		.catch((error) => error);
};
export const checkKycEmail = async (email, token) => {
	return await callApi({ url: `User/ConfirmEmail`, params: { email, token }, method: "GET" })
		.then((response) => response)
		.catch((error) => error);
};
// end auth services
export const ActiveSms = async (CodeSms = 1234, phoneNumber) => {
	return await callApi({
		url: `Sms/VerifyUserCode?CodeSMS=${CodeSms}&phoneNumber=${phoneNumber}`,
		method: "GET",
	})
		.then((response) => response)
		.catch((error) => error);
};
