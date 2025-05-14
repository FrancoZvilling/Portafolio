import React from "react";
import "./franco.css";
// "bootstrap/dist/css/bootstrap.min.css"; // No es necesario importar Bootstrap aquí si ya está en App.js

function Franco() {
    return (
        <section className="franco-section container-fluid"> {/* container-fluid para padding responsivo */}
            <div className="row justify-content-center"> {/* Centrar el contenido si es más estrecho */}
                <div className="col-lg-10 col-xl-8"> {/* Limitar ancho en pantallas grandes */}
                    <div className="text-center text-md-start"> {/* Centrado en móvil, a la izquierda en desktop */}
                        <h1 className="franco_1 section-title">FRANCO ZVILLING</h1>
                        <p className="franco_2">DESARROLLADOR FRONTEND</p>
                        <p className="franco_3 py-3">TE DOY LA BIENVENIDA A MI PORTAFOLIO WEB</p>
                        <p className="franco_4">
                            Si querés contactarme podés escribirme a{" "}
                            <a href="https://wa.me/3541315119" target="_blank" rel="noopener noreferrer">
                                +54 9 3541 315119
                            </a>
                        </p>
                        <div className="mt-4">
                            <a className="btn-cv-download" href="/CV-2025.pdf" download>
                                Descarga mi CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Franco;