import "./contacto.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


function Contacto() {
    return (
        <>
            <div className="container-contacto">
                <div className="row">
                    <div className="contacto_1 col-12">¡Contactame!</div>
                    <div className="contacto_2 col-12">
                        <MdEmail size={20} className="icon-email"/> <span className="titulo">Email:</span> <span className="email">francozvilling-programador@hotmail.com</span> <br />
                        <FaWhatsapp size={20} className="icon-whatsapp"/> <span className="titulo2">WhatsApp:</span>  <span className="whatsapp"><a className="link" href="https://wa.me/3541315119">+54 9 11 1234-5678</a></span> <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto;