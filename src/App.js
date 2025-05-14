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

// Componente para resetear el scroll en cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mainContentClass, setMainContentClass] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cierra la sidebar si se hace click fuera de ella en móvil
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768 && isSidebarOpen) {
        const sidebar = document.querySelector('.sidebar-nav-menu');
        const toggleButton = document.querySelector('.sidebar-toggle-btn');
        if (sidebar && !sidebar.contains(event.target) && toggleButton && !toggleButton.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  // Ajusta `isSidebarOpen` y `mainContentClass` al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
        setMainContentClass('sidebar-active');
      } else {
        setMainContentClass('');
      }
    };

    handleResize(); // Llamada inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BarraDeNavegacion isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
  );
}

export default App;
