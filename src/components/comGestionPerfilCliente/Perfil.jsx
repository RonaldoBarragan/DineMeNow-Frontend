import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Person, Pencil, Envelope, Telephone, GeoAlt, CameraFill } from 'react-bootstrap-icons';
import './style.css';
import { consultarPerfil } from '../../api/Client-Service'; // Asegúrate de tener esta función en tu servicio
import { useEffect, useState} from 'react';
import { useAuth } from '../../context/AuthContext';  // ← esto falta

export default function PerfilCliente() {
  const { user } = useAuth();     
  const [perfilData, setPerfilData] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  const abrirModalEdicion = () => {
    setOriginalData(perfilData);          // snapshot inmutable
    setFormData({ ...perfilData });       // copia editable
    setMostrar(true);
  };

  useEffect(() => {
    if (!user?.id || !user?.token) return;                            
    
    const cargarPerfil = async () => {
      try {
        const data = await consultarPerfil(user.id);  // ← usa el id del contexto
        
        setPerfilData(data);
  
      } catch (error) {
        console.error("Error al cargar datos de perfil:", error);
      }
    };
    cargarPerfil();
  }, [user?.id, user?.token]);

  // Lógica para las iniciales del círculo (MG por defecto o las reales)
  const initials = perfilData?.nombreCliente 
    ? `${perfilData.nombreCliente[0]}${perfilData.apellido[0]}`.toUpperCase()
    : user?.nombre?.[0]?.toUpperCase() || "JP";//plan b

  return (
    <>
    <Container className="p-0" >
      <Row className="p-0">
        {/* COLUMNA IZQUIERDA: INFORMACIÓN PERSONAL */}
        <Col md={7}>
          <Card className="cardGestionPerfilCliente p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <Person size={20} className="me-2" />
                <h5 className="mb-0 gestioncliente-Title">Información Personal</h5>
              </div>
              <Button className="btn-editar-perfil d-flex align-items-center" onClick={abrirModalEdicion}><Pencil size={14} className="me-2" /> Editar</Button>
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Nombre Completo</div>
              <div className="gestioncliente-dato">{perfilData?.nombreCliente ? `${perfilData.nombreCliente} ${perfilData.apellido || ""}` : 'Cargando...'}</div>
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Email</div>
              <div className="gestioncliente-dato"><Envelope className="me-2"/> {perfilData ? perfilData.correo : 'Cargando...'}</div>
              {/* <div className="gestioncliente-nota">El email no se puede cambiar</div> */}
            </div>

            <div className="mb-3">
              <div className="gestioncliente-label">Teléfono</div>
              <div className="gestioncliente-dato"><Telephone className="me-2"/> {perfilData ? perfilData.telefono : 'Cargando...'}</div>
            </div>

            <div className="mb-0">
              <div className="gestioncliente-label">Dirección</div>
              <div className="gestioncliente-dato"><GeoAlt className="me-2"/> {perfilData?.direccion ? `${perfilData.direccion.calle}, ${perfilData.direccion.numero}, ${perfilData.direccion.ciudad}` : 'Cargando...'}</div>
            </div>
          </Card>
        </Col>

        {/* COLUMNA DERECHA: FOTO Y ESTADÍSTICAS */}
        <Col md={5}>
          {/* Tarjeta Foto de Perfil */}
          <Card className="cardGestionPerfilCliente p-4 mb-4 text-center">
            <h5 className="text-start mb-4 gestioncliente-Title">Foto de Perfil</h5>
            <div className="avatar-circle">
              {initials}
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
              <span className="stat-value">1/09/2026</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

    <Modal show={mostrar} onHide={() => setMostrar(false)} centered>
      <Modal.Header closeButton>
          <Modal.Title>Edita tu perfil </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            {/* Nombres */}
            <Col>
            <Form.Group className="mb-4" controlId="firstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-4" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu apellido"/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Documento */}
            <Form.Group className="mb-4" controlId="typeDocument">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Select name="tipo">
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="PA">PA</option>
              </Form.Select>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-4" controlId="documentNumber">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu número de documento"/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Direccion */}
            <Form.Group className="mb-4" controlId="calle">
              <Form.Label>Calle</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu calle"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-4" controlId="numero">
              <Form.Label>Numero</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu número de direccion"/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-4" controlId="ciudad">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu ciudad"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-4" controlId="pais">
              <Form.Label>Pais</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu país"/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Contacto */}
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="example@mail.com"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-4" controlId="telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu número de teléfono"/>
            </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button className="buttonNaranjaDegrade">Guardar cambios</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}