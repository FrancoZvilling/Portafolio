import React from "react";
import "./sobreMi.css";
import "bootstrap/dist/css/bootstrap.min.css";


function SobreMi (){
    return(
        <>
            <div className="container-sobre_mi">
                <div className="row">
                    <div className="sobre_mi_1 col-12 p-4 d-flex align-items-center">SOBRE MÍ</div>
                    <div className="sobre_mi_2 col-12 p-4 pt-1 d-flex align-items-center">
                        Desde niño, siempre me fascinó el mundo de la tecnología. Durante la pandemia, al observar el auge de las carreras tecnológicas y la posibilidad de trabajar desde una computadora, decidí sumergirme en el universo de la programación. <br /> 
                        Hoy, soy un desarrollador frontend con sólidas habilidades en HTML, CSS y JavaScript, además de experiencia en frameworks como React y librerías como Bootstrap y SASS.
                    </div>
                    <div className="sobre_mi_3 col-12 p-4 d-flex align-items-center">Estoy entusiasmado por dar el siguiente paso en mi carrera profesional, aportando motivación, energía y una gran pasión por la tecnología y el desarrollo web.</div>
                    <div className="sobre_mi_4 col-12 p-4 d-flex align-items-center">Si querés saber más sobre mí, podés ver mi <a href="https://www.linkedin.com/in/francozvilling/">Linkedin</a></div>
                </div>
            </div>
        </>
    )
}

export default SobreMi; 