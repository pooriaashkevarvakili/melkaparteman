import { Suspense, useCallback, useContext, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import InputPassword from "@/components/inputPassword";

import { notificationMaker } from "@/utils/notification";
import Regex from "@/utils/regex";

import AppContext from "@/context";
import { registerEditLogin } from "../../services";

import { Card, Form } from "antd";
import { Buttons, Inputs, Modals } from "@/components";

import styles from "../helper/styles.module.scss";
import UserForm from "./UserForm";
import { bgStyle } from "../helper";
import { fundingGetLogin } from "../register/services";
const RegisterPage = () => {
	const [accountInfo, setAccountInfo] = useState({});
	const [loading, setLoading] = useState(false);
	// hooks
	const [password, setPassword] = useState();
	const [passwordRepeat, setPasswordRepeat] = useState();
	const handlePassword = (e) => {
		setPassword(e.target.value);

	};
	const passwordsMatch = password === passwordRepeat;

	const handleRepeatPassword = (e) => {
		setPasswordRepeat(e.target.value);
	};

	const [alllogin, setAllLogin] = useState("");
	const router = useRouter();
	const refAddUser = useRef();
	const { t } = useTranslation();
	const { direction } = useContext(AppContext);
	// handles
	const handleUploadAdded = useCallback(
		async (values) => {
			setLoading(true);
			const response = await registerEditLogin(values, accountInfo);
			if (response) {
				return response?.userId;
			} else {
				setLoading(false);
				notificationMaker(t("notification.error"), "error");
			}
		},
		[accountInfo],
	);
	// handles
	const handleOnFinishAdded = () => {
		router.push("/");
		notificationMaker(t("notification.success"), "success");
		notificationMaker(t("register.email"), "success", t("register.emailDes"), 15);
	};

	// modals
	const showModal = async (values = {}) => {
		// eslint-disable-next-line no-undef
		const [mobileIsExist, emailIsExist] = await Promise.all(
			await fundingGetLogin({ Mobile: values.mobile }),
			await fundingGetLogin({ Email: values.email }),
		);
		if (mobileIsExist || emailIsExist) {

			notificationMaker(t("messages.userExistDes"), "error", t("messages.userExist"));
		} else {
			setAccountInfo(values);
			return refAddUser.current.showModal();
		}
	};

	// return
	return (
		<Suspense>
			<div className=" h-screen flex items-center justify-center  bg-slate-500 2xl:hidden xl:hidden lg:hidden ">
				<div className="border border-1 border-red-300  p-16 text-white rounded-3xl">
					لطفا از دسکتاپ استفاده کنید
				</div>
			</div>
			<div className="hidden 2xl:block xl:block lg:block md:block">
				<div className=" w-full  ">
					<div className="w-8/12 h-12 ">
						<div className="relative top-20 right-12  text-2xl text-white">
							<div className="text-center 2xl:block xl:block lg:block md:hidden">
								ورود به سامانه
							</div>
							<div className="text-center 2xl:block xl:block lg:block md:hidden">
								نکات امنیتی
							</div>
							<div className=" text-center 2xl:block xl:block lg:block md:hidden">
								<a href="https://maaleksho.ir">https://maaleksho.ir</a>
							</div>
						</div>
						<div className="2xl:w-full xl:w-full" style={bgStyle}>
							<img
								style={{ height: "900px" }}
								className="2xl:w-full 2xl:block xl:block lg:block md:hidden xl:w-full w-full -mt-24  "
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
							<h2 className="text-xl pt-3">{t("register.accountInfo")}</h2>
						</center>
					}
				>
					<Form
						name="sign-in-form"
						className="sign-in-form"
						dir={direction}
						layout="vertical"
						onFinish={(values) => showModal(values)}
					>
						<Inputs
							label={t("شماره همراه")}
							name="mobile"
							required={true}
							pattern={Regex.mobileNumber}
							patternMessage={t("schemas.mobile")}
						/>
						<Inputs
							patternMessage={t("schemas.email")}
							pattern={Regex.email}
							label={t("login.email")}
							name="email"
						/>
						<InputPassword
							type="password"
							label={t("login.password")}
							name="password"
							required={true}
							patternMessage={t("schemas.Password")}
							pattern={Regex.password}
						/>
						<InputPassword
							type="password"
							label={t("login.Repeatpassword")}
							value={passwordRepeat}
							onChange={handleRepeatPassword}
							name="passwordRepeat"
							required={true}
							pattern={Regex.Password}
							patternMessage={t("schemas.Password")}
						/>
						<br />

						{!passwordsMatch && <div>password do not match</div>}
						<Buttons htmlType="submit" classes={"mt-3"} loading={loading}>
							{t("register.register")}
						</Buttons>
						<p className="font-semibold text-muted">
							حساب کاربری دارید ؟
							<Link href="/" className="text-dark font-bold mx-2">
								( وارد شوید )
							</Link>
						</p>
					</Form>
				</Card>
			</div>

			<Modals title="فرم ثبت نام" maskClosable={false} reference={refAddUser}>
				<UserForm
					onFinish={handleOnFinishAdded}
					onUpload={handleUploadAdded}
					registerMode
					userData={accountInfo}
				/>
			</Modals>
		</Suspense>
	);
};

export default RegisterPage;
