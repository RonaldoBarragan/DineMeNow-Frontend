import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Title.css'
function Title () {
  return (
    <Container className='Card-title'>
    <Card className='title-card'>
      <Card.Body>
        <Card.Title className='titulo' >Perfil de Restaurante</Card.Title>
        <Card.Text className='text'>
          Gestiona la información y configuración de tu restaurante
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}
export default Title;