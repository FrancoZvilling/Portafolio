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
import { LanguageProvider } from "./context/LanguageContext"; // IMPORTAR

// Componente para resetear el scroll en cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768); // Sidebar abierta por defecto en desktop
  const [mainContentClass, setMainContentClass] = useState(window.innerWidth >= 768 ? 'sidebar-active' : '');


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cierra la sidebar si se hace click fuera de ella en móvil
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768 && isSidebarOpen) {
        const sidebar = document.querySelector('.sidebar-nav-menu');
        const toggleButton = document.querySelector('.sidebar-toggle-btn');
        // Asegurarse que el click no sea en el botón de toggle ni dentro del sidebar
        if (sidebar && !sidebar.contains(event.target) && 
            toggleButton && !toggleButton.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]); // Dependencia: isSidebarOpen

  // Ajusta `isSidebarOpen` y `mainContentClass` al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // En desktop, la sidebar siempre está visible
        setMainContentClass('sidebar-active');
      } else {
        // En móvil, NO cerramos automáticamente la sidebar al redimensionar si ya estaba abierta.
        // El usuario la maneja con el botón. Solo quitamos la clase que empuja el contenido.
        setMainContentClass(''); 
        // Si quieres que se cierre al pasar de desktop a móvil:
        // setIsSidebarOpen(false); 
      }
    };

    // Llamada inicial para establecer el estado correcto basado en el tamaño de la ventana
    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Se ejecuta solo al montar y desmontar

  // Efecto para actualizar mainContentClass cuando isSidebarOpen cambia (solo en desktop)
  useEffect(() => {
    if (window.innerWidth >= 768) {
        setMainContentClass(isSidebarOpen ? 'sidebar-active' : '');
    }
  }, [isSidebarOpen]);


  return (
    <LanguageProvider> {/* ENVOLVER CON PROVIDER */}
      <BrowserRouter>
        <ScrollToTop />
        <BarraDeNavegacion isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`main-content ${isSidebarOpen && window.innerWidth >= 768 ? 'sidebar-active' : ''}`}>
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
