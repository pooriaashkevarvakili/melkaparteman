import { Loadings, Modals, Tables } from "@/components";
import { getSecurities } from "@/modules/admin/services";
import { setSelectedSecurity } from "@/store/order";
import { Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectFile from "./projectFiles/projectFile";
import styles from './projects.module.scss';

const Projects = () => {
	//Hooks ---------------------------------------------------------
	const showDetailRef=useRef()
	const dispatch=useDispatch();
	const {selectedSecurity}=useSelector((state)=>state.order)

	
	//States --------------------------------------------------------
	const [loadingSecurities, setLoadingSecurities] = useState(false);
	const [securitiesList,setSecuritiesList]=useState()

	const columns = [
		{
			title: "ردیف",
			key: "row",
			dataIndex: "row",
		},
		{
			title: "نماد",
			key: "name",
			dataIndex: "name",

		},
		{
			title: "شرکت ارایه دهنده",
			dataIndex: "companyName",
			key: "companyName",
		},
		{
			title:"قیمت",
			dataIndex:"lastPrice",
			key:"lastPrice"
		},
		{
			title:"عملیات",
			key: "action",
			render:(_,record)=>{
				return <Tag style={{backgroundColor:'#97C5E9'}} onClick={()=>handleClickShowDetailBtn(record)}>نمایش جزئیات</Tag>
			}
		}
	];

	//UseEffects --------------------------------------------------------
	useEffect(() => {
		getSecurityList();
	}, []);


	//Functions----------------------------------------------------------
	const getSecurityList = async () => {
		setLoadingSecurities(true);
		const securities = await getSecurities();
		setLoadingSecurities(false);
		if (Array.isArray(securities)) {
			setSecuritiesList(securities)
			dispatch(setSelectedSecurity(securities[0]))
		}
	};
	
	const handleClickShowDetailBtn=(record)=>{
		console.log(record)
		showDetailRef.current.showModal()
	}

	const handleRowClassName=(record)=>{
		if(record?.securitiesId===selectedSecurity?.securitiesId){
			return styles["selected-row"]
		}
		return ''
	}
	
	return (
		<div className={styles["projects__projectsContainer"]}>
			<Modals reference={showDetailRef} title="نمایش جزئیات پروژه" maskClosable={false} >
				<ProjectFile/>
			</Modals>
			<Loadings isLoading={loadingSecurities}>
				<Tables
					dataSource={securitiesList}
					columns={columns}
					onRow={(record) => {				
						return {
							onClick: () => {
								dispatch(setSelectedSecurity(record))
							},
						};
					}}
					rowClassName={handleRowClassName}
					style={{ padding: "10px" }}
				/>
			</Loadings>
		</div>
	);
};
export default Projects;
