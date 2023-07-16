import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import { SettingOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row, theme } from "antd";

import AppContext from "@/context";
import useAuth from "@/hooks/useAuth";

import { Drawers, Waiting } from "@/components";
import { SettingDrawer } from "@/components/app-components";
import FooterContent from "./components/FooterContent";
import { MenuItems, MenuItemsSupport } from "./components/MenuItems";

// layoutModules
const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
	const [open, setOpen] = useState(false);
	// hooks
	const router = useRouter();
	const { t } = useTranslation();
	// theme
	const { token } = theme.useToken();
	const {
		language,
		placement,
		direction,
		changeLanguage,
		themeMode,
		changeTheme,
		fontMode,
		changeFontMode,
		tokens,
		selectedToken,
		changeTokenMode,
	} = useContext(AppContext);
	// handles
	const onCloseDrawer = () => {
		setOpen(false);
	};
	// authentication
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <Waiting />;
	}
	if (user?.type !== 2) {
		switch (user?.type) {
			case 1:
				router.push("/dashboard");
				break;
			default:
				router.push("/admin/securities");
				break;
		}
		return <Waiting>{t("messages.noAccess")}</Waiting>;
	}
	// return
	return (
		<Layout className="dashboard-layout" dir={direction} hasSider>
			<Sider collapsed={true} theme={themeMode} collapsedWidth={60}>
				<section className={styles["dashboard-layout__menus"]}>
					<div className="section_one">

						<Menu key="defaults" theme={themeMode} direction={direction} mode="inline">
							<div className="flex items-center justify-center">
								<img src="/img/logo.jpg" width={30} height={30} alt="logo" className="mt-4" />
							</div>
							{MenuItems.map(({ key, icon, label, href }) => (
								<Menu.Item key={key} icon={icon}>
									<Link href={href}>{label}</Link>
								</Menu.Item>
							))}
						</Menu>
					</div>
					<div className={styles["section_tow"]}>
						<Menu
							key="supports"
							theme={themeMode}
							direction={direction}
							mode="inline"
							items={MenuItemsSupport}
						/>
					</div>
				</section>
			</Sider>
			<Layout className="dashboard-layout__main" dir={direction}>
				<Header style={{ background: token.colorPrimaryLight, height: 50 }}>
					<Row justify="space-between">
						<Col></Col>
						<Col className="gutter-row">
							<SettingOutlined
								className="text-xl"
								onClick={() => setOpen((perValue) => !perValue)}
							/>
							<Drawers
								title={t("layouts.drawerTitle")}
								open={open}
								onClose={onCloseDrawer}
								placement={placement}
								content={
									<SettingDrawer
										{...{
											language,
											changeLanguage,
											themeMode,
											changeTheme,
											fontMode,
											changeFontMode,
											tokens,
											changeTokenMode,
											selectedToken,
										}}
									/>
								}
							/>
						</Col>
					</Row>
				</Header>
				<Content
					className={styles["dashboard-layout__content"]}
					style={{ background: token?.colorPrimaryLighter }}
				>
					{children}
				</Content>
				<Footer className={`${styles["dashboard-layout__footer"]}`}>
					<FooterContent user={user} />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
