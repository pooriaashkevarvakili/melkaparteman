import { Tables } from "@/components";
import { convertDateMiladiToShamsi } from "@/utils/convertDate";
import { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { getOrderByUserId } from "../../services";
const OrderList =() => {
	const [dataSource,setDataSource]=useState([])
	const {userInfo} = useSelector((state) => state.userInfo);

	useEffect(()=>{
		if(userInfo?.userId){
			getAllOrdersByUserId(userInfo?.userId)
		}
	},[userInfo])
	
	const getAllOrdersByUserId=async (userId)=>{
		if(userId){
			const response=await getOrderByUserId(userId)
			if(Array.isArray(response)){
				setDataSource(response)
			}
		}
	}

	const columns = [
		{
			title: "نماد",
			key: "securitiesName",
			dataIndex: "securitiesName",
		},
		{
			title: "حجم معاملات",
			dataIndex: "volume",
			key: "volume",
			render:(text)=><span><CountUp end={text} duration={0.01} separator=","/></span>
		},
		{
			title: "ارزش معاملات",
			dataIndex: "value",
			key: "value",
			render:(text)=><span><CountUp end={text} duration={0.01} separator=","/></span>
		},
		{
			title:'تاریخ ثبت',
			dataIndex:"registerDate",
			key:"registerDate",
			render:(text)=><span>{`${convertDateMiladiToShamsi(text,true).Time}  ${convertDateMiladiToShamsi(text,true).Date}`}</span>
		},
		
	];

	return (
		<div style={{width:"100%"}}>
			<Tables
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
}
export default OrderList;
