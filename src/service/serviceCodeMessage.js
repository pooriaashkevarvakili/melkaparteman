import { notificationMaker } from "../utils/notification";

const errors = {
	UnknownError: "Unknown Error!",
	UnAuthorized: "UnAuthorized!",
	Internal: "Internal Error!",
	NotFound: "Not Found!",
	ServerError: "Server Error!",
	BadRequest: "Bad Request!",
	Forbidden: "Forbidden!",
	BadGateway: "Bad Gateway Error!",
	NetworkError: "Network Error!",
};

export const errorServiceCodeMessage = (errorCode = 0) => {
	if (errorCode >= 400 && errorCode < 600) {
		switch (errorCode) {
			case 400:
				notificationMaker(errors.BadRequest);
				break;
			case 401:
				notificationMaker(errors.UnAuthorized);
				break;
			case 403:
				notificationMaker(errors.Forbidden);
				break;
			case 404:
				notificationMaker(errors.NotFound);
				break;
			case 500:
				notificationMaker(errors.ServerError);
				break;
			default:
				notificationMaker(`Error code ${errorCode} !`);
				break;
		}
	} else {
		notificationMaker(errors.UnknownError);
	}
};
