import CountUp from "react-countup";

const countUp = (value = 0, defaultSize, duration = 1) => (
	<>
		{defaultSize ? (
			<CountUp duration={duration} end={value} separator="," />
		) : (
			<small className="text-sm">
				<CountUp end={value} duration={0} separator="," />
			</small>
		)}
	</>
);

export default countUp;
