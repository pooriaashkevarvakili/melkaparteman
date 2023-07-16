// styles component

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import useAuth from "@/hooks/useAuth";
import styles from "./styles.module.scss";
import { Col, Layout } from "antd";
import { Waiting } from "@/components";
import FooterContent from "./components/Footer/FooterContent";
import SiderContent from "./components/Sider/SiderContent";
const { Content, Footer, Sider } = Layout;
const DashboardLayout = ({ children }) => {
	// hooks
	const router = useRouter();
	const { t } = useTranslation();
	const { user, isLoading } = useAuth();

	// authentication
	if (isLoading) {
		return <Waiting />;
	}
	if (![1, 2].includes(user?.type)) {
		router.push("/");
		return <Waiting>{t("messages.noAccess")}</Waiting>;
	}

	// return
	return (
		<Layout>
			<Sider className={styles["dashboard-layout__sider-section"]}>
				<SiderContent />
			</Sider>
			<Layout style={{ backgroundColor: "#4F6883" }}>
				<Content>
					<Col span={24} className={styles["dashboard-layout__container"]}>
						{children}
					</Col>
				</Content>
				<Footer className={`${styles["footer"]}`}>
					<FooterContent />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
