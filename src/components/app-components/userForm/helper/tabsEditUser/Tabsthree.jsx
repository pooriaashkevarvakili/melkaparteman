import React from 'react'
import { useTranslation } from "react-i18next";
import { Col, Row,Form } from "antd";
import { Inputs } from "@/components";
import { useCardValue } from "../../helper/bank";
 function Tabsthree({ setUpdate, cardValues }) {
    const { t } = useTranslation();
  	return (
      <Form layout="vertical">
      <Row gutter={8}>
        <Col span={8}>
          <Row gutter={8}>
            <Col span={24}>
              <Inputs
                label={t("شماره شبا")}
                name="accountNumber"
                required={true}
                onChange={setUpdate}
              />
            </Col>
            <Col span={24}>
              <Inputs
                label={t("نام بانک صادرکننده")}
                name="accountBankName"
                required={true}
                onChange={setUpdate}
              />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <useCardValue {...cardValues} />
        </Col>
      </Row>
      </Form>
    );
}
export default Tabsthree;