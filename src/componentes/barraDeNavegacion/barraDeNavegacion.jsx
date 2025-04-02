import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./barraDeNavegacion.css";
import { NavLink } from 'react-router-dom';



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
                                <NavLink className="nav" to="/"><button className="list-group-item my-2 text-center">FRANCO ZVILLING</button></NavLink>
                                <NavLink className="nav" to="/sobremi"><button className="list-group-item my-2 text-center">SOBRE MÍ</button></NavLink>
                                <NavLink className="nav" to="/mistrabajos"><button className="list-group-item my-2 text-center">MIS TRABAJOS</button></NavLink>
                                <NavLink className="nav" to="/educacion"><button className="list-group-item my-2 text-center">EDUCACIÓN</button></NavLink>
                                <NavLink className="nav" to="/habilidades"><button className="list-group-item my-2 text-center">HABILIDADES</button></NavLink>
                                <NavLink className="nav" to="/contacto"><button className="list-group-item my-2 text-center">CONTACTO</button></NavLink>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}


export default BarraDeNavegacion;