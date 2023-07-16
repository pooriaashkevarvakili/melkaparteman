import { postSaveFileByFolderFileNameFormData } from "@/modules/services";
import { Button, Upload } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const StepThree = () => {
  // hooks
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.userInfo)
  const [fileList, setFileList] = useState([])

  const handleChangeUpload = ({ fileList: newFileList }) => {
    console.log(newFileList)
    setFileList(newFileList)
  }


  // const handlePreviewFileUplad=async (file) => {
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
    formData.append("folderName", "Users")
    formData.append("fileName", `${userInfo?.userId}_${fileList[0]?.name}`)
    formData.append("ContentType", fileList[0])
    const saveFileApiResult = await postSaveFileByFolderFileNameFormData(formData)
    console.log("saveFileApiResult", saveFileApiResult);
  }
  // return
  return (
    <div>
      <Upload
        name="files"
        listType="picture-card"
        fileList={fileList}
        onChange={handleChangeUpload}
        multiple={true}
      // onPreview={handlePreviewFileUplad}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
      <div style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Button type="primary" onClick={HandleSubmitUploadedImgae}>ارسال و ذخیره</Button>
      </div>
    </div>
  );
};

export default StepThree;
