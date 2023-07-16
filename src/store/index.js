import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import orderReducer from './order';
import userInfoReducer from "./userInfo";
const reducer = {
	auth: authReducer,
	userInfo: userInfoReducer,
	order:orderReducer
};

const middleware = [];
if (process.env.NODE_ENV !== "production") {
	// const { logger } = require("redux-logger");
	// middleware.push(logger);
}

// *** initialize redux store
export const store = configureStore({ reducer, middleware });
