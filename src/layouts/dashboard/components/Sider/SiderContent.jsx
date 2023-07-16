import { removeLoginToken } from "@/utils/authenticator";
import { Row } from "antd";
import { useRouter } from "next/router";
import useDataSiderMenu from "../useDataSiderMenu";
import SiderMenuItems from "./SiderMenuItems";
import styles from "./sider.module.scss";

export default function SiderContent() {
	const router = useRouter();
	const logoutUser = () => {
		removeLoginToken();
		router.push("/");
	};

	const { MenuItemsData } = useDataSiderMenu(logoutUser);
	return (
		<div className={styles["sider"]}>
			<Row>
				<div className={styles["sider__logo"]}>
					<img src="/img/logo.jpg" style={{width:"100%", height:"100%"}} alt="logo"  />
				</div>
				<div className={styles["sider__menu"]}>
					{MenuItemsData.map((item) => (
						<SiderMenuItems item={item} key={item.key} />
					))}
				</div>
			</Row>
		</div>
	);
}
