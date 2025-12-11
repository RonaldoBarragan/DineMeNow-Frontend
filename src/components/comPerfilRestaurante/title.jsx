import Card from 'react-bootstrap/Card';
import './Title.css';
import { Container } from 'react-bootstrap';
function Title () {
  return (
    <Container className='Card'>
    <Card >
      <Card.Body>
        <Card.Title className='title' >Perfil de Restaurante</Card.Title>
        <Card.Text className='text'>
          Gestiona la información y configuración de tu restaurante
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}
export default Title;