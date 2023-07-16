import Link from "next/link";
import { useTranslation } from "react-i18next";
import { notificationMaker } from "@/utils/notification";
import { getUserIdFromToken, storeLoginToken } from "@/utils/authenticator";
import { InfoCircleOutlined } from "@ant-design/icons";

import AppContext from "@/context";
import { authenticate } from "../../services";

import styles from "../helper/styles.module.scss";
import { bgStyle, rules } from "../helper";
import { getUserById } from "@/modules/admin/services";

import { Suspense, useContext, useState } from "react";
import { Buttons } from "@/components";
import TabsMenu from "@/components/tabs";
import { Card, Checkbox, Form } from "antd";
import { useRouter } from "next/router";
import EmailBox from "./components/EmailBox";
import MobileBox from "./components/MobileBox";
const LoginPage = () => {
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState("mobile");
	// hooks
	const router = useRouter();
	const { t } = useTranslation();
	const { direction } = useContext(AppContext);
	// handles
	const onFinishLogin = async (values) => {
		setLoading(true);
		const response = await authenticate(values);
		if (response?.token) {
			storeLoginToken(response.token);
			const userId = getUserIdFromToken(response.token);
			const user = await getUserById(userId);
			router.replace(user?.type === 1 ? "/dashboard" : "/admin");
			notificationMaker(t("notification.success"), "success", "", 1);
		} else {
			setLoading(false);
			notificationMaker(t("notification.error"), "error");
		}
	};
	// options
	const tabs = [
		{
			key: "mobile",
			title: t("login.mobile"),
			content: <MobileBox isSelected={selected === "mobile"} />,
		},
		{
			key: "email",
			title: t("login.email"),
			content: <EmailBox isSelected={selected === "email"} />,
		},
	];
	// return
	return (
		<Suspense>
			<div className=" h-screen flex items-center justify-center  bg-slate-500 2xl:hidden xl:hidden lg:hidden ">
				<div className="border border-1 border-red-300  p-16 text-white rounded-3xl">
					لطفا از دسکتاپ استفاده کنید
				</div>
			</div>
			<div className="hidden  md:block 2xl:block xl:block lg:block">
				<div className="w-full  ">
					<div className="w-8/12 h-12 ">
						<div className="relative top-20 right-12  text-2xl text-white">
							<div className="text-center 2xl:block xl:block lg:block md:hidden">
								ورود به سامانه
							</div>
							<div className="text-center 2xl:block  xl:block lg:block md:hidden">
								نکات امنیتی
							</div>
							<div className=" text-center 2xl:block md:hidden xl:block lg:block ">
								<a href="https://maaleksho.ir">https://maaleksho.ir</a>
							</div>
						</div>
						<div className="2xl:w-full xl:w-full" style={bgStyle}>
							<img
								style={{ height: "900px" }}
								className="2xl:w-full -mt-24 2xl:block xl:block 2xl:block lg:block md:hidden xl:w-full w-full   "
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="relative 2xl:top-64 xl:top-64 lg:top-64 2xl:right-64 xl:right-60 md:top-72  md:right-96 lg:right-56    hidden md:block 2xl:block xl:block lg:block">
				<Card
					className={styles["card-sign-up"]}
					title={
						<center>
							<h2 className="text-xl">{t("login.loginForm")}</h2>
						</center>
					}
				>
					<Form
						name="sign-in-form"
						className="sign-in-form"
						dir={direction}
						layout="vertical"
						onFinish={onFinishLogin}
						initialValues={{ exist: true }}
					>
						<TabsMenu tabs={tabs} onChange={(key) => setSelected(key)} />
						<Form.Item name="exist" valuePropName="checked">
							<Checkbox>{t("login.remember")}</Checkbox>
						</Form.Item>
						<Buttons htmlType="submit" classes={"w-100"} loading={loading}>
							{t("login.login")}
						</Buttons>
						<Buttons type="dashed" classes={"w-100"}>
							<Link href="/auth/register">{t("login.signUp")}</Link>
						</Buttons>
					</Form>
				</Card>
			</div>
		</Suspense>
	);
};

export default LoginPage;
