import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDeNavegacion from "./componentes/barraDeNavegacion/barraDeNavegacion";
import Franco from "./componentes/franco/franco"
import SobreMi from "./componentes/sobreMi/sobreMi";
import MisTrabajos from "./componentes/misTrabajos/misTrabajos";

function App() {
  return (
    <>
      <BarraDeNavegacion />
      <Franco/>
      <SobreMi/>
      <MisTrabajos/>
    </>
  );
}

export default App;
