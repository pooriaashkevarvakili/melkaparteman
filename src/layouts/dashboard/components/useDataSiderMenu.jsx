import {
    DiffOutlined,
    FileSyncOutlined,
    HistoryOutlined,
    LogoutOutlined
} from "@ant-design/icons";


export default function useDataSiderMenu(logoutUser){

    const MenuItemsData = [
        {
            key: "1",
            icon: <DiffOutlined />,
            label: "دیده‌بان",
            href: "/dashboard",
        },
        {
            key: "2",
            icon: <FileSyncOutlined />,
            label: "تاریخچه سفارشات",
            href: "/dashboard/orderHistory",
        },
        {
            key: "3",
            icon: <HistoryOutlined />,
            label: "گردش حساب",
            href: "/dashboard/transactions",
        },
        {
            key:'4',
            icon:<LogoutOutlined />,
            label:"خروج",
            onClick: logoutUser
        }]
    return {
        MenuItemsData,
    }
}




    // {
    //     key: "1",
    //     icon: <EyeOutlined />,
    //     label: "دیدبان",
    // },
    // {
    //     key: "5",
    //     icon: <FilterOutlined />,
    //     label: "ایزی فیلتر",
    //     href: "/dashboard/easyFilter"
    // },
    // {
    //     key: "6",
    //     icon: <LineChartOutlined />,
    //     label: "ایزی چارت",
    //     href: "/dashboard/easyChart"
    // },
    // {
    //     key: "7",
    //     icon: <CompassOutlined />,
    //     label: "سرمایه گذاری",
    // },
    // {
    //     key: "8",
    //     icon: <BarChartOutlined />,
    //     label: "نمای بازار",
    // },


// export const MenuItemsSupport = [
    // {
    //     key: "9",
    //     icon: <MonitorOutlined />,
    //     label: "جست و جو",
    // },
    // {
    //     key: "10",
    //     icon: <CommentOutlined />,
    //     label: "پشتیبانی",
    // },
    // {
    //     key: "11",
    //     icon: <MailOutlined />,
    //     label: "پیام ها",
    // },
    // {
    //     key: "12",
    //     icon: <UserOutlined />,
    //     label: "پروفایل",
    // },
//     {
//         key: "13",
//         icon: (
//             <PoweroffOutlined
//                 onClick={() => {
//                     removeLoginToken();
//                     Router.replace("/");
//                 }}
//             />
//         ),
//         label: "خروج",
//     },
// ];
