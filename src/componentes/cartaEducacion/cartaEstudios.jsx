import "./cartaEstudios.css";


function CartaEstudios ({titulo, certificado}) {

    const handleOpenImage = () => {
        window.open(certificado, "_blank");
    };

    return (
        <>
            <div className="container-cartaEstudios">
                <div className="row">
                    <div className="cartaEstudios_1 col-12">{titulo}</div>
                    <div className="cartaEstudios_2 col-12"><button className="botonEstudios" onClick={handleOpenImage}>Certificado</button></div>
                </div>
            </div>
        </>
    )
}

export default CartaEstudios;