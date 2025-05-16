// src/componentes/misTrabajos/misTrabajos.jsx
import React from "react";
import Carta from "../carta/carta";
import "./misTrabajos.css";
import { useLanguage } from "../../context/LanguageContext";

function MisTrabajos() {
    const { t, tArray } = useLanguage();

    // Datos base de los proyectos (imágenes y links son fijos)
    const proyectosBase = [
        {
            img: "/images/library.png",
            linkProyecto: "https://libreriaonlinezwilling.netlify.app/"
        },
        {
            img: "/images/cartaweb.webp",
            linkProyecto: "https://cartawebrestaurant.netlify.app/"
        },
        {
            img: "/images/cartawebdelivery.webp",
            linkProyecto: "https://cartawebdelivery.netlify.app/"
        },
        {
            img: "/images/hp.png",
            linkProyecto: "https://test-hpotter.netlify.app/"
        },
        {
            img: "/images/proyecto-libreria.webp",
            linkProyecto: "https://libreriaonlinezwilling.web.app/"
        }
    ];

    // Obtenemos los títulos y descripciones traducidos del array 'misTrabajos.projects'
    const proyectosTraducidosTextos = tArray('misTrabajos.projects');

    // Combinamos los textos traducidos con los datos base
    const proyectos = proyectosBase.map((proyectoBase, index) => {
        const textoTraducido = proyectosTraducidosTextos[index] || { titulo: "Project", descripcion: "Description missing" };
        return {
            ...proyectoBase,
            titulo: textoTraducido.titulo,
            descripcion: textoTraducido.descripcion
        };
    });

    return (
        <section className="misTrabajos-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="mis_trabajos_1 section-title text-center">{t('misTrabajos.title')}</h1>
                </div>
            </div>
        
            <div className="row justify-content-center g-4"> {/* g-2 a g-4 para más espacio */}
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