import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: undefined,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = undefined;
		},
	},
});

export const { updateUser, clearUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
