// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDeNavegacion from "./componentes/barraDeNavegacion/barraDeNavegacion";
import Franco from "./componentes/franco/franco";
import SobreMi from "./componentes/sobreMi/sobreMi";
import MisTrabajos from "./componentes/misTrabajos/misTrabajos";
import Educacion from "./componentes/educacion/educacion";
import Habilidades from "./componentes/habilidades/habilidades";
import Contacto from "./componentes/contacto/contacto";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

// Componente para resetear el scroll en cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  // Estado inicial correcto basado en el ancho de la ventana
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [mainContentClass, setMainContentClass] = useState(
    window.innerWidth >= 768 ? 'sidebar-active' : ''
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cierra la sidebar si se hace click fuera de ella en móvil
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768 && isSidebarOpen) {
        const sidebar = document.querySelector('.sidebar-nav-menu');
        const toggleButton = document.querySelector('.sidebar-toggle-btn');
        if (sidebar && !sidebar.contains(event.target) &&
            toggleButton && !toggleButton.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]); // Dependencia: isSidebarOpen

  // Ajusta `isSidebarOpen` y `mainContentClass` al redimensionar y al montar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // DESKTOP
        setIsSidebarOpen(true); // En desktop, la sidebar está siempre visible y conceptualmente "abierta"
        setMainContentClass('sidebar-active'); // El contenido principal se desplaza
      } else { // MOBILE
        // En móvil, isSidebarOpen es manejada por el usuario a través de toggleSidebar.
        // mainContentClass siempre es '' porque la sidebar se superpone y no empuja el contenido.
        setMainContentClass('');
      }
    };

    handleResize(); // Llamada inicial para asegurar la consistencia del estado al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Se ejecuta solo al montar y desmontar

  // El useEffect que actualizaba mainContentClass basado en isSidebarOpen (tercer useEffect) se ha eliminado
  // ya que handleResize maneja adecuadamente mainContentClass tanto para desktop como para móvil.

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <BarraDeNavegacion isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Ahora usamos mainContentClass directamente */}
        <main className={`main-content ${mainContentClass}`}>
          <Routes>
            <Route path="/" element={<Franco />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/mistrabajos" element={<MisTrabajos />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
