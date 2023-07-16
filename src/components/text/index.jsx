import { Typography } from "antd";

const { Title, Text } = Typography;

const Texts = ({ children, type = "title", ...props }) => {
	return (
		<>
			{type === "title" ? (
				<Title {...props}> {children}</Title>
			) : type === "text" ? (
				<Text {...props}>{children}</Text>
			) : (
				""
			)}
		</>
	);
};

export default Texts;
