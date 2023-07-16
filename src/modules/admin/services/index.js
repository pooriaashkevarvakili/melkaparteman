import callApi from "@/service";
import transformers from "./transformers";

// user services
export const getUsers = async (query = {}) => {
	return await callApi({ url: `User/GetAllUser`, params: query })
		.then((response) => transformers.usersTransformers(response))
		.catch(() => []);
}

export const getUserById = async (userId) => {
	return await callApi({ url: `User/GetUserById`, params: { userId } })
		.then((response) => transformers.usersTransformers([response])?.[0] || {})
		.catch((error) => error);
}

export const getWalletBalanceByUserId = async (userCode = 0) => {
	return await callApi({ url: `/Wallet/GetWalletBalanceByUserId`, params: { userCode } })
		.then((response) => response)
		.catch((error) => error)
}

export const switchUserStatus = async (userId, status = false) => {
	return await callApi({ url: `User/SetActivationUser`, params: { userId, status } })
		.then((response) => response)
		.catch((error) => error);
};
export const switchUserStatusAccount = async (userData = {}, updatedStatus) => {
	const data = transformers.userSwitchTransformers(userData, updatedStatus);
	return await callApi({ url: `User/Edituser`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
export const createUser = async (userData = {}, kycStatus = {}) => {
	const data = transformers.userAddTransformers(userData, kycStatus);
	return await callApi({ url: `User/Edituser`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
export const updateUser = async (tabValues = {}, perUserData = {}) => {
	const data = transformers.userEditTransformers({ ...perUserData, ...tabValues });
	return await callApi({ url: `User/Edituser`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
// end user services

// securities services
export const getSecurities = async (query = {}) => {
	return await callApi({ url: `Security/GetAllSecurities`, params: query })
		.then((response) => transformers.securitiesTransformers(response))
		.catch((error) => error);
};
export const getSecurityById = async (securityId) => {
	return await callApi({ url: `Security/getsecuritiesbyid`, params: { securityId } })
		.then((response) => response)
		.catch((error) => error);
};
export const createUpdateSecurity = async (securityData = {}, securitiesId = 0) => {
	const data = transformers.securitiesAddTransformers(securityData, securitiesId);
	return await callApi({ url: `Security/EditSecurity`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
// end securities services

// Wallet services
export const getWallet = async () => {
	return await callApi({ url: `Wallet/GetAllWallet` })
		.then((response) => transformers.walletsTransformers(response))
		.catch((error) => error);
};
export const getWalletById = async (walletId) => {
	return await callApi({ url: `Wallet/GetWalletById`, params: { walletId } })
		.then((response) => response)
		.catch((error) => error);
};
export const createWallet = async (values, type, userId) => {
	const data = transformers.walletAddTransformers(values, type, userId);
	return await callApi({ url: `Wallet/EditWallet`, params: data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};
export const getUserWalletById = async (userId) => {
	return await callApi({ url: `Wallet/GetWalletByUserId`, params: { userId } })
		.then((response) => transformers.walletsTransformers(response))
		.catch((error) => error);
};

export const postSaveFileByFolderFileName=async (folderName,fileName)=>{
	const data={folderName:folderName,fileName:fileName }
	return await callApi({url:'File/SaveFileByFolderFileName',data, method:"POST" })
		.then((response)=>response).catch((error)=>error)
}
// end Wallet services
