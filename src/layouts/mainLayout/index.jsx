import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

import { Waiting } from "@/components";

const MainLayout = ({ children }) => {
	// hooks
	const router = useRouter();
	const { t } = useTranslation();
	// authentication
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <Waiting />;
	}
	if ([1, 2].includes(user?.type)) {
		switch (user?.type) {
			case 2:
				router.push("/dashboard");
				break;
			default:
				router.push("/dashboard");
				break;
		}
		return <Waiting>{t("messages.noAccess")}</Waiting>;
	}
	// return
	return <>{children}</>;
};

export default MainLayout;
