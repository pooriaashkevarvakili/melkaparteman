import { Tabs } from "antd";
import { Icons, Loadings } from "@/components";
import HistoryList from "./components/HistoryList";
import AmountForm from "./components/AmountForm";

const OrderActions = ({ onFinishAction = () => { }, orderHistory = [], projects = [], loading = false }) => {
	// items
	const tabItems = [
		{
			label: (
				<>
					<Icons type="HistoryOutlined" classes="icon-secondary" /> تاریخچه
				</>
			),
			key: 1,
			children: <HistoryList orderHistory={orderHistory} projects={projects} />,
		},
		{
			label: (
				<>
					<Icons type="SwapRightOutlined" classes="icon-success" /> خرید
				</>
			),
			key: 2,
			forceRender: true,
			children: (
				<>
					<AmountForm onFinish={onFinishAction} projects={projects} type={7} />
				</>
			),
		},

		{
			label: (
				<>
					<Icons type="SwapLeftOutlined" classes="icon-delete" /> فروش
				</>
			),
			key: 3,
			forceRender: true,
			children: (
				<>
					{/* <WalletStatus /> */}
					<AmountForm onFinish={onFinishAction} projects={projects} type={8} />
				</>
			),
		},
	];
	// return
	return (
		<Loadings isLoading={loading}>
			<Tabs type="line" tabPosition={"left"} defaultActiveKey="1" items={tabItems} />
		</Loadings>
	);
};

export default OrderActions;
