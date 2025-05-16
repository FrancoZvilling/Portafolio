// src/componentes/barraDeNavegacion/barraDeNavegacion.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./barraDeNavegacion.css";
import { NavLink } from 'react-router-dom';
import { List as MenuIcon, X as CloseIcon } from 'react-bootstrap-icons';
import { useLanguage } from "../../context/LanguageContext";

function BarraDeNavegacion({ isOpen, toggleSidebar }) {
    const { language, toggleLanguage, t } = useLanguage();

    const closeSidebarOnMobile = () => {
        if (window.innerWidth < 768 && isOpen) {
            toggleSidebar();
        }
    };

    return (
        <>
            <button
                className="sidebar-toggle-btn d-md-none"
                onClick={toggleSidebar}
                aria-label={isOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
                aria-expanded={isOpen}
            >
                {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
            </button>

            <nav className={`sidebar-nav-menu ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-internal-content">
                    <div className="sidebar-header text-center w-100">
                        <img
                            className="sidebar-logo img-fluid"
                            src="/images/logo-portfolio.webp"
                            alt="Logo Franco Zvilling" // Alt text puede quedar así o también ser traducido si se desea
                        />
                    </div>
                    <ul className="nav-list list-unstyled">
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/" onClick={closeSidebarOnMobile} end>
                                {t('navbar.myName')}
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/sobremi" onClick={closeSidebarOnMobile}>
                                {t('navbar.aboutMe')}
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/mistrabajos" onClick={closeSidebarOnMobile}>
                                {t('navbar.myWorks')}
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/educacion" onClick={closeSidebarOnMobile}>
                                {t('navbar.education')}
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/habilidades" onClick={closeSidebarOnMobile}>
                                {t('navbar.skills')}
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/contacto" onClick={closeSidebarOnMobile}>
                                {t('navbar.contact')}
                            </NavLink>
                        </li>
                    </ul>
                    <div className="language-switcher-container">
                        <button onClick={toggleLanguage} className="language-switch-btn">
                            {language === 'es' ? 'EN' : 'ES'}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BarraDeNavegacion;