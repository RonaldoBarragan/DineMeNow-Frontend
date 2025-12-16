import { Card, Form } from 'react-bootstrap';
import { Bell } from 'react-bootstrap-icons';
import './style.css';

export default function NotificacionesPerfilCliente() {
  return (
    <Card className="cardGestionPerfilCliente p-3 mt-4">
      <Card.Body>
        {/* Título de la sección */}
        <div className="d-flex align-items-center mb-3">
          <Bell size={20} className="me-2" />
          <h5 className="mb-0 gestioncliente-Title">
            Preferencias de Notificaciones
          </h5>
        </div>

        <div className="notificaciones-container">
          <Form>
            {/* Confirmaciones de reserva */}
            <div className="notificacion-item">
              <div>
                <div className="gestioncliente-label mb-0">Confirmaciones de reserva por email</div>
                <p className="notificacion-descripcion">Recibe confirmaciones cuando hagas una reserva</p>
              </div>
              <Form.Check 
                type="switch"
                id="reserva-email"
                defaultChecked
              />
            </div>

            {/* Promociones */}
            <div className="notificacion-item">
              <div>
                <div className="gestioncliente-label mb-0">Promociones por email</div>
                <p className="notificacion-descripcion">Recibe ofertas especiales y promociones</p>
              </div>
              <Form.Check 
                type="switch"
                id="promociones-email"
              />
            </div>

            {/* Notificaciones push */}
            <div className="notificacion-item">
              <div>
                <div className="gestioncliente-label mb-0">Notificaciones push</div>
                <p className="notificacion-descripcion">Recibe recordatorios y actualizaciones en tiempo real</p>
              </div>
              <Form.Check 
                type="switch"
                id="push-notif"
                defaultChecked
              />
            </div>

            {/* Recordatorios por SMS */}
            <div className="notificacion-item">
              <div>
                <div className="gestioncliente-label mb-0">Recordatorios por SMS</div>
                <p className="notificacion-descripcion">Recibe recordatorios de tus reservas por mensaje de texto</p>
              </div>
              <Form.Check 
                type="switch"
                id="sms-notif"
                defaultChecked
              />
            </div>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}