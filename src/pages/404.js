import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Custom404() {
    const { t } = useTranslation()
    return <div className="loading-page">
        <div className="text-center" dir="rtl">
            <h3 className="text-2xl">{t("messages.pageNotFound")}</h3>
            <Link href={"/"} className="text-blue-600 text-sm">{t("messages.goBack")}</Link>
        </div>
    </div>
}