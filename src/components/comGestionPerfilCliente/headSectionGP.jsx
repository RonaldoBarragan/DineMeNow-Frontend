import Card from 'react-bootstrap/Card';
import './style.css';

export default function HeadSectionGp() {
    return (
    <Card className='cardGestionPerfilCliente'>
      <Card.Body>
        <Card.Title className='mb-3'>Gestión de perfil</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Administra tu información personal y preferencias</Card.Subtitle>
      </Card.Body>
    </Card>
   
    )
}