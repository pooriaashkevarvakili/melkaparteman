import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

export { storeLoginToken, removeLoginToken, getLoginToken, getUserIdFromToken };

// ***
const storeLoginToken = (token) => {
	let cookie = new Cookies();
	return cookie.set("app_token", token, {
		path: "/",
		maxAge: 24 * 24 * 3600,
	});
};

// ***
const removeLoginToken = () => {
	let cookie = new Cookies();
	return cookie.remove('app_token');
};

// ***
const getLoginToken = () => {
	let cookie = new Cookies();
	return cookie.get("app_token");
};

// ***
const getUserIdFromToken = (loginToken) => {
	let userId = null
	try {
		let cookie = new Cookies();
		let token = cookie.get("app_token");
		let decodeToken = jwtDecode(loginToken || token)
		userId = Number(decodeToken?.unique_name)
	} catch (e) {
		userId = null
	}
	return userId
};
