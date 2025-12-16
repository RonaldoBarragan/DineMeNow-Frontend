import { Container, Row, Col, Card } from 'react-bootstrap';
import { Person, Pencil, Envelope, Telephone, GeoAlt, CameraFill } from 'react-bootstrap-icons';
import './style.css';

export default function PerfilCliente() {
  return (
    <Container className="py-3" >
      <Row>
        {/* COLUMNA IZQUIERDA: INFORMACIÓN PERSONAL */}
        <Col md={7}>
          <Card className="cardGestionPerfilCliente p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <Person size={20} className="me-2" />
                <h5 className="mb-0 gestioncliente-Title">Información Personal</h5>
              </div>
              <button className="btn-editar-perfil d-flex align-items-center">
                <Pencil size={14} className="me-2" /> Editar
              </button>
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Nombre Completo</div>
              <div className="gestioncliente-dato">María González</div>
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Email</div>
              <div className="gestioncliente-dato"><Envelope className="me-2"/> cliente@gmail.com</div>
              <div className="gestioncliente-nota">El email no se puede cambiar</div>
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Teléfono</div>
              <div className="gestioncliente-dato"><Telephone className="me-2"/> 3001234567</div>
            </div>

            <div className="mb-0">
              <div className="gestioncliente-label">Dirección</div>
              <div className="gestioncliente-dato"><GeoAlt className="me-2"/> Calle 123 #45-67, Bogotá</div>
            </div>
          </Card>
        </Col>

        {/* COLUMNA DERECHA: FOTO Y ESTADÍSTICAS */}
        <Col md={5}>
          {/* Tarjeta Foto de Perfil */}
          <Card className="cardGestionPerfilCliente p-4 mb-4 text-center">
            <h5 className="text-start mb-4 gestioncliente-Title">Foto de Perfil</h5>
            <div className="avatar-circle">
              MG
              <div className="camera-icon-badge">
                <CameraFill size={16} />
              </div>
            </div>
            <p className=" text-centerperfil-dato mt-2" >
              Haz clic en el icono para cambiar tu foto
            </p>
          </Card>

          {/* Tarjeta Estadísticas */}
          <Card className="cardGestionPerfilCliente p-4">
            <h5 className="mb-3 gestioncliente-Title">Estadísticas</h5>
            
            <div className="stat-row">
              <span className="stat-label">Reservas totales:</span>
              <span className="stat-value">15</span>
            </div>
            
            <div className="stat-row">
              <span className="stat-label">Completadas:</span>
              <span className="stat-value text-success-custom">12</span>
            </div>
            
            <div className="stat-row">
              <span className="stat-label">Canceladas:</span>
              <span className="stat-value text-danger-custom">2</span>
            </div>
            
            <div className="stat-row">
              <span className="stat-label">Miembro desde:</span>
              <span className="stat-value">14/1/2024</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}