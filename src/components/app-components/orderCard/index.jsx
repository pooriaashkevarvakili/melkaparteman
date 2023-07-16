import { Buttons } from '@/components';
import Icons from '@/components/icon';
import { createUpdateOrder, getAllOrder, getOrderBySecurityId } from '@/modules/dashboard/services';
import { setLoadingSecurityOrderData, setSecurityOrderdata, setUserOrderData } from '@/store/order';
import { notificationMaker } from '@/utils/notification';
import { Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './orderCard.module.scss';
function OrderCard({setShowCardOrder,haveDrawer}) {
  //Hooks ---------------------------------------------------------
  const [form]=Form.useForm()
  const dispatch=useDispatch();
  const {userInfo}=useSelector((state)=>state.userInfo)
  const {selectedSecurity}=useSelector((state)=>state.order)
  const {t}=useTranslation();
  
  //States --------------------------------------------------------
  const [total,setTotal]=useState(0)
  const [loadingAddOrder, setLoadingAddOrder]=useState()
  

  //Functions -----------------------------------------------------
  const getSecurityOrderData = async (securitiesId) => {
		dispatch(setLoadingSecurityOrderData(true))
		const sell = await getOrderBySecurityId(securitiesId, 8);
		const buy = await getOrderBySecurityId(securitiesId, 7);
		dispatch(setSecurityOrderdata({ sell, buy }))
		dispatch(setLoadingSecurityOrderData(false))
	};
  
  const onFinishCart = async (values, haveDrawer, securitiesCode) => {
		const data = {
			...values,
			securitiesCode,
			orderType: haveDrawer.type==='buy'? 7 : 8,
			userCode: userInfo?.userId, 
		};
		const response = await createUpdateOrder(data);
	
		if (response?.messageCode===0) {
			notificationMaker(t("notification.success"), "success");
      setLoadingAddOrder(true)
			const orderByUserId=await getAllOrder({UserCode:userInfo?.userId});
      setLoadingAddOrder(false)
			if(Array.isArray(orderByUserId) && orderByUserId[0].messageCode===0){
				dispatch(setUserOrderData(orderByUserId))
			}
			await getSecurityOrderData(selectedSecurity?.securitiesId)
			setShowCardOrder(false)
		} else {
			notificationMaker(t("notification.error"), "error");
		}
    
	};

  
  const handleChangeOrder=(_values, allValues)=>{
    if(allValues.volume && !allValues.value){
      setTotal(0)
    }
    if(!allValues.volume && allValues.value){
      setTotal(0)
    }
    if(allValues.volume && allValues.value){
      const totalOrderValue=allValues.volume*allValues.value
      setTotal(totalOrderValue)
    }
  }
  
  const handleSubmitOrder=(values)=>{
    onFinishCart(values, haveDrawer, selectedSecurity?.securitiesId)
  }


  return (
    <div className={`${styles['orderCard__container']} ${haveDrawer.type==='buy'?styles["buy"]:styles["sale"] }`}>
        <Row className={styles['orderCard__header']}>
            <h1 style={{fontSize:'1rem'}} className={styles["orderCard__"]}>{selectedSecurity?.name}</h1>
            <Icons
                type="CloseCircleOutlined"
                classes="icon-delete"
                title="بستن ثبت سفارش"
                onClick={() => setShowCardOrder(false)}
                style={{color:'#4F6883'}}
            />
        </Row>
        <Row className={styles["orderCard__orderFrom"]}>
          <Form form={form} onFinish={handleSubmitOrder} style={{width:'100%'}} onValuesChange={handleChangeOrder}>
              <Form.Item label='تعداد' name="volume" required rules={[{required: true, message:"تعداد الزامی است."}]}>
                <Input type='number' size='middle'/>
              </Form.Item>
              <Form.Item label='قیمت' name='value' required  rules={[{required:true, message:"قیمت الزامی است."}]}>
                <Input type='number' size='middle' />
              </Form.Item>
              <Form.Item label='اعتبار معامله'>
                <Select defaultValue={'validUntilCancellation'}>
                  <Select.Option value='validUntilCancellation'>معتبر تا لغو</Select.Option>
                </Select>
              </Form.Item>         
              <Buttons htmlType="submit" loading={loadingAddOrder} classes={haveDrawer.type==='buy'?`${styles["buy__btn"]}`:`${styles['sell__btn']}`}>
                   {haveDrawer.type==="buy" && !loadingAddOrder ? "ارسال خرید": "ارسال فروش"} 
              </Buttons>
          </Form>
        </Row>
        <div className={styles["orderCard__totalWrapper"]}>
          <span className={styles["orderCard__total"]}>
            {total>0 && <CountUp duration={0.01} end={total} separator="," />}
          </span>
        </div>
    </div>
  )
}

export default OrderCard
