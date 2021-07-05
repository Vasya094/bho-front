import React from 'react'
import { useTranslation } from 'react-i18next';

const MainPicture = () => {
    const { t, i18n } = useTranslation();
    return (
        <div id="main-picture">
            <div id="tagline">{t("tagline")}</div>
        </div>
    )
}

export default MainPicture
