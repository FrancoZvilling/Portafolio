// src/componentes/contacto/contacto.jsx
import React from "react";
import "./contacto.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Contacto() {
    const { t } = useLanguage();

    return (
        <section className="contacto-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="contacto_1 section-title text-center">{t('contacto.title')}</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7">
                    <div className="contact-info-wrapper">
                        <div className="contact-item">
                            <MdEmail size={30} className="contact-icon icon-email" />
                            <div className="contact-details">
                                <span className="contact-label">{t('contacto.emailLabel')}</span>
                                <a href="mailto:francozvilling-programador@hotmail.com" className="contact-link">
                                    francozvilling-programador@hotmail.com
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaWhatsapp size={30} className="contact-icon icon-whatsapp" />
                            <div className="contact-details">
                                <span className="contact-label">{t('contacto.whatsappLabel')}</span>
                                <a href="https://wa.me/5493541315119" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    +54 9 3541 315119
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;