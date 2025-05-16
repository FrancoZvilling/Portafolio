// src/componentes/carta/carta.jsx
import Card from 'react-bootstrap/Card';
import "./carta.css";
import { useLanguage } from "../../context/LanguageContext";

function Carta({ img, titulo, descripcion, linkProyecto }) {
  const { t } = useLanguage();

  return (
    // h-100 y d-flex ya están en el div padre en MisTrabajos.jsx para align-items-stretch
    // Así que la carta individual puede ser un poco más flexible si es necesario.
    // Mantenemos h-100 aquí para asegurar que el Card.Body se expanda bien con flex-column
    <Card className="project-card h-100 shadow-sm"> {/* Cambiado shadow a shadow-sm para un look base más sutil, el hover lo hará más pronunciado */}
      <div className="project-card-img-container">
        <Card.Img
          variant="top"
          src={img}
          alt={`${t('carta.altProjectImage')} ${titulo}`}
          loading="lazy"
          className="project-card-img"
        />
      </div>
      <Card.Body className='d-flex flex-column p-4'> {/* Aumentamos el padding interno */}
        <Card.Title as="h3" className='project-card-title mb-3'>{titulo}</Card.Title> {/* Añadido mb-3 */}
        <Card.Text className='project-card-text flex-grow-1 mb-3'> {/* Añadido mb-3 */}
          {descripcion}
        </Card.Text>
        <a
            href={linkProyecto}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project-link mt-auto align-self-start" // Cambiado align-self-center a align-self-start y ajustaremos el ancho
        >
          {t('carta.goToProject')}
        </a>
      </Card.Body>
    </Card>
  );
}

export default Carta;