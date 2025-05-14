import React from "react";
import "./cartaEstudios.css";

function CartaEstudios ({titulo, certificadoPath}) {
    const handleOpenCertificate = () => {
        // Asumimos que certificadoPath es como "/certificates/React.png"
        // process.env.PUBLIC_URL es útil si tu app no está en la raíz del dominio.
        // Si está en la raíz, `certificadoPath` directo funciona.
        window.open(process.env.PUBLIC_URL + certificadoPath, "_blank");
    };

    return (
        <div className="carta-estudios-item">
            <h3 className="cartaEstudios_titulo">{titulo}</h3>
            {certificadoPath && ( // Solo muestra el botón si hay un certificadoPath
                <button className="botonEstudios" onClick={handleOpenCertificate}>
                    Ver Certificado
                </button>
            )}
        </div>
    );
}

export default CartaEstudios;