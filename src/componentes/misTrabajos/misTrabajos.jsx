// src/componentes/misTrabajos/misTrabajos.jsx
import React from "react";
import Carta from "../carta/carta";
import "./misTrabajos.css";
import { useLanguage } from "../../context/LanguageContext";

function MisTrabajos() {
    const { t, tArray } = useLanguage();

    // ... (tu lógica para proyectosBase y proyectosTraducidosTextos se mantiene igual) ...
     const proyectosBase = [ // Asegúrate que estos datos coinciden con los que tenías
        
        {
            img: "/images/e-app.png",
            linkProyecto: "https://e-appweb.netlify.app/"
        },
        {
            img: "/images/hotel.png",
            linkProyecto: "https://demo-hotel-eapp.netlify.app/"
        },
        {
            img: "/images/tienda-ropa.png",
            linkProyecto: "https://tiendaropa-e-app.netlify.app/"
        },
        {
            img: "/images/library.png",
            linkProyecto: "https://libreriaonlinezwilling.netlify.app/"
        },
        {
            img: "/images/hp.png",
            linkProyecto: "https://test-hpotter.netlify.app/"
        },
        {
            img: "/images/cartawebdelivery.webp",
            linkProyecto: "https://cartawebdelivery.netlify.app/"
        },
        {
            img: "/images/cartaweb.webp",
            linkProyecto: "https://cartawebrestaurant.netlify.app/"
        },
        
        {
            img: "/images/proyecto-libreria.webp",
            linkProyecto: "https://libreriaonlinezwilling.web.app/"
        }
    ];

    const proyectosTraducidosTextos = tArray('misTrabajos.projects');

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
           
            {/* Usamos g-4 o g-md-5 para más espaciado en desktop si se desea */}
            <div className="row justify-content-center g-4 g-lg-5">
                {proyectos.map((proyecto, index) => (
                    // d-flex y align-items-stretch son importantes para que las cartas tengan la misma altura si su contenido varía
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