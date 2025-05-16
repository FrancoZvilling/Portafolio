// src/componentes/franco/franco.jsx
import React from "react";
import "./franco.css";
import { useLanguage } from "../../context/LanguageContext";

function Franco() {
    const { t } = useLanguage();

    return (
        <section className="franco-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="text-center text-md-start">
                        <h1 className="franco_1 section-title">{t('franco.title')}</h1>
                        <p className="franco_2">{t('franco.subtitle')}</p>
                        <p className="franco_3 py-3">{t('franco.welcome')}</p>
                        <p className="franco_4">
                            {t('franco.contactMe')}{" "}
                            <a href="https://wa.me/3541315119" target="_blank" rel="noopener noreferrer">
                                +54 9 3541 315119
                            </a>
                        </p>
                        <div className="mt-4">
                            <a className="btn-cv-download" href="/CV-2025.pdf" download>
                                {t('franco.downloadCV')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Franco;