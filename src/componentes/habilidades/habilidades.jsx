// src/componentes/habilidades/habilidades.jsx
import React from "react";
import "./habilidades.css";
import CartaHabilidades from "../cartaHabilidades/cartaHabilidades"; // Ajusta la ruta si es necesario
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaGitSquare, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaSass } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";

function Habilidades() {
    const { t } = useLanguage();

    // Los componentes de íconos y clases CSS son fijos
    // Los nombres se obtienen del archivo de traducción
    const iconosLenguajes = [
        { componente: TiHtml5, clase: "icon-html", nombre: t("habilidades.skillsList.html") },
        { componente: FaCss3Alt, clase: "icon-css", nombre: t("habilidades.skillsList.css") },
        { componente: IoLogoJavascript, clase: "icon-js", nombre: t("habilidades.skillsList.javascript") },
    ];
    const iconosLibreriasFrameworks = [
        { componente: FaBootstrap, clase: "icon-bootstrap", nombre: t("habilidades.skillsList.bootstrap") },
        { componente: FaReact, clase: "icon-react", nombre: t("habilidades.skillsList.react") },
    ];
    const iconosHerramientas = [
        { componente: FaGitSquare, clase: "icon-git", nombre: t("habilidades.skillsList.git") },
        { componente: FaGithub, clase: "icon-github", nombre: t("habilidades.skillsList.github") },
        { componente: FaNodeJs, clase: "icon-node", nombre: t("habilidades.skillsList.node") },
        { componente: FaSass, clase: "icon-sass", nombre: t("habilidades.skillsList.sass") },
    ];

    return (
        <section className="habilidades-section container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="habilidades_1 section-title text-center">{t('habilidades.title')}</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-11 col-lg-9">
                    <CartaHabilidades titulo={t("habilidades.languages")} iconos={iconosLenguajes} />
                    <CartaHabilidades titulo={t("habilidades.librariesFrameworks")} iconos={iconosLibreriasFrameworks} />
                    <CartaHabilidades titulo={t("habilidades.toolsAndOthers")} iconos={iconosHerramientas} />
                </div>
            </div>
        </section>
    );
}

export default Habilidades;