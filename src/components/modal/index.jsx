import { useState, useImperativeHandle } from "react";
import { Card, Modal } from "antd";
const style = { width: "100%" };

const Modals = ({
	title = "",
	width = "70%",
	className = "",
	removeCloseButton = false,
	maskClosable = true,
	destroyOnClose = true,
	keyboard = false,
	centered = true,
	reference,
	children,
}) => {
	const [open, setOpen] = useState(false);
	// hooks
	useImperativeHandle(reference, () => ({
		showModal: () => {
			setOpen(true);
		},
		hideModal: () => {
			setOpen(false);
		},
	}));
	//   return
	return (
		<Modal
			title={
				title ? (
					<Card style={style}>
						<Card.Grid style={style} key={"title"}>
							{title}
						</Card.Grid>
					</Card>
				) : (
					""
				)
			}
			width={width}
			className={className}
			keyboard={keyboard}
			destroyOnClose={destroyOnClose}
			maskClosable={maskClosable}
			closable={!removeCloseButton}
			onCancel={() => setOpen(false)}
			centered={centered}
			footer={null}
			open={open}
		>
			{/* <div className="modals-layout" */}
			<Card style={style}>
				<Card.Grid style={style} key={"content"}>
					{children}
				</Card.Grid>
			</Card>
		</Modal>
	);
};

export default Modals;
