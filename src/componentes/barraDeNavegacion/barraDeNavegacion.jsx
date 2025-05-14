import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./barraDeNavegacion.css";
import { NavLink } from 'react-router-dom';
import { List as MenuIcon, X as CloseIcon } from 'react-bootstrap-icons';

function BarraDeNavegacion({ isOpen, toggleSidebar }) {
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
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={isOpen}
            >
                {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
            </button>

            {/* Contenedor principal de la sidebar */}
            <nav className={`sidebar-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* Contenido interno de la sidebar, este será el flex container para centrar */}
                <div className="sidebar-internal-content">
                    <div className="sidebar-header text-center w-100">
                        <img
                            className="sidebar-logo img-fluid"
                            src="/images/logo-portfolio.webp"
                            alt="Logo Franco Zvilling"
                        />
                    </div>
                    <ul className="nav-list list-unstyled">
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/" onClick={closeSidebarOnMobile} end>FRANCO ZVILLING</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/sobremi" onClick={closeSidebarOnMobile}>SOBRE MÍ</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/mistrabajos" onClick={closeSidebarOnMobile}>MIS TRABAJOS</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/educacion" onClick={closeSidebarOnMobile}>EDUCACIÓN</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/habilidades" onClick={closeSidebarOnMobile}>HABILIDADES</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link-custom" to="/contacto" onClick={closeSidebarOnMobile}>CONTACTO</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default BarraDeNavegacion;