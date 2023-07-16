import { useTranslation } from "react-i18next";

import { Icons } from "@/components";

const BankCard = ({ number = "", cardName = "", bankName = "" }) => {
	const { t } = useTranslation();
	return (
		<div className="wallet-card-bg">
			<div className="flex justify-center pb-8 align-middle text-xl md:text-2xl text-white">
				<h5 className="card-number">{number}</h5>
				{number && <span className="mx-2 text-gray-200 text-sm">IR</span>}
			</div>
			<div className="flex justify-between align-middle text-md text-white">
				<div className="flex justify-between w-2/3 md:w-1/2">
					<div className="flex flex-col">
						<p className="text-gray-200">دارنده کارت</p>
						<h6 className="text-sm md:text-lg">{cardName}</h6>
					</div>
					<div className="flex flex-col">
						<p className="text-gray-200">بانک صادرکننده</p>
						<h6 className="text-sm md:text-lg">{bankName}</h6>
					</div>
				</div>
				<div className="pt-4 flex">
					{/* <Popover
						placement="rightTop"
						content={
							<div className="flex flex-col">
								<Icons
									title={t("اطلاعات")}
									type="InfoCircleFilled"
									classes="icon-info py-2"
								/>
								<Icons title={t("ویرایش")} type="EditFilled" classes="icon-success py-2" />
								<Icons title={t("حذف")} type="DeleteFilled" classes="icon-delete py-2" />
							</div>
						}
						trigger="hover"
						className="text-4xl cursor-pointer"
					>
						<Icons type="EllipsisOutlined" rotate={90} />
					</Popover> */}
					<Icons type="SketchOutlined" classes="text-4xl" />
				</div>
			</div>
		</div>
	);
};

export default BankCard;
