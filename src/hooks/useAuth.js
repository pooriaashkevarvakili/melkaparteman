import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/auth";
import { getUserIdFromToken } from "@/utils/authenticator";
import { getUserById } from "@/modules/admin/services";

const defaultState = {
	user: {
		id: 0,
		isAdmin: undefined,
		name: "",
		token: "",
	},
	error: undefined,
	isLoading: true,
};

const useAuth = () => {
	const [user, setUser] = useState(defaultState);
	// hooks
	const dispatch = useDispatch();
	// handles
	const initUser = async () => {
		const userId = getUserIdFromToken();
		if (userId) {
			const userData = await getUserById(userId)
			const user = {
				user: userData,
				error: undefined,
				isLoading: false,
			};
			// dispatch user to state
			setUser(user);
			dispatch(updateUser(user));
		} else {
			setUser({
				user: {
					id: 0,
					isAdmin: undefined,
					name: "",
				},
				error: undefined,
				isLoading: false,
			});
		}
	}
	// fetching
	useEffect(() => {
		initUser()
	}, []);
	// return data
	return user;
};

export default useAuth;
