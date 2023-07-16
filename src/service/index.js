import axios from "axios";
import { getLoginToken } from "@/utils/authenticator";

const callApi = async ({
	url = "",
	method = "GET",
	data = {},
	params = {},
	contentType = 'application/json; charset=utf-8',// "application/json",
	responseType = "json",
}) => {
	// config api headers
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
	axios.defaults.headers.common['Access-Control-Allow-Headers'] = "*";
	axios.defaults.headers.common["Accept"] = "application/json";
	// baseURL
	const baseURL = process.env.REACT_APP_BACKEND_SERVER
	// create axiosInstance
	const axiosInstance = axios.create({});
	// set request configs
	const token = getLoginToken() || ""
	axiosInstance.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			let customConfig = Object.assign({}, config, {
				contentType,
				responseType,
				withCredentials: false, // send token with credentials
			});
			// return
			return customConfig;
		},
		(err) => {
			throw err;
		},
	);
	//  set response configs
	axiosInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		(err) => {
			if (err?.response?.status) {
				// errorServiceCodeMessage(err?.response?.status);
			}
			return err;
		},
	);
	// return
	// eslint-disable-next-line no-undef
	return new Promise((resolve, reject) => {
		axiosInstance({ baseURL, url, method, params, data })
			.then((res) => {
				resolve(res?.data);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

export default callApi;
