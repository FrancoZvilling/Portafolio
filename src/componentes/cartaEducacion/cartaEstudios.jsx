// src/componentes/cartaEducacion/cartaEstudios.jsx
import React from "react";
import "./cartaEstudios.css";
import { useLanguage } from "../../context/LanguageContext";

function CartaEstudios ({titulo, certificadoPath}) {
    const { t } = useLanguage();

    const handleOpenCertificate = () => {
        window.open(process.env.PUBLIC_URL + certificadoPath, "_blank");
    };

    return (
        <div className="carta-estudios-item">
            <h3 className="cartaEstudios_titulo">{titulo}</h3>
            {certificadoPath && (
                <button className="botonEstudios" onClick={handleOpenCertificate}>
                    {t('cartaEstudios.viewCertificate')}
                </button>
            )}
        </div>
    );
}

export default CartaEstudios;