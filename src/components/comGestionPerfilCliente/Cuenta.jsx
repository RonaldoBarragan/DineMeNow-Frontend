import { Card, Button } from 'react-bootstrap';
import { Trash, ExclamationTriangle } from 'react-bootstrap-icons';
import './style.css';

export default function CuentaPerfilCliente() {
  return (
    <>
      {/* Tarjeta: Información de Cuenta */}
      <Card className="cardGestionPerfilCliente p-2 mt-4">
        <Card.Body>
          <h5 className="gestioncliente-Title mb-4">Información de Cuenta</h5>
          
          <div className="info-cuenta-item">
            <span className="info-cuenta-label">ID de Usuario:</span>
            <span className="text-muted">user-001</span>
          </div>
          
          <div className="info-cuenta-item">
            <span className="info-cuenta-label">Fecha de Registro:</span>
            <span className="text-muted">14/1/2024</span>
          </div>
          
          <div className="info-cuenta-item">
            <span className="info-cuenta-label">Último Acceso:</span>
            <span className="text-muted">Hoy</span>
          </div>
        </Card.Body>
      </Card>

      {/* Tarjeta: Zona Peligrosa */}
      <Card className="cardGestionPerfilCliente card-danger p-3 mt-4">
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            <Trash className="text-danger-custom me-2" size={18} />
            <h5 className="mb-0 text-danger-custom">Zona Peligrosa</h5>
          </div>

          <div className="mb-3">
            <h6 className="fw-bold text-danger">Eliminar Cuenta</h6>
            <h6 className="text-muted p-0" >
              Esta acción eliminará permanentemente tu cuenta y todos los datos asociados. 
              Esta acción no se puede deshacer.
            </h6>
          </div>

          <Button className="btn-eliminar-cuenta " size='sm'>
            <Trash size={18} />
            Eliminar Cuenta
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}