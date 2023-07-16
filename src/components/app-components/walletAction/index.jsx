import { Tabs } from "antd";
import { Icons, Loadings } from "@/components";
import HistoryList from "./components/HistoryList";
import AmountForm from "./components/AmountForm";

const WalletActions = ({ onFinishAction = () => {}, walletHistory = [], loading = false }) => {
	// items
	const tabItems = [
		{
			label: (
				<>
					<Icons type="HistoryOutlined" classes="icon-secondary" /> تاریخچه
				</>
			),
			key: 1,
			children: <HistoryList walletHistory={walletHistory} />,
		},
		{
			label: (
				<>
					<Icons type="SwapRightOutlined" classes="icon-success" /> واریز
				</>
			),
			key: 2,
			forceRender: true,
			children: (
				<>
					{/* <WalletStatus /> */}
					<AmountForm onFinish={onFinishAction} type={13} />
				</>
			),
		},
		{
			label: (
				<>
					<Icons type="SwapLeftOutlined" classes="icon-delete" /> برداشت
				</>
			),
			key: 3,
			forceRender: true,
			children: (
				<>
					{/* <WalletStatus /> */}
					<AmountForm onFinish={onFinishAction} type={12} />
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

export default WalletActions;
