import React from "react";
import Carta from "../carta/carta";
import "./misTrabajos.css";

function MisTrabajos() {
    return (
        <section className="misTrabajos-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="mis_trabajos_1 section-title text-center">MIS TRABAJOS</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5 d-flex justify-content-center">
                    <Carta
                        img="/images/proyecto-libreria.webp"
                        titulo="Ecommerce - Librería"
                        descripcion="Esta es mi librería creada a partir de React.js, CSS, JavaScript y HTML."
                        linkProyecto="https://libreriaonlinezwilling.web.app/"
                    />
                    <Carta
                        img="/images/cartaweb.webp"
                        titulo="Carta Restaurante Web"
                        descripcion="Carta de restaurante creada con React.js, CSS y JavaScript."
                        linkProyecto="https://cartawebrestaurant.netlify.app/"
                    />
                    <Carta
                        img="/images/cartawebdelivery.webp"
                        titulo="Carta Delivery Web"
                        descripcion="Carta de delivery creada con React.js, CSS y JavaScript."
                        linkProyecto="https://cartawebdelivery.netlify.app/"
                    />
                </div>
                {/* Aquí podrías añadir más proyectos si los tienes, envolviendo cada <Carta /> en su propia <div className="col-md-8 col-lg-6 col-xl-5 d-flex justify-content-center"> o ajustando las clases col para que quepan más */}
            </div>
        </section>
    );
}

export default MisTrabajos;