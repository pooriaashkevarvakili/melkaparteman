import { Tables } from "@/components";
import { getUserWalletById } from "@/modules/admin/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Transactions = () => {
	const [dataSource,setDataSource]=useState([]);
	const {userInfo} = useSelector((state) => state.userInfo);

	useEffect(()=>{
		if(userInfo?.userId){
			getAllTransactionsBuUserId(userInfo?.userId)
		}
	},[userInfo])

	const getAllTransactionsBuUserId=async(userId)=>{
		if(userId){
			const response=await getUserWalletById(userId)
			if(Array.isArray(response)){
				setDataSource(response)
			}
		}
	}
	const columns = [
		{
			title: "بدهکار",
			key: "debtor",
			dataIndex: "debtor",
			render:(text)=><span>{text}</span>
		},
		{
			title:"بستانکار",
			dataIndex: "creditor",
			key: "creditor",
			render:(text)=><span>{text}</span>

		},
		{
			title: "شرح",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "ارزش",
			dataIndex: "amount",
			key: "amount",
			render:(text)=><span>{text}</span>
		},
		{
			title:'تاریخ ثبت',
			dataIndex:'registerDate',
			key:'registerDate',
		}
	];

	return (
		<div style={{width:'100%'}}>
			<Tables
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
};
export default Transactions;
