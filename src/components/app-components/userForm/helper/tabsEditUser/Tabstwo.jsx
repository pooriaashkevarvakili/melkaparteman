import React from 'react'
import { useTranslation } from "react-i18next";
import Regex from "@/utils/regex";
import { Col, Row,Form } from "antd";
import { Inputs } from "@/components";

 function Tabstwo() {
    const { t } = useTranslation();
  return (
	<Form layout="vertical">   
    <Row gutter={30}>
    <Col xs={24} md={12} lg={12}>
        <Inputs
            label={t("شماره همراه")}
            name="mobile"
            required={true}
            pattern={Regex.mobileNumber}
            patternMessage={t("schemas.mobile")}
        /> 
    </Col>
    
    <Col xs={24} md={12} lg={12}>
        <Inputs label={t("تلفن ثابت")} name="phone" required={true} />
    </Col>
    
    <Col xs={24} md={12} lg={12}>
        <Inputs label={t("کد پستی")} name="postalCode" required={true} />
    </Col>
    <Col  xs={24} md={24} lg={12}>
        <Inputs label={t("آدرس")} name="address" required={true} />
    </Col>
</Row>
</Form>
  )
}
export default Tabstwo;