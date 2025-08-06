import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MdGTranslate } from 'react-icons/md';

function FloatingLanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            onClick={toggleLanguage}
            variant="light"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '20px',
                borderRadius: '50px',
                padding: '10px 16px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 9999
            }}
            title="Switch language"
        >
            <MdGTranslate size={20} />
            es/en
        </Button>
    );
}

export default FloatingLanguageToggle;
