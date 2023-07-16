import {SettingOutlined} from "@ant-design/icons";
import {Drawers} from "@/components";
import {SettingDrawer} from "@/components/app-components";
import {useTranslation} from "react-i18next";
import {useContext, useState} from "react";
import AppContext from "@/context";
import styles from './header.module.scss'
function Header (){
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    const onCloseDrawer = () => {
        setOpen(false);
    };
    const {
        language,
        placement,
        direction,
        changeLanguage,
        themeMode,
        changeTheme,
        fontMode,
        changeFontMode,
        tokens,
        changeTokenMode,
        selectedToken,
    } = useContext(AppContext);

    return <div className={styles["header"]} >
                <div className={styles["header__setting"]}>
                        <SettingOutlined
                        className={styles["header__setting-antIcon"]}
                            onClick={() => setOpen((perValue) => !perValue)}
                        />
                    <Drawers
                        title={t("layouts.drawerTitle")}
                        open={open}
                        onClose={onCloseDrawer}
                        placement={placement}
                        content={<SettingDrawer
                            {...{
                                language,
                                changeLanguage,
                                themeMode,
                                changeTheme,
                                fontMode,
                                changeFontMode,
                                tokens,
                                changeTokenMode,
                                selectedToken,
                            }}
                        />}
                    />
                </div> 
            </div>
}

export default  Header
