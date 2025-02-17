import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./carta.css"

function Carta({img, titulo, descripcion}) {
  return (
    <Card >
      <Card.Img variant="top" src={img}  />
      <Card.Body>
        <Card.Title className='card_title'>{titulo}</Card.Title>
        <Card.Text className='card_text'>
          {descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;