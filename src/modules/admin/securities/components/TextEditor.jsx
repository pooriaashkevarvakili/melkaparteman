// import { TextCKEditor } from "@/components";
// import parse from "html-react-parser";

function Editor({ showPreview = true, projectData }) {
	// const [editorLoaded, setEditorLoaded] = useState(false);
	// const [data, setData] = useState("");
	// const [htmlData, setHtmlData] = useState("");
	// const [file, setFile] = useState(null);

	// useEffect(() => {
	// 	var init = setTimeout(() => setEditorLoaded(true), 500);
	// 	// cleanUp
	// 	return () => clearTimeout(init);
	// }, []);

	// function TextFile(text) {
	// 	const element = document.createElement("a");
	// 	const file = new Blob([text], { type: "text/plain" });
	// 	element.href = URL.createObjectURL(file);
	// 	element.download = "C:UsersmortezaDownloadsmyFile.txt";
	// 	document.body.appendChild(element);
	// 	element.click();
	// }

	// function handleFileUpload(event) {
	// 	const selectedFile = event.target.files[0];
	// 	setFile(selectedFile);
	// }

	// async function handleSubmit(event) {
	// 	// event.preventDefault();
	// 	try {
	// 		const formData = new FormData();
	// 		formData.append("SecurityDescFile", file);
	// 		const response = await axios.post(
	// 			`https://api.maaleksho.ir/File/UploadSecuritiesDetailFile?SecuritiesID=${projectData?.securitiesId}`,
	// 			formData,
	// 			{
	// 				headers: {
	// 					"Content-Type": "multipart/form-data",
	// 				},
	// 			},
	// 		);
	// 		console.log(response.data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// async function handleAutoUpload() {
	// 	TextFile(data);
	// 	const blob = new Blob([data], { type: "text/plain" });
	// 	const autoUploadedFile = new File([blob], "mori.txt");
	// 	setFile(autoUploadedFile);
	// 	await handleSubmit();
	// }

	return (
		<>
			{/* <TextCKEditor
				name="description"
				onChange={(data) => {
					setData(data);
				}}
				editorLoaded={editorLoaded}
			/>
			{showPreview && (
				<div className="spanBox my-0 text-ck-editor">
					<Button
						onClick={() => {
							setHtmlData(data);
							handleAutoUpload();
						}}
						className="mt-3 py-3 px-8 border-solid border-4 border-color: rgb(2 6 23); shadow-md hover:shadow-xl "
					>
						ذخیره و اپلود خودکار
					</Button>

					<div
						className="spanBox my-0 text-ck-editor border-2 border-slate- border-solid  mt-2 rounded-lg p-2"
						style={{
							boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
						}}
					>
						<p className="textTitle">پیش نمایش</p>
						{parse(htmlData)}
					</div>
				</div>
			)} */}
		</>
	);
}

export default Editor;