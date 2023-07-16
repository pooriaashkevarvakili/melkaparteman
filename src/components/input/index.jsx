import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const Inputs = ({
	type,
	label = "",
	name = "",
	classes = "",
	extraClasses = "",
	onChange = () => {},
	value,
	required,
	pattern,
	patternMessage,
	defaultValue,
	placeholder,
	tabIndex,
	disabled,
	visibilityToggle,
	formatter,
	parser,
	size,
	min,
	max,
	maxLength,
	minLength,
	hasNotPattern,
	children,
}) => {
	const { t } = useTranslation();
	const rules = [
		{
			required: required,
			message: t("schemas.required"),
		},
		{
			pattern,
			message: patternMessage,
		},
	];
	return (
		<Form.Item
			labelCol={{ xs: 24 }}
			wrapperCol={{ xs: 24 }}
			className={extraClasses}
			label={label}
			name={name}
			initialValue={defaultValue}
			rules={rules}
		>
			<Input
				name={name}
				type={type}
				placeholder={placeholder}
				className={classes}
				onChange={onChange}
				value={value}
				defaultValue={defaultValue}
				disabled={disabled}
				min={min}
				max={max}
				maxLength={maxLength}
				minLength={minLength}
			/>
		</Form.Item>
	);
};

export default Inputs;
