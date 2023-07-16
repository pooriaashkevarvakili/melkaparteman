import { Tooltip } from 'antd';
import Link from "next/link";
import styles from './sider.module.scss';

function SiderMenuItems({item}) {
    return  <>
        {
        item.key==='4' ? 
        <Tooltip placement='left' title={item.label}>
            <div className={styles["sider__menu__menuitem"]} onClick={item.onClick}>
                {item.icon}
            </div>
        </Tooltip> : 
        <Tooltip placement='left' title={item.label}>
            <div className={styles["sider__menu__menuitem"]}>
                <Link href={`${item.href}`}>
                    <div style={{width:'100%', height:'100%'}}>
                    {item.icon}
                    </div>      
                    
                </Link>
            </div>
        </Tooltip>
        }
    </>    
}

export default SiderMenuItems