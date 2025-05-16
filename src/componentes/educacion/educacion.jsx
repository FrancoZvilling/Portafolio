// src/componentes/educacion/educacion.jsx
import React from "react";
import "./educacion.css";
import CartaEstudios from "../cartaEducacion/cartaEstudios"; // Ajusta la ruta si es necesario
import { useLanguage } from "../../context/LanguageContext";

function Educacion () {
    const { t, tArray } = useLanguage();

    // Los paths de los certificados son fijos
    const certificadosPaths = [
        "/certificates/Frontend.png",
        "/certificates/React.png",
        "/certificates/JavaScript.png",
        "/certificates/Desarrollo_web.png"
    ];

    // Obtenemos los títulos traducidos del array 'educacion.studies'
    const estudiosTraducidos = tArray('educacion.studies');

    // Combinamos los títulos traducidos con sus respectivos paths de certificado
    const estudios = estudiosTraducidos.map((estudio, index) => ({
        titulo: estudio.title, // 'title' es la clave dentro de cada objeto en el array JSON
        certificadoPath: certificadosPaths[index] || null // Aseguramos que haya un path
    }));

    return(
        <section className="educacion-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="educacion_1 section-title text-center">{t('educacion.title')}</h1>
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