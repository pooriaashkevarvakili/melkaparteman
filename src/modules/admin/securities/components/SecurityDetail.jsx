import { postSaveFileByFolderFileNameFormData } from "@/modules/services";
import { Button, Upload } from "antd";
import { useState } from "react";
function SecurityDetail({ projectData }) {
  const [fileList, setFileList] = useState([])

  const handleChangeUpload = ({ fileList: newFileList }) => {
    console.log(newFileList)
    setFileList(newFileList)
  }

  // const handlePreviewFileUplad = async (file) => {
  //   let src = file.url;
  //   if (!src) {

  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow?.document.write(image.outerHTML);
  // }

  const HandleSubmitUploadedImgae = async () => {
    const formData = new FormData()
    formData.append("folderName", "Securities")
    formData.append("fileName", `${projectData?.securitiesId}_${fileList[0]?.name}`)
    formData.append("ContentType", fileList[0])
    const saveFileApiResult = await postSaveFileByFolderFileNameFormData(formData)
    console.log("saveFileApiResult", saveFileApiResult);
  }

  return (
    <div>
      <Upload
        name="files"
        listType="picture-card"
        fileList={fileList}
        onChange={handleChangeUpload}
        multiple={false}
      // onPreview={handlePreviewFileUplad}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
      <div style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Button type="primary" onClick={HandleSubmitUploadedImgae}>ارسال و ذخیره</Button>
      </div>
    </div>
  )
}

export default SecurityDetail