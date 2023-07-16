import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Input } from "antd";
import axios from "axios";
import moment from "moment-jalaali";
import styles from "../ReportOrder/styles.module.css";

const { Search } = Input;

function TableRepotWallet() {
	const [reportwallet, setreaportwallet] = useState([]);

	useEffect(() => {
		// Fetch all wallets
		axios
			.get("https://api.maaleksho.ir/Wallet/GetAllWallet")
			.then((res) => {
				setreaportwallet(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	useEffect(() => {
		// Fetch all wallets
		axios.get('https://api.maaleksho.ir/Wallet/GetAllWallet')
			.then((res) => {
				setreaportwallet(res.data);
			})
			.catch(error => {
			});
	});

	const [search, setSearch] = useState("");
	const [loading, setloading] = useState(false);

	const handleSearch = (value) => {
		setSearch(value);
	};

	const handleLoading = () => {
		setloading(!loading);
	};
	const tableStyles = {
		color: "black",
	};

	const columns = [
		{
			title: "نام",
			dataIndex: "name",
			key: "name",
			render: (text) => <a style={tableStyles}>{text}</a>,
			width: 150,
		},
		{
			title: "کد کاربر",
			dataIndex: "usercode",
			key: "usercode",
		},
		{
			title: "تاریخ",
			dataIndex: "date",
			key: "date",
			ellipsis: true,
		},
		{
			title: "بدهکار",
			dataIndex: "debtor",
			key: "debtor",
			ellipsis: true,
			render: (text, record) => (
				<span style={record.debtor ? { color: "red" } : {}}>
					{record.debtor && record.debtor.toLocaleString()}
				</span>
			),
		},
		{
			title: "بستنکار",
			dataIndex: "Fastener",
			key: "Fastener",
			ellipsis: true,
			render: (text, record) => (
				<span style={record.Fastener ? { color: "green" } : {}}>
					{record.Fastener && record.Fastener.toLocaleString()}
				</span>
			),
		},
		{
			title: "توضیحات",
			dataIndex: "discription",
			key: "discription",
			ellipsis: true,
		},
	];

	const data = reportwallet.map((item) => {
		const jalaliDate = moment(item.registerDate, "YYYY-M-D").format("jYYYY-jM-jD");

		return {
			key: item.id,
			name: `${item.firstName} ${item.lastName}`,
			usercode: item.userCode,
			date: jalaliDate,
			debtor: item.debtor && item.debtor.toLocaleString(),
			Fastener: item.creditor && item.creditor.toLocaleString(),
			discription: item.description,
			tags: ["nice", "developer"],
		};
	});
	const filteredData = data.filter((record) =>
		record.name.toString().toLowerCase().includes(search.toLowerCase()),
	);
	const paginationOptions = {
		pageSize: 5,
	};

	return (
		<>
			<div className="search-Rtl">
				<Search
					onSearch={handleSearch}
					placeholder="نام مورد نظر را وارد کنید"
					loading={loading}
					onChange={handleLoading}
					enterButton
				/>
			</div>

			<Table
				columns={columns}
				dataSource={filteredData}
				pagination={paginationOptions}
				rowClassName={(record, index) => {
					if (index % 2 === 0) {
						return styles["even-row"];
					} else {
						return styles["odd-row"];
					}
				}}
				onRow={(record) => {
					if (record.result === "خرید") {
						return {
							className: styles["red-row"],
						};
					}
				}}
			/>
		</>
	);
}

export default TableRepotWallet;
