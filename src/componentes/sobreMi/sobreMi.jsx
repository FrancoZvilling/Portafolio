// src/componentes/sobreMi/sobreMi.jsx
import React from "react";
import "./sobreMi.css";
import { useLanguage } from "../../context/LanguageContext";

function SobreMi() {
    const { t } = useLanguage();

    return (
        <section className="sobreMi-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="text-center text-md-start">
                        <h1 className="sobre_mi_1 section-title">{t('sobreMi.title')}</h1>
                        <p className="sobre_mi_2 mb-responsive">
                            {t('sobreMi.paragraph1')}
                        </p>
                        <p className="sobre_mi_2 mb-responsive"> {/* Manteniendo clase para consistencia o puedes cambiarla */}
                            {t('sobreMi.paragraph2')}
                        </p>
                        <p className="sobre_mi_3 mb-responsive">
                            {t('sobreMi.paragraph3')}
                        </p>
                        <p className="sobre_mi_4">
                            {t('sobreMi.paragraph4')}{" "}
                            <a href="https://www.linkedin.com/in/francozvilling/" target="_blank" rel="noopener noreferrer">
                                {t('sobreMi.linkedin')}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SobreMi;