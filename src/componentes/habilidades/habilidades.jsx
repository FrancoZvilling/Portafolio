import "./habilidades.css";
import CartaHabilidades from "../cartaHabilidades/cartaHabilidades";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaGitSquare, FaGithub, FaNodeJs  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaSass } from "react-icons/fa6";

function habilidades () {

    const iconos = [
        { componente: TiHtml5, clase: "icon-html", nombre: "HTML" },
        { componente: FaCss3Alt, clase: "icon-css", nombre: "CSS" },
        { componente: IoLogoJavascript, clase: "icon-js", nombre: "JavaScript" },
      ];

      const iconos2 = [
        { componente: FaBootstrap, clase: "icon-bootstrap", nombre: "Bootstrap" },
        { componente: FaReact, clase: "icon-react", nombre: "React.js" },
      ];

    const iconos3 = [
        { componente: FaGitSquare, clase: "icon-git", nombre: "Git" },
        { componente: FaGithub , clase: "icon-github", nombre: "Github" },
        { componente: FaNodeJs , clase: "icon-node", nombre: "Node.Js" },
        { componente: FaSass , clase: "icon-sass", nombre: "Sass" },
      ];

    return(
        <div className="container-habilidades">
            <div className="row">
                <div className="habilidades_1 col-12 d-flex align-items-center">HABILIDADES</div>
                <CartaHabilidades titulo={"LENGUAJES"} iconos={iconos}/>
                <CartaHabilidades titulo={"LIBRERIAS"} iconos={iconos2}/>
                <CartaHabilidades titulo={"HERRAMIENTAS"} iconos={iconos3}/>
            </div>
        </div>
    )
}

export default habilidades;