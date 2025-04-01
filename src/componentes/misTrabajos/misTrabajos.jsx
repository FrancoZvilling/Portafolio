import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carta from "../carta/carta";
import "./misTrabajos.css"


function MisTrabajos() {
    return (
        <>
            <div className="container-mis_trabajos">
                <div className="row">
                    <div className="mis_trabajos_1 col-12 d-flex align-items-center">MIS TRABAJOS</div>
                    <Carta img="https://i.postimg.cc/j2crHSk5/libreria-img.png" titulo="Libreria Electronica" descripcion="Esta es mi libreria creada a apartir de react js css javascrpt y html" />
                </div>
            </div>
            
        </>
    )
}

export default MisTrabajos;