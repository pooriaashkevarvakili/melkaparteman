import { useTranslation } from "react-i18next";
import { InputType, Inputs } from "@/components";
import Regex from "@/utils/regex";

const MobileBox = ({ isSelected }) => {
	const { t } = useTranslation();
	return (
		<>
			{isSelected && (
				<>
					<Inputs
						label={t("login.mobile")}
						name="mobile"
						required={true}
						pattern={Regex.mobileNumber}
						patternMessage={t("schemas.mobile")}
					/>
					<InputType type="password" label={t("login.password")} name="password" required={true} />
				</>
			)}
		</>
	);
};

export default MobileBox;
