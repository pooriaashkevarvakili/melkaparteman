import { getImageIdsByFolderId } from "@/modules/services";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProjectFile() {
    const {selectedSecurity}=useSelector((state)=>state.order)
    const [projectList,setProjectList]=useState();
    
    useEffect(()=>{
        getProjectFiles()
    },[])

    
    const getProjectFiles=async()=>{
        const getProjectFilesApiResult=await getImageIdsByFolderId("Securities",selectedSecurity?.securitiesId)
        if(Array.isArray(getProjectFilesApiResult)){
            setProjectList(getProjectFilesApiResult)
        }
    }


  return (
    <div style={{display:'flex',flexDirection:'column', height:'400px',overflowY:'auto'}}>
        {
            projectList?.map((image)=>{
                return <Image 
                            key={image} 
                            src={`https://api.maaleksho.ir/${image}`}
                            style={{margin:'5px'}}
                            alt="image-projects"  
                            />
            })
        }
    </div>
  )
}

export default ProjectFile