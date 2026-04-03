import { Card, Container, Modal, Form, Row, Col, Button } from "react-bootstrap";
import { FiAlertTriangle } from "react-icons/fi";
import "./Configuracion-Cuenta.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
function ConfiguracionCuenta(){
  const [show, setShow] = useState(false);
const [confirmText, setConfirmText] = useState('');
return(
  <>
  <Modal centered show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
        <Modal.Title style={{ color: '#e7000b' }}>Eliminar Cuenta</Modal.Title>
      </Modal.Header>
  <Modal.Body>
  <div className="modal-desc-confirestau">
    <FiAlertTriangle size={17} />
    <p className="modal-desc" mb-0>Esta acción es irreversible. Tu cuenta y todos los datos asociados se eliminarán permanentemente.</p>
  </div>
  <Form className="size-letra-propio">
    <Row className="mt-3">
      <Col>
        <Form.Group controlId="Motivo">
          <Form.Label >Motivo de la eliminación (requerido) *</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Por favor, comparte el motivo por el cual deseas eliminar tu cuenta..." />
        </Form.Group>
      </Col>
    </Row>

    {/* Texto de confirmación */}
    <Row className="mt-3" >
      <Col>
        <p style={{ fontSize: '13px', color: '#555' }}>
          Para proceder con la eliminación, escribe: <strong>"ELIMINAR MI CUENTA"</strong>
        </p>
        <Form.Control
          value={confirmText}
          onChange={e => setConfirmText(e.target.value)}
          placeholder='ELIMINAR MI CUENTA' />
      </Col>
    </Row>
  </Form>
</Modal.Body>

<Modal.Footer>
  <Button variant="light" className="modal-letra-confi bg-white" onClick={() => setShow(false)}>
    Cancelar
  </Button>
{/* botton eliminar mi cuenta  */}
  <Button
    className="modal-letra-confi"
    style={{ backgroundColor: '#e7000b', borderColor: '#e7000b' }}
    disabled={confirmText !== 'ELIMINAR MI CUENTA'}
    onClick={() => setShow(false)}>
    Confirmar Eliminación
  </Button>
</Modal.Footer>
</Modal>
  

  <Container className="card-confirestau">
    <Card className="confi-card-restau">
      <Card.Body>
        <div className="encabezado-confirestau">
          <div className="encabezado-title-confirestau">
            <FiAlertTriangle size={15} />
            <p className="encb-title-confirestau">Zona Peligrosa</p>
          </div>
          <div className="encb-desc-confirestau">
              <FiAlertTriangle size={17} />
              <p className="encb-desc">La eliminación de tu cuenta es permanente e irreversible. Todos tus datos, reservas, menús y configuraciones se perderán para siempre.</p>
          </div>
          <p className="desc-pregunta fw-bold">¿Qué sucede al eliminar tu cuenta?</p>
          <p className="desc-list">• Se eliminará toda la información de tu restaurante</p>
          <p className="desc-list">• Se cancelarán todas las reservas futuras</p>
          <p className="desc-list">• Se eliminará tu menú y configuraciones</p>
          <p className="desc-list">• Los clientes no podrán encontrar tu restaurante</p>
          <p className="desc-list">• No podrás recuperar tu cuenta después</p>
          <button  onClick={() => setShow(true)} className="btn-eliminar-confirestau">
          <RiDeleteBin6Line size={15}/> <p className='Eliminar-confirestau'>Eliminar Cuenta Permanentemente</p>
          </button>
        </div>
      </Card.Body>
    </Card>
  </Container>
  </>
)
}
export default ConfiguracionCuenta;