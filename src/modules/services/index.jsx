import callApi from "@/service";
export const getImageIdsByFolderId = async (folderName,subjectId) => {
    const data={
        folderName:folderName,
        subjectId:subjectId
    }
	return await callApi({ url: `/File/GetImageIdsByFolderId`, params: data })
		.then((response) => response)
		.catch((error) => error)
}

export const postSaveFileByFolderFileNameFormData = async (data) => {
	return await callApi({ url: `File/SaveFileByFolderFileNameFormData`, data, method: "POST" })
		.then((response) => response)
		.catch((error) => error);
};