import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './CardSupTitle.css';
import { LuUtensilsCrossed } from "react-icons/lu";

function CardSupTitle () {
  return (
    <Container className='Card-CardSupTitle'>
      <Card className='CardSupTitle-card'>
        <Card.Body className="d-flex align-items-center gap-3">

          {/* ICONO */}
          <LuUtensilsCrossed className="icono-title" />

          {/* TEXTO */}
          <div>
            <Card.Title className='titulo'>Panel de mesero</Card.Title>
            <Card.Text className='text'>
              Carlos Rodríguez - la mesa criolla
            </Card.Text>
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardSupTitle;