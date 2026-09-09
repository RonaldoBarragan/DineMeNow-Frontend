import { Card, Button, Modal } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import './style.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { eliminarCliente } from '../../api/Client-Service';
import { Navigate } from 'react-router-dom';

export default function CuentaPerfilCliente() {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useAuth();

  const handleCerrarSesion = async () => {
    try {
      await eliminarCliente(user.id);
    } catch (error) {
      console.error('Error cerrando sesión en el backend:', error);
      // Opcional: Decidir si continúas o detienes el logout local en caso de error HTTP
    } finally {
      // 2. Limpieza del estado global en React y localStorage (siempre se ejecuta)
      logout();
      Navigate('/');
    }
  };

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

          <Button className="btn-eliminar-cuenta " size='sm' onClick={() => setShowModal(true)}>
            <Trash size={18} />
            Eliminar Cuenta
          </Button>
        </Card.Body>
      </Card>


      {/* Modal de Confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fs-5">Confirmar eliminación de cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            ¿Estás seguro de que deseas eliminar tu cuenta?<br /><strong>Esta acción es irreversible</strong>, tu sesion terminara y perderás todos tus datos.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleCerrarSesion}>Sí, eliminar mi cuenta</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}