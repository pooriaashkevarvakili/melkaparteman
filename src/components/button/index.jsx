import styles from "./styles.module.scss";
import { Button, Form } from "antd";

const Buttons = ({
	onClick = () => {},
	loading = false,
	disabled = false,
	children,
	type = "primary",
	htmlType = "button",
	classes = "",
	flavor = "",
}) => {
	// return
	return (
		<Form.Item>
			<Button
				loading={loading}
				type={type}
				htmlType={htmlType}
				onClick={onClick}
				disabled={disabled}
				className={`${styles["btn-public"]}  ${flavor ? styles[`btn-${flavor}`] : ""} ${classes}`}
			>
				{children}
			</Button>
		</Form.Item>
	);
};

export default Buttons;
