import { Tabs } from "antd";

const { TabPane } = Tabs;

const TabsMenu = ({ tabs = [], defaultActiveKey = [], onChange = () => {}, classes = "" }) => {
	return (
		<Tabs defaultActiveKey={defaultActiveKey} onChange={onChange} className={classes}>
			{tabs.map((item) => {
				return (
					<TabPane tab={item.title} key={item.key || item.title}>
						<div className="tab-pan-layout">{item.content}</div>
					</TabPane>
				);
			})}
		</Tabs>
	);
};

export default TabsMenu;
