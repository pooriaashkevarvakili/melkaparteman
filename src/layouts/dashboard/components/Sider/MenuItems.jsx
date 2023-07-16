import { Tooltip } from 'antd';
import styles from './sider.module.scss'
import React from 'react';
import Link from "next/link";


const MenuItems = ({item}) => {
    return ( 
        <Tooltip placement='left' title={item.label}>
                <div className={styles["sider__menu__menuitem"]}>
                    <Link href={`${item.href}`}>      
                        {item.icon}
                    </Link>
                </div>
        </Tooltip>
     );
}
 
export default MenuItems;