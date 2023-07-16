import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { notificationMaker } from "@/utils/notification";
import { createWallet, getUserWalletById } from "../../services";

import { WalletActions } from "@/components/app-components";

const UserWallet = ({ userId }) => {
	const [walletHistory, setWalletHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	// hooks
	const { t } = useTranslation();
	// fetching data
	const getWalletList = async () => {
		setLoading(true);
		const allWallets = await getUserWalletById(userId);
		setLoading(false);
		setWalletHistory(allWallets);
	};
	// handles
	const onFinishAction = useCallback(
		async (values, type, formActions) => {
			setLoading(true);
			const response = await createWallet(values, type, userId);
			setLoading(false);
			if (response) {
				notificationMaker(t("notification.success"), "success");
				formActions.resetFields();
				getWalletList(userId);
			} else {
				notificationMaker(t("notification.error"), "error");
			}
		},
		[userId],
	);
	// initialize data
	useEffect(() => {
		getWalletList(userId);
	}, [userId]);
	// return
	return (
		<>
			<WalletActions {...{ onFinishAction, walletHistory, loading }} />
		</>
	);
};

export default UserWallet;
