import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { LanguageIcon } from '@heroicons/react/24/solid';



const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLanguage)
  };

  return (

      <button
       className=" md:px-2 px-2 md:py-2 py-1 border mr-2 border-purple-500 rounded text-blue-200 font-mono flex items-center text-xl md:p-0 hover:text-cyan-700 hover:border-cyan-700"
       onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'DE' : 'EN'}
        <LanguageIcon class="h-5 w-5" />
      </button>
 
  );
};

export default LanguageSwitcher;