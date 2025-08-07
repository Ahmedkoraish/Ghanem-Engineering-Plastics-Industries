
import React from 'react';
import { useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
   useInsertionEffect(() => {
      document.title = "About | Ghanem Engineering & Plastics Industries";
    }, []);
  return (
    <div>{t('nav.about')}</div>
  );
}
