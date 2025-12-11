import Card from 'react-bootstrap/Card';
import './headSectionGP.css';

export default function HeadSectionGp() {
    return (
    <Card className='cardHeadSectionGP'>
      <Card.Body>
        <Card.Title className='mb-3'>Gestión de perfil</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Administra tu información personal y preferencias</Card.Subtitle>
      </Card.Body>
    </Card>
   
    )
}