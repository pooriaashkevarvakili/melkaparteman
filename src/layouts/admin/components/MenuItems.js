import Router from "next/router";
import { removeLoginToken } from "@/utils/authenticator";

import { SlWallet } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";


import {
	DashboardOutlined,
	DiffOutlined,
	PoweroffOutlined,
	UsergroupAddOutlined,
} from "@ant-design/icons";

export const MenuItems = [
	// {
	//     key: "1",
	//     icon: <DashboardOutlined />,
	//     label: "داشبورد",
	//     href: "/admin",
	// },
	{
		key: "2",
		icon: <PiProjectorScreenChartLight />,
		label: "مدیریت پروژه ها",
		href: "/admin",
	},
	{
		key: "3",
		icon: <UsergroupAddOutlined />,
		label: "مدیریت کاربران",
		href: "/admin/users",
	},
	{
		key: "4",
		icon: <SlWallet />,
		label: "گزارش گردش حساب",
		href: "/admin/reportwallet",
	},
	{
		key: "5",
		icon: <SlBasketLoaded />,
		label: "تاریخچه سفارشات",
		href: "/admin/reportorder",
	},
	// {
	//     key: "4",
	//     icon: <WalletOutlined />,
	//     label: "مدیریت ولت ها",
	//     href: "/admin/wallet"
	// },
	// {
	//     key: "4",
	//     icon: <FileSyncOutlined />,
	//     label: "تاریخچه سفارشات",
	// },
];
export const MenuItemsSupport = [
	// {
	//     key: "9",
	//     icon: <MailOutlined />,
	//     label: "پیام ها",
	// },
	// {
	//     key: "10",
	//     icon: <UserOutlined />,
	//     label: "پروفایل",
	// },
	{
		key: "11",
		icon: (
			<PoweroffOutlined
				onClick={() => {
					removeLoginToken();
					Router.replace("/");
				}}
			/>
		),
		label: "خروج",
	},
];