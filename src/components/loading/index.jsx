import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loadings = ({ children, isLoading }) => {
	const { t } = useTranslation();
	// antIcon
	const antIcon = <LoadingOutlined className="text-3xl spin-loading" spin={true} />;
	// return
	return (
		<Spin spinning={isLoading} indicator={antIcon} tip={t("messages.loading")} size="large" >
			{children}
		</Spin>
	);
};

export default Loadings;
