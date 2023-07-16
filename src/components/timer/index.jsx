import { FieldTimeOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Timer = () => {
	const [currentTime, setCurrentTime] = useState("");
	// handles
	const setTimer = () => {
		var date = new Date();
		var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		setCurrentTime(current_time);
	};
	// looper
	useEffect(() => {
		var timer = setInterval(() => setTimer(), 1000);
		return () => clearInterval(timer);
	}, []);
	// return
	return (
		<div className="flex justify-between align-middle">
			<div style={{ minWidth: "80px" }}>{currentTime}</div> <FieldTimeOutlined className="pb-1" />
		</div>
	);
};
export default Timer;
