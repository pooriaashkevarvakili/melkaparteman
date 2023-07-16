import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	securityOrderdata: [],
    loadingSecurityOrderData:false,
    userOrderData:[],
    loadingUserOrderData:false,
    selectedSecurity:{}
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setSecurityOrderdata: (state, action) => {
			state.securityOrderdata = action.payload;
		},
        setLoadingSecurityOrderData:(state,action)=>{
            state.loadingSecurityOrderData=action.payload
        },
        setUserOrderData:(state,action)=>{
            state.userOrderData=action.payload
        },
        setLoadingUserOrderData:(state,action)=>{
            state.loadingUserOrderData=action.payload
        },
        setSelectedSecurity:(state,action)=>{
            state.selectedSecurity=action.payload
        }
	},
});

export const { setSecurityOrderdata,
                setLoadingSecurityOrderData,
                setUserOrderData,
                setLoadingUserOrderData,
                setSelectedSecurity
            } = orderSlice.actions;

export default orderSlice.reducer;
