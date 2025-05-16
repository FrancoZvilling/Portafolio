import React from "react";
import Carta from "../carta/carta"; // <-- CORREGIDO: Usando tu ruta de importación
import "./misTrabajos.css";

function MisTrabajos() {
    const proyectos = [
        {
            img: "/images/library.png",
            titulo: "Ecommerce - Librería",
            descripcion: "Esta es mi librería creada a partir de React.js, CSS, JavaScript y HTML.",
            linkProyecto: "https://libreriaonlinezwilling.netlify.app/"
        },
        {
            img: "/images/cartaweb.webp",
            titulo: "Carta Restaurante Web",
            descripcion: "Carta de restaurante creada con React.js, CSS y JavaScript.",
            linkProyecto: "https://cartawebrestaurant.netlify.app/"
        },
        {
            img: "/images/cartawebdelivery.webp",
            titulo: "Carta de restaurante con delivery",
            descripcion: "Carta de delivery creada con React.js, CSS y JavaScript.",
            linkProyecto: "https://cartawebdelivery.netlify.app/"
        },
        {
            img: "/images/hp.png",
            titulo: "Test Harry Potter",
            descripcion: "Test interactivo creado con HTML, CSS y JavaScript.",
            linkProyecto: "https://test-hpotter.netlify.app/"
        },
        {
            img: "/images/proyecto-libreria.webp",
            titulo: "Ecommerce - Librería",
            descripcion: "Esta es mi primer ecommerce de librería creada a partir de React.js, CSS, JavaScript y HTML.",
            linkProyecto: "https://libreriaonlinezwilling.web.app/"
        }
        
        
    ];

    return (
        <section className="misTrabajos-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="mis_trabajos_1 section-title text-center">MIS TRABAJOS</h1>
                </div>
            </div>
           
            <div className="row justify-content-center g-2">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <Carta
                            img={proyecto.img}
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            linkProyecto={proyecto.linkProyecto}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MisTrabajos;