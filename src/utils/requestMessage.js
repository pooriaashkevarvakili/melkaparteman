import { notificationMaker } from "./notification";

export const successRequestMessage = (successCode = 0, message = "") => {
	// we can use switch to handle global message !
	return notificationMaker(message, "success");
};

export const errorRequestMessage = (errorCode = 0, message = "") => {
	// we can use switch to handle global error message !
	return notificationMaker(message);
};
