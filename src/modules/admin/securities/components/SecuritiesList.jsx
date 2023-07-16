import { useTranslation } from "react-i18next";
import { Card, Col, Descriptions, Row, theme } from "antd";
import { EditOutlined } from "@ant-design/icons"; // import the new icon here
import { Icons } from "@/components";
const width = { width: "100%" };

const SecuritiesCards = ({ partArray = [], showModal }) => {
	const { t } = useTranslation();
	// theme
	const { token } = theme.useToken();
	// return
	return (
		<div className="mb-5">
			<Row justify={"start"} align={"middle"} gutter={[8, 8]} style={width}>
				{partArray.map((item, index) => (
					<Col xs={24} md={12} lg={8} key={index}>
						<Card.Grid
							className="box-project"
							style={{ ...width, background: token?.colorPrimaryLight || "" }}
							key={index}
						>
							<div className="col-info">
								<Descriptions
									layout="vertical"
									title={
										<div className="flex justify-between text-xl">
											<span style={{ color: token?.colorPrimary || "" }}>
												{item.name}
											</span>
											<span>
												<Icons
													title={t("اپلود عکس")}
													type="FileImageOutlined"
													classes="icon-success mx-2"
													onClick={() => {
														showModal("upload", item);
													}}
												/>
												<Icons
													title={t("توضیحات")}
													type="FileImageOutlined"
													classes="icon-success mx-2"
													onClick={() => {
														showModal("description", item);
													}}
												/>
												<Icons
													title={t("اطلاعات")}
													type="InfoCircleOutlined"
													classes="icon-info mx-2"
													onClick={() => {
														showModal("info", item);
													}}
												/>
												<Icons
													title={t("commons.edit")}
													type="EditOutlined"
													classes="icon-secondary mx-2 "
													onClick={() => showModal("edit", item)}
												/>
											</span>
										</div>
									}
								>
									<Descriptions.Item label="شرکت ارایه دهنده" span={1}>
										{item.companyName}
									</Descriptions.Item>
									<Descriptions.Item label="وضعیت پروژه" span={2}>
										{item.statusName}
									</Descriptions.Item>
								</Descriptions>
							</div>
						</Card.Grid>
					</Col>
				))}
			</Row>
		</div>
	);
};
export default SecuritiesCards;
