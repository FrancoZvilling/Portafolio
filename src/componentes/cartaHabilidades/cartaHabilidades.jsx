import React from "react";
import "./cartaHabilidades.css";

function CartaHabilidades({ titulo, iconos }) {
    return (
        <div className="carta-habilidades-group mb-4"> {/* mb-4 para espacio entre grupos */}
            <h3 className="cartaHabilidades_titulo">{titulo}</h3>
            <div className="cartaHabiliades_iconos-container">
                {iconos.map(({ componente: Icono, clase, nombre }, index) => (
                    <div key={index} className="icono-con-nombre">
                        <Icono size={45} className={`skill-icon ${clase || ''}`} /> {/* Clase genérica y específica */}
                        <span className="nombre-icono">{nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartaHabilidades;