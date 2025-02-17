import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./barraDeNavegacion.css";



function BarraDeNavegacion() {
    return (
        <>
            <div className="contenedor_barra p-3 vh-100 d-flex align-items-center justify-content-center position-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 text-center">
                            <img className="img_barra" src="https://i.postimg.cc/zv9C8pdK/1738190782589-removebg-preview.png" alt="Logo de la aplicación" />
                        </div>
                        <div className="col-12 ">
                            <ul className="list-unstyled">
                                <li className="list-group-item my-2 text-center">FRANCO ZVILLING</li>
                                <li className="list-group-item my-2 text-center">SOBRE MI</li>
                                <li className="list-group-item my-2 text-center">MIS TRABAJOS</li>
                                <li className="list-group-item my-2 text-center">HABILIDADES</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}


export default BarraDeNavegacion;