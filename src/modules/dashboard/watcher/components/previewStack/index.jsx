import { Loadings } from "@/components";
import { PreviewStack } from "@/components/app-components";
import CastTable from "@/components/app-components/castTable";
import { useSelector } from "react-redux";
import styles from '../projects.module.scss';
const WatchPreviewStack = ({ setHaveDrawer, setShowCardOrder }) => {
	//Hooks -------------------------------------------------------------
	const {loadingSecurityOrderData}=useSelector((state)=>state.order)
	
	return (
				<div className={styles["projects__previewStackContainer"]}>
					<PreviewStack {...{ setHaveDrawer, setShowCardOrder }} />
					<Loadings isLoading={loadingSecurityOrderData}>
						<CastTable />
					</Loadings>
				</div>
	);
};

export default WatchPreviewStack;
