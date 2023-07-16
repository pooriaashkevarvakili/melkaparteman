import { useState } from "react";
import { Upload, Progress } from "antd";
import axios from "axios";

const UploadRegister = () => {
	const [defaultFileList, setDefaultFileList] = useState([]);
	const [progress, setProgress] = useState(0);

	const uploadImage = async (options) => {
		const { onSuccess, onError, file, onProgress } = options;
		const fmData = new FormData();
		const config = {
			headers: { "content-type": "multipart/form-data" },
			onUploadProgress: (event) => {
				const percent = Math.floor((event.loaded / event.total) * 100);
				setProgress(percent);
				if (percent === 100) {
					setTimeout(() => setProgress(0), 1000);
				}
				onProgress({ percent: (event.loaded / event.total) * 100 });
			},
		};
		fmData.append("image", file);
		try {
			const res = await axios.post(
				"https://api.maaleksho.ir/File/SaveFileByFolderFileName?folderName=Users&fileName=23_1.jpeg",
				fmData,
				config,
			);
			onSuccess("Ok");
		} catch (err) {
			onError({ err });
		}
	};
	// handleOnChange
	const handleOnChange = ({ file, fileList, event }) => {
		setDefaultFileList(fileList);
	};
	// return
	return (
		<div class="container">
			<Upload
				accept="image/*"
				customRequest={uploadImage}
				onChange={handleOnChange}
				listType="picture-card"
				defaultFileList={defaultFileList}
				className="image-upload-grid"
			>
				{defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
			</Upload>
			{progress > 0 ? <Progress percent={progress} /> : null}
		</div>
	);
};

export default UploadRegister;
