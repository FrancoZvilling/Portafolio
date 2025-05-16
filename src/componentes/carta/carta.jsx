// src/componentes/carta/carta.jsx
import Card from 'react-bootstrap/Card';
import "./carta.css";
import { useLanguage } from "../../context/LanguageContext";

function Carta({ img, titulo, descripcion, linkProyecto }) {
  const { t } = useLanguage();

  return (
    <Card className="project-card h-100 shadow">
      <Card.Img 
        variant="top" 
        src={img} 
        alt={`${t('carta.altProjectImage')} ${titulo}`}
        loading="lazy"
        className="project-card-img"
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title as="h3" className='project-card-title'>{titulo}</Card.Title>
        <Card.Text className='project-card-text flex-grow-1'>
          {descripcion}
        </Card.Text>
        <a 
            href={linkProyecto} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-project-link mt-auto align-self-center"
        >
          {t('carta.goToProject')}
        </a>
      </Card.Body>
    </Card>
  );
}

export default Carta;