import "./cartaHabilidades.css";

function CartaHabilidades({ titulo, iconos, nombre }) {
    return (
        <div className="container-cartaHabilidades">
            <div className="row">
                <div className="cartaHabilidades_titulo">{titulo}</div>
                <div className="cartaHabiliades_iconos">

                    {iconos.map(({ componente: Icono, clase, nombre }, index) => (
                        <div key={index} className="icono-con-nombre">
                            <Icono size={40} className={clase} />
                            <span className="nombre-icono">{nombre}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CartaHabilidades;