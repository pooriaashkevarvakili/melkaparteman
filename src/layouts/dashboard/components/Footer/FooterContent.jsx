import { getUserById, getWalletBalanceByUserId } from "@/modules/admin/services";
import { setUserInfo } from "@/store/userInfo";
import { getLoginToken } from "@/utils/authenticator";
import { toFarsiNumber } from "@/utils/convertNumber";
import { UserOutlined, WalletOutlined } from "@ant-design/icons";
import { Col, Row, Tag } from "antd";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useDispatch } from "react-redux";
import styles from "./footer.module.scss";
const FooterContent = () => {
	const [userNameAndFamily, setUserNameAndFamily] = useState("");
	const [userWalletBalance, setUserWalletBalance] = useState("");
	const token = getLoginToken();
	const decodedToken = jwt.decode(token, "app_token");
	const dispatch = useDispatch();
	const getUserData = async (userId) => {
		const userData = await getUserById(userId);
		dispatch(setUserInfo(userData));
		setUserNameAndFamily(`${userData?.firstName} ${userData?.lastName}`);
	};

	const getUserWalletBalance = async (userCode) => {
		const walletBalance = await getWalletBalanceByUserId(userCode);
		setUserWalletBalance(walletBalance?.amount ? walletBalance?.amount : 0);
	};

	useEffect(() => {

		getUserWalletBalance(decodedToken.unique_name);
		getUserData(decodedToken.unique_name);
	}, []);

	return (
		<Row className={`${styles["footer__container"]}`}>
			<Col xs={24} md={6}>
				<UserOutlined /> <span className="mx-2">{userNameAndFamily} - {toFarsiNumber(decodedToken.unique_name)}</span>
			</Col>
			<Col xs={24} md={6}>
				<WalletOutlined /> <span className="mx-2">قدرت خرید :</span>{" "}
				<Tag color="#18A979" dir="rtl">
					{userWalletBalance && <CountUp end={userWalletBalance} duration={0.01} />} ریال
				</Tag>
			</Col>
		</Row>
	);
};

export default FooterContent;
