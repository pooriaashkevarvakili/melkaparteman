import { useState } from "react";
import { useTranslation } from "react-i18next";

import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";

const UploadRegister = ({
	name = "attachments",
	uploadText = "",
	uploadHint = "",
	className = "",
	required = false,
	userId,
}) => {
	const [length, setLength] = useState(1);
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
				<Upload.Dragger
					name="files"
					action={`https://api.maaleksho.ir/File/SaveFileByFolderFileName?folderName=Users&fileName=${userId}_${length}`}
					onChange={({ file = {}, fileList = [] }) => {
						setLength(fileList?.length + 1);
					}}
					value={[""]}
					maxCount={2}
				>
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

export default UploadRegister;
