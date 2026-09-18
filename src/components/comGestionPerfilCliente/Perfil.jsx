import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Person, Pencil, Envelope, Telephone, GeoAlt, CameraFill } from 'react-bootstrap-icons';
import './style.css';
import { actualizarPerfil, consultarPerfil, getMyReservas } from '../../api/Client-Service'; // Asegúrate de tener esta función en tu servicio
import { useEffect, useState} from 'react';
import { useAuth } from '../../context/AuthContext';  // ← esto falta

export default function PerfilCliente() {
  const { user } = useAuth();
  const [perfilData, setPerfilData] = useState(null);
  const [reservasData, setReservasData] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [errores, setErrores] = useState({});

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
        const dataReservas = await getMyReservas();
        
        setPerfilData(data);
        setReservasData(dataReservas);
  
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

    const mapaCampos = {
    tipo: { grupo: "documento", campo: "tipo" },
    numeroDocumento: { grupo: "documento", campo: "numero" },
    calle: { grupo: "direccion", campo: "calle" },
    numeroDireccion: { grupo: "direccion", campo: "numero" },
    ciudad: { grupo: "direccion", campo: "ciudad" },
    pais: { grupo: "direccion", campo: "pais" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const mapeo = mapaCampos[name];

    if (mapeo) {
      setFormData(prev => ({
        ...prev,
        [mapeo.grupo]: { ...prev[mapeo.grupo], [mapeo.campo]: value }
      }));
      if (value.trim() !== "") {
        setErrores(prev => ({ ...prev, [`${mapeo.grupo}.${mapeo.campo}`]: undefined }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (value.trim() !== "") {
        setErrores(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const camposRequeridos = {
    nombreCliente: "Nombre",
    apellido: "Apellido",
    correo: "Correo",
    telefono: "Teléfono",
    "documento.tipo": "Tipo de documento",
    "documento.numero": "Número de documento",
    "direccion.calle": "Calle",
    "direccion.numero": "Número de dirección",
    "direccion.ciudad": "Ciudad",
    "direccion.pais": "País",
  };

  const validarCampos = (original, current) => {
    const nuevosErrores = {};

    Object.entries(camposRequeridos).forEach(([path, label]) => {
      const [grupo, sub] = path.split(".");
      const valorActual = sub ? current?.[grupo]?.[sub] : current?.[grupo];
      const valorOriginal = sub ? original?.[grupo]?.[sub] : original?.[grupo];

      const actualVacio = !valorActual || valorActual.trim() === "";
      const originalTeniaDato = valorOriginal && valorOriginal.trim() !== "";

      if (originalTeniaDato && actualVacio) {
        nuevosErrores[path] = `${label} no puede quedar vacío`;
      }
    });

    return nuevosErrores;
  };

  const handleGuardar = async () => {
    const erroresEncontrados = validarCampos(originalData, formData);
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    setErrores({});

    try {
      // Se envía formData completo, sin importar qué cambió o no
      const actualizado = await actualizarPerfil(user.id, formData);
      setPerfilData(actualizado);
      setMostrar(false);
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
    }
  };

  const contarPorEstado = (reservas, estado) => {
  return reservas.filter((reserva) => reserva.estado === estado).length;
};

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
              <span className="stat-value">{reservasData.length}</span>
            </div>
            
            <div className="stat-row">
              <span className="stat-label">Completadas:</span>
              <span className="stat-value text-success-custom">{contarPorEstado(reservasData, "COMPLETADA")}</span>
            </div>
            
            <div className="stat-row">
              <span className="stat-label">Canceladas:</span>
              <span className="stat-value text-danger-custom">{contarPorEstado(reservasData, "CANCELADA")}</span>
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
          <Modal.Title>Edita tu perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="firstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreCliente"
                    value={formData?.nombreCliente || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    isInvalid={!!errores.nombreCliente}
                  />
                  <Form.Control.Feedback type="invalid">{errores.nombreCliente}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="lastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={formData?.apellido || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    isInvalid={!!errores.apellido}
                  />
                  <Form.Control.Feedback type="invalid">{errores.apellido}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="typeDocument">
                  <Form.Label>Tipo de Documento</Form.Label>
                  <Form.Select
                    name="tipo"
                    value={formData?.documento?.tipo || ""}
                    onChange={handleChange}
                    isInvalid={!!errores["documento.tipo"]}
                  >
                    <option value="CC">CC</option>
                    <option value="CE">CE</option>
                    <option value="PA">PA</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errores["documento.tipo"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="documentNumber">
                  <Form.Label>Número de Documento</Form.Label>
                  <Form.Control
                    type="text"
                    name="numeroDocumento"
                    value={formData?.documento?.numero || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu número de documento"
                    isInvalid={!!errores["documento.numero"]}
                  />
                  <Form.Control.Feedback type="invalid">{errores["documento.numero"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="calle">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    type="text"
                    name="calle"
                    value={formData?.direccion?.calle || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu calle"
                    isInvalid={!!errores["direccion.calle"]}
                  />
                  <Form.Control.Feedback type="invalid">{errores["direccion.calle"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="numero">
                  <Form.Label>Numero</Form.Label>
                  <Form.Control
                    type="text"
                    name="numeroDireccion"
                    value={formData?.direccion?.numero || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu número de dirección"
                    isInvalid={!!errores["direccion.numero"]}
                  />
                  <Form.Control.Feedback type="invalid">{errores["direccion.numero"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="ciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    name="ciudad"
                    value={formData?.direccion?.ciudad || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu ciudad"
                    isInvalid={!!errores["direccion.ciudad"]}
                  />
                  <Form.Control.Feedback type="invalid">{errores["direccion.ciudad"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="pais">
                  <Form.Label>Pais</Form.Label>
                  <Form.Control
                    type="text"
                    name="pais"
                    value={formData?.direccion?.pais || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu país"
                    isInvalid={!!errores["direccion.pais"]}
                  />
                  <Form.Control.Feedback type="invalid">{errores["direccion.pais"]}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData?.correo || ""}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    isInvalid={!!errores.correo}
                  />
                  <Form.Control.Feedback type="invalid">{errores.correo}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="telefono">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    value={formData?.telefono || ""}
                    onChange={handleChange}
                    placeholder="Ingresa tu número de teléfono"
                    isInvalid={!!errores.telefono}
                  />
                  <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonNaranjaDegrade" onClick={handleGuardar}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}