import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./carta.css"

function Carta({img, titulo, descripcion}) {
  return (
    <Card >
      <Card.Img variant="top" src={img}  />
      <Card.Body className='card_body'>
        <Card.Title className='card_title'>{titulo}</Card.Title>
        <Card.Text className='card_text'>
          {descripcion}
        </Card.Text>
        <a href="https://libreriaonlinezwilling.web.app/"><Button>Ir al proyecto</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Carta;