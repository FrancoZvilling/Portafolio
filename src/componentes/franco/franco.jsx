import React from "react";
import "./franco.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Franco (){
    return(
        <>
            <div className="container-franco">
                <div className="row">
                    <div className="franco_1 col-12 d-flex align-items-center">FRANCO ZVILLING</div>
                    <div className="franco_2 col-12 pt-1 d-flex align-items-center">DESARROLLADOR FRONTEND</div>
                    <div className="franco_3 col-12 py-4 d-flex align-items-center">TE DOY LA BIENVENIDA A MI PORTAFOLIO WEB</div>
                    <div className="franco_4 col-12  d-flex align-items-center">Si querés contactarme podés escribirme a<a href="https://wa.me/3541315119"> +543541315119</a></div>
                    <div className="franco_5 col-1"><a href="/CV-2025.pdf" download><button>Descarga mi CV</button></a></div>
                    
                </div>
            </div>
        </>
    )
}

export default Franco; 