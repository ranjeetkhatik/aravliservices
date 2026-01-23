import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSection() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '2px', textAlign: 'center' }}>
           {t("greeting")} 
      <button onClick={() => toggleLanguage('en')}>English</button>
      <button onClick={() => toggleLanguage('hi')}>हिन्दी</button>
    </div>
  );
}

export default LanguageSection;