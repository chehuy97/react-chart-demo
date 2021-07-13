import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {

    const { t, i18n } = useTranslation('common')

    return (
        <div>
            <p>{t('That is a home')}</p>
        </div>
    )
}

export default Home
