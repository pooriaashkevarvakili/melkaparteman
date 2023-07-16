import { useEffect, useRef } from "react";
import { Loadings } from "..";
import uploadAdapter from "./helper/upload";

export default function TextCKEditor({ onChange, editorLoaded, name, value }) {
	const editorRef = useRef();
	const { CKEditor, ClassicEditor } = editorRef.current || {};
	// handles
	function uploadPlugin(editor) {
		editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
			return uploadAdapter(loader);
		};
	}
	// init
	useEffect(() => {
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
	}, []);
	// return
	return (
		<div className="reset-css-configs">
			{editorLoaded ? (
				<CKEditor
					type=""
					name={name}
					editor={ClassicEditor}
					config={{
						toolbar: [
							"heading",
							"|",
							"bold",
							"italic",
							"blockQuote",
							// "link",
							// "numberedList",
							// "bulletedList",
							"|",
							"imageUpload",
							// "uploadImage",
							// "insertTable",
							// "tableColumn",
							// "tableRow",
							// "mergeTableCells",
							// "mediaEmbed",
							"|",
							"undo",
							"redo",
						],
						extraPlugins: [uploadPlugin],
						image: {
							toolbar: [
								"imageTextAlternative",
								"|",
								"imageStyle:alignLeft",
								"imageStyle:full",
								"imageStyle:alignRight",
							],
							resizeUnit: "%",
							styles: ["full", "alignLeft", "alignRight"],
						},
						alignment: {
							options: ["left", "right", "center", "justify"],
						},
						language: "ar",
						ui: "ar",
						content: "ar",
					}}
					onInit={(e) => console.log(e)}
					data={value}
					onChange={(event, editor) => {
						const data = editor.getData();
						onChange(data);
					}}
				/>
			) : (
				<div className="grid grid-flow-col">
					<Loadings />
				</div>
			)}
		</div>
	);
}
