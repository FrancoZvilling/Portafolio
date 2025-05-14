import React from "react";
import "./habilidades.css"; // Asegúrate que el nombre del archivo CSS coincida
import CartaHabilidades from "../cartaHabilidades/cartaHabilidades";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaGitSquare, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaSass } from "react-icons/fa6";

function Habilidades() {
    const iconosLenguajes = [
        { componente: TiHtml5, clase: "icon-html", nombre: "HTML" },
        { componente: FaCss3Alt, clase: "icon-css", nombre: "CSS" },
        { componente: IoLogoJavascript, clase: "icon-js", nombre: "JavaScript" },
    ];
    const iconosLibreriasFrameworks = [
        { componente: FaBootstrap, clase: "icon-bootstrap", nombre: "Bootstrap" },
        { componente: FaReact, clase: "icon-react", nombre: "React.js" },
    ];
    const iconosHerramientas = [
        { componente: FaGitSquare, clase: "icon-git", nombre: "Git" },
        { componente: FaGithub, clase: "icon-github", nombre: "GitHub" },
        { componente: FaNodeJs, clase: "icon-node", nombre: "Node.js" },
        { componente: FaSass, clase: "icon-sass", nombre: "Sass" },
    ];

    return (
        <section className="habilidades-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="habilidades_1 section-title text-center">HABILIDADES</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-11 col-lg-9">
                    <CartaHabilidades titulo={"Lenguajes"} iconos={iconosLenguajes} />
                    <CartaHabilidades titulo={"Librerías y Frameworks"} iconos={iconosLibreriasFrameworks} />
                    <CartaHabilidades titulo={"Herramientas y Otros"} iconos={iconosHerramientas} />
                </div>
            </div>
        </section>
    );
}

export default Habilidades;