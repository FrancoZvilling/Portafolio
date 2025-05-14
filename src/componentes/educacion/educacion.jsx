import React from "react";
import "./educacion.css";
import CartaEstudios from "../cartaEducacion/cartaEstudios";

function Educacion () {
    const estudios = [
        { titulo: "Carrera de desarrollo Frontend React - Septiembre de 2023", certificadoPath: "/certificates/Frontend.png" },
        { titulo: "React.js - Septiembre de 2023", certificadoPath: "/certificates/React.png" },
        { titulo: "JavaScript - Junio de 2023", certificadoPath: "/certificates/JavaScript.png" },
        { titulo: "Desarrollo web - Abril de 2023", certificadoPath: "/certificates/Desarrollo_web.png" }
    ];

    return(
        <section className="educacion-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="educacion_1 section-title text-center">MIS ESTUDIOS</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    {estudios.map((estudio, index) => (
                        <CartaEstudios
                            key={index}
                            titulo={estudio.titulo}
                            certificadoPath={estudio.certificadoPath}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Educacion;