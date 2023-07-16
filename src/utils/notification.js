import { notification } from "antd";
import { getFromStorage } from "./storage";

const isPersian = getFromStorage("language") !== "en";

export const notificationMaker = (message, type = "error", description, duration = 4) => {
	notification.config({
		placement: "top",
		duration,
		rtl: isPersian,
		closeIcon: false
	});
	return notification[type]({
		message,
		description,
	});
};
