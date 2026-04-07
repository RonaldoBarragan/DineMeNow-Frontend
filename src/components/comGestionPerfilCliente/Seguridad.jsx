import { Card, Form, Button } from 'react-bootstrap';
import { Key } from 'react-bootstrap-icons';
import './style.css';

export default function SeguridadPerfilCliente() {
  return (
    <Card className="cardGestionPerfilCliente p-3 mt-4">
      <Card.Body>
        {/* Título con Icono de Llave */}
        <div className="d-flex align-items-center mb-4">
          <Key size={20} className="me-2" style={{ transform: 'rotate(-45deg)' }} />
          <h5 className="mb-0 gestioncliente-Title" >
            Cambiar Contraseña
          </h5>
        </div>

        <Form>
          {/* Contraseña Actual */}
          <Form.Group className="mb-3" controlId="currentPassword">
            <Form.Label className="gestioncliente-label">Contraseña Actual</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="inputFormSeguridad"
            />
          </Form.Group>

          {/* Nueva Contraseña */}
          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label className="gestioncliente-label">Nueva Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="inputFormSeguridad"
            />
          </Form.Group>

          {/* Confirmar Nueva Contraseña */}
          <Form.Group className="mb-4" controlId="confirmPassword">
            <Form.Label className="gestioncliente-label">Confirmar Nueva Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="inputFormSeguridad"
            />
          </Form.Group>

          {/* Botón de Acción */}
          <Button className="buttonNaranjaDegrade">
            Actualizar Contraseña
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}