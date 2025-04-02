import "./educacion.css";
import CartaEstudios from "../cartaEducacion/cartaEstudios";

function Educacion () {
    return(
        <>
            <div className="container-educacion">
                <div className="row">
                    <div className="educacion_1 col-12 d-flex align-items-center">MIS ESTUDIOS</div>
                    <CartaEstudios titulo={"Carrera de desarrollo Frontend React - Septiembre de 2023"} certificado={"/Frontend.png"}/>
                    <CartaEstudios titulo={"React.js - Septiembre de 2023"} certificado={"/React.png"}/>
                    <CartaEstudios titulo={"JavaScript - Junio de 2023"} certificado={"/JavaScript.png"}/>
                    <CartaEstudios titulo={"Desarrollo web - Abril de 2023"} certificado={"/Desarrollo_web.png"}/>
                </div>
            </div>
            
        </>
    )
}

export default Educacion;