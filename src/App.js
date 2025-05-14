import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDeNavegacion from "./componentes/barraDeNavegacion/barraDeNavegacion";
import Franco from "./componentes/franco/franco";
import SobreMi from "./componentes/sobreMi/sobreMi";
import MisTrabajos from "./componentes/misTrabajos/misTrabajos";
import Educacion from "./componentes/educacion/educacion";
import Habilidades from "./componentes/Habilidades/habilidades"; // Corregido el nombre
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar cerrada por defecto en móvil

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
  
  // Ajusta `isSidebarOpen` en resize y determina `mainContentClass`
  const [mainContentClass, setMainContentClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // En desktop, la sidebar está "abierta" lógicamente para el layout
        setMainContentClass('sidebar-active');
      } else {
        // En móvil, si se redimensiona desde desktop donde estaba abierta, la cerramos.
        // Si ya estaba cerrada (por el usuario), se mantiene cerrada.
        if(isSidebarOpen && !document.querySelector('.sidebar-toggle-btn').contains(document.activeElement)){
            // Solo cierra si no fue explícitamente abierta en móvil
            // Esta lógica puede ser compleja, por ahora, si se redimensiona a móvil, se cierra si estaba "desktop-open"
        }
        // La clase 'sidebar-active' no se aplica en móvil para el margin-left
        setMainContentClass(''); 
      }
    };

    handleResize(); // Llamada inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Cuidado con la dependencia de isSidebarOpen aquí, puede causar bucles si no se maneja bien.
           // Por ahora, se ejecuta al montar y al cambiar tamaño.

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BarraDeNavegacion isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${window.innerWidth < 768 ? '' : (isSidebarOpen ? 'sidebar-active' : '')}`}>
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