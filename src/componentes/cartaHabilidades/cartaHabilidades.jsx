// src/componentes/cartaHabilidades/cartaHabilidades.jsx
import React from "react";
import "./cartaHabilidades.css";
// No necesitas useLanguage aquí si los títulos y nombres de iconos vienen de props ya traducidos desde el componente padre (Habilidades.jsx)

function CartaHabilidades({ titulo, iconos }) { // Recibe título e iconos ya traducidos
    return (
        <div className="carta-habilidades-group mb-4">
            <h3 className="cartaHabilidades_titulo">{titulo}</h3>
            <div className="cartaHabiliades_iconos-container">
                {iconos.map(({ componente: Icono, clase, nombre }, index) => (
                    <div key={index} className="icono-con-nombre">
                        <Icono size={45} className={`skill-icon ${clase || ''}`} />
                        <span className="nombre-icono">{nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartaHabilidades;