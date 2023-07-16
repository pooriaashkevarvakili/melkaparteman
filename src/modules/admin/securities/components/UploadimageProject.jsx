import { useEffect, useState } from "react";
import { TextCKEditor } from "@/components";
import { Buttons } from "@/components";
import { Button, Form, Input, Modal, Row, Select } from "antd";
import axios, { Axios } from "axios";
function uploadImage(imageFile, securitiesId) {
	const formData = new FormData();
	formData.append("SecurityImage", imageFile);

	return axios.post("https://api.maaleksho.ir/File/UploadSecuritiesImage?SecuritiesID=23", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
}
// import {uploadSecurities} from "@/modules/admin/services"
export default function UploadimageProject({ securitiesId }) {
	// const [selectedFile, setSelectedFile] = useState(null);
	// const [uploadFile, setUploadFile] = useState('')
	// const [selectedFile, setSelectedFile] = useState(null);
	// const [uploadFile, setUploadFile] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const [uploadFile, setUploadFile] = useState("");

	useEffect(() => {
		if (selectedFile) {
			uploadImage(selectedFile, securitiesId)
				.then((response) => {
					alert("آپلود عکس با موفقفیت");
					console.log("آپلود تصویر با موفقیت انجام شد.", response.data);
					setUploadFile(response.data);
				})
				.catch((error) => {
					console.error("خطا در آپلود تصویر.", error);
				});
		}
	}, [selectedFile, securitiesId]);

	// const handleFileChangeone = (event) => {
	//         const fileInput = document.querySelector("#fileInput");
	//         if (fileInput) {
	//             const file = fileInput.files[0];

	//             const formData = new FormData();
	//             formData.append("objFile", file, ".jpg");
	//     //     axios.post(
	//     //         `https://api.maaleksho.ir/File/UploadSecuritiesImage?SecuritiesID=${securitiesId}`,
	//     //         formData,
	//     //         {
	//     //           headers: {
	//     //             "Content-Type": "multipart/form-data",
	//     //           },
	//     //         }
	//     //       )
	//     //       .then((response) => {
	//     //         console.log("آپلود تصویر با موفقیت انجام شد.", setUploadFile(response.data));
	//     //       })
	//     //       .catch((error) => {
	//     //         console.error("خطا در آپلود تصویر.", error);
	//     //       });
	//     //   };

	// useEffect(() => {
	//  handleFileChangeone()
	// }, []);
	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);

		// بارگیری تصویر با استفاده از FileReader
		const reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (e) => {
			// نمایش تصویر در یک باکس عکس مشاهده
			const img = new Image();
			img.src = e.target.result;
			img.onload = () => {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				const dataURL = canvas.toDataURL("image/png");
				document.getElementById("image-preview").src = dataURL;
			};
		};
	};

	return (
		<>
			<div>
				<input type="file" onChange={handleFileChange} />
				<br />
				<img id="image-preview" alt="تصویر انتخاب شده" />
			</div>
		</>
	);
}
