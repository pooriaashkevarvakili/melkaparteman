import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Col, Divider, Form, Row } from "antd";
import { Buttons, Inputs, Selects } from "@/components";

const Mobile = ({ onFinish = () => { }, projectData = {}, editable = true }) => {
    // hooks
    const { t } = useTranslation();
    const [form] = Form.useForm();
    // initializeValues
    useEffect(() => {
        form.setFieldsValue(projectData);
    }, [projectData]);
    // return
    return (
        <Form form={form} name="project-form" className="project-form" layout="vertical" onFinish={onFinish}>
            <Row gutter={8}>
                <Col xs={24}>
                    <Row gutter={8}>
                        <Col xs={24} md={8}>
                            <Inputs label={t("نام پروژه")} name="name" required={true} />
                        </Col>
                        <Col xs={24} md={8}>
                            <Inputs label={t("نام شرکت ارایه دهنده")} name="companyName" required={true} />
                        </Col>
                        <Col xs={24} md={8}>
                            {/* <Switches
								name="statusCode"
								label={t("commons.status")}
								checkedChildren={t("commons.active")}
								unCheckedChildren={t("commons.deActive")}
								defaultChecked={false}
							/> */}
                            <Selects
                                name="statusCode"
                                label={t("commons.status")}
                                required={true}
                                options={[
                                    { id: 1, name: "عرضه اولیه" },
                                    { id: 2, name: "درحال جذب سرمایه" },
                                    { id: 3, name: "غیر فعال" },
                                    { id: 4, name: "خاتمه یافته" },
                                ]}
                                defaultValue={1}
                            />
                        </Col>
                    </Row>
                </Col>
                <Divider>بهای پروژه</Divider>
                <Col xs={24}>
                    <Row gutter={8}>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs label={t("تعداد سهم")} name="allStock" required={true} />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs label={t("مبلغ هر سهم")} name="pricePerStock" required={true} />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs label={t("تعداد سهم شروع")} name="startStockCount" required={true} />
                        </Col>
                    </Row>
                </Col>
                <Divider>کمیسیون</Divider>
                <Col xs={24}>
                    <Row gutter={8}>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs label={t("کارمزد معامله")} name="securitiesFee" required={true} />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs label={t("کمیسیون")} name="commission" required={true} />
                        </Col>
                    </Row>
                </Col>
                {editable && (
                    <Col xs={{ span: 24 }} md={{ span: 12, offset: 12 }} lg={{ span: 8, offset: 16 }}>
                        <Buttons htmlType="submit" classes={"mt-5"}>
                            {t("commons.save")}
                        </Buttons>
                    </Col>
                )}
            </Row>
        </Form>
    );
};

export default Mobile;
