import { useTranslation } from "react-i18next";
import { InputType, Inputs } from "@/components";

const EmailBox = ({ isSelected }) => {
	const { t } = useTranslation();
	return (
		<>
			{isSelected && (
				<>
					<Inputs label={t("login.email")} name="email" required={true} />
					<InputType type="password" label={t("login.password")} name="password" required={true} />
				</>
			)}
		</>
	);
};

export default EmailBox;
