import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'; // No lo usaremos directamente
import "./carta.css";

function Carta({ img, titulo, descripcion, linkProyecto }) {
  return (
    <Card className="project-card h-100 shadow"> {/* h-100 para misma altura en flexbox, shadow para profundidad */}
      <Card.Img 
        variant="top" 
        src={img} 
        alt={`Imagen del proyecto ${titulo}`} 
        loading="lazy"
        className="project-card-img"
      />
      <Card.Body className='d-flex flex-column'> {/* Para que el botón se alinee abajo */}
        <Card.Title as="h3" className='project-card-title'>{titulo}</Card.Title> {/* Título semántico */}
        <Card.Text className='project-card-text flex-grow-1'>
          {descripcion}
        </Card.Text>
        <a 
            href={linkProyecto} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-project-link mt-auto align-self-center" // mt-auto y align-self-center
        >
          Ir al proyecto
        </a>
      </Card.Body>
    </Card>
  );
}

export default Carta;