// src/context/LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import translations_es from '../translations/es.json';
import translations_en from '../translations/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Intenta obtener el idioma guardado de localStorage, o usa 'es' por defecto
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('portfolioLanguage');
        return savedLanguage || 'es';
    });

    // Guarda el idioma en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('portfolioLanguage', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
    };

    const t = (key) => {
        const translations = language === 'es' ? translations_es : translations_en;
        const keys = key.split('.');
        let result = translations;
        try {
            for (const k of keys) {
                result = result[k];
                if (result === undefined) {
                    // console.warn(`Translation key "${key}" not found for language "${language}" (intermediate key: ${k})`);
                    return key; // Devuelve la clave si no se encuentra la traducción
                }
            }
            return result;
        } catch (error) {
            // console.warn(`Error accessing translation key "${key}" for language "${language}":`, error);
            return key;
        }
    };
    
    // Función para obtener un array de traducciones (para listas como proyectos o estudios)
    const tArray = (key) => {
        const translations = language === 'es' ? translations_es : translations_en;
        const keys = key.split('.');
        let result = translations;
        try {
            for (const k of keys) {
                result = result[k];
                if (result === undefined) {
                    // console.warn(`Translation array key "${key}" not found for language "${language}"`);
                    return []; // Devuelve array vacío si no se encuentra
                }
            }
            return Array.isArray(result) ? result : [];
        } catch (error) {
            // console.warn(`Error accessing translation array key "${key}" for language "${language}":`, error);
            return [];
        }
    };


    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, tArray }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};