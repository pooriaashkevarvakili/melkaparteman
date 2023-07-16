import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Uploads = ({
	name = "attachments",
	maxCount = 1,
	uploadText = "",
	uploadHint = "",
	className = "",
	required = false,
}) => {
	const [uploadFile, setUploadFile] = useState([""]);

	useEffect(() => {
		const fileInput = document.querySelector("#fileInput");
		if (fileInput) {
			const file = fileInput.files[0];

			const formData = new FormData();
			formData.append("objFile", file, "amlak.jpg");

			axios
				.post("https://api.maaleksho.ir/File/FileUpload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					setUploadFile(response.data);
				})
				.catch((error) => {
				});
		} else {
			console.error('Element with ID "fileInput" not found.');
		}
	}, []);
	// hooks
	const { t } = useTranslation();
	// constants
	const rules = [
		{
			required: required,
			message: t("schemas.required"),
		},
	];
	// handles
	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};
	// return
	return (
		<Form.Item className={className}>
			<Form.Item
				rules={rules}
				name={name}
				valuePropName="fileList"
				getValueFromEvent={normFile}
				noStyle
			>
				<Upload.Dragger name="files" action="/upload.do" value={uploadFile} maxCount={maxCount}>
					<div className="flex justify-around">
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<div>
							<p className="ant-upload-text">{uploadText}</p>
							{uploadHint && <p className="ant-upload-hint">{uploadHint}</p>}
						</div>
					</div>
				</Upload.Dragger>
			</Form.Item>
		</Form.Item>
	);
};

export default Uploads;
