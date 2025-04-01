import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDeNavegacion from "./componentes/barraDeNavegacion/barraDeNavegacion";
import Franco from "./componentes/franco/franco"
import SobreMi from "./componentes/sobreMi/sobreMi";
import MisTrabajos from "./componentes/misTrabajos/misTrabajos";
import Educacion from "./componentes/educacion/educacion";
import Habilidades from "./componentes/habilidades/habilidades";
import Contacto from "./componentes/contacto/contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <BarraDeNavegacion />
        <Routes>
        <Route path="/" element={<Franco />} />
        <Route path="sobremi" element={<SobreMi />} />
        <Route path="mistrabajos" element={<MisTrabajos />} />
        <Route path="educacion" element={<Educacion/>} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
