import React from "react";
import "./sobreMi.css"; // Asegúrate que el CSS se llame sobreMi.css

function SobreMi() {
    return (
        <section className="sobreMi-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="text-center text-md-start"> {/* Centrado en móvil, a la izquierda en desktop */}
                        <h1 className="sobre_mi_1 section-title">SOBRE MÍ</h1>
                        <p className="sobre_mi_2 mb-responsive">
                            Desde niño, siempre me fascinó el mundo de la tecnología. Durante la pandemia, al observar el auge de las carreras tecnológicas y la posibilidad de trabajar desde una computadora, decidí sumergirme en el universo de la programación. <br /> <br /> {/* <br /> extra para más separación */}
                            Hoy, soy un desarrollador frontend con sólidas habilidades en HTML, CSS y JavaScript, además de experiencia en frameworks como React y librerías como Bootstrap y SASS.
                        </p>
                        <p className="sobre_mi_3 mb-responsive">
                            Estoy entusiasmado por dar el siguiente paso en mi carrera profesional, aportando motivación, energía y una gran pasión por la tecnología y el desarrollo web.
                        </p>
                        <p className="sobre_mi_4">
                            Si querés saber más sobre mí, podés ver mi{" "}
                            <a href="https://www.linkedin.com/in/francozvilling/" target="_blank" rel="noopener noreferrer">
                                Linkedin
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SobreMi;