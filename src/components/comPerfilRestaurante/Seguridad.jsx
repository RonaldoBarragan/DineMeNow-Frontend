import { Card, CardBody, Container, Form } from "react-bootstrap";
import { FiLock } from "react-icons/fi";
import './Seguridad.css';
function SeguridadRestaurante(){
  return(
    <Container className="Card-seguridad">
    <Card className="Seguridad-restau">
      <Card.Body>
        <div className="encabezado-segurestau">
          <div className="encabezado-title-segurestau">
          <FiLock size={15}/>
          <p className="encb-title-segurestau">Seguridad</p>
          </div>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="actualcontra">
            <Form.Label className="segurestau-label">Contraseña Actual</Form.Label>
            <Form.Control type="password" placeholder="•••••••" className="input-segu-restau"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="nuevacontra">
            <Form.Label className="segurestau-label">Nueva Contraseña</Form.Label>
            <Form.Control type="password" placeholder="•••••••" className="input-segu-restau"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmarcontra">
            <Form.Label className="segurestau-label">Confimar Nueva Contraseña</Form.Label>
            <Form.Control type="password" placeholder="•••••••" className="input-segu-restau"/>
          </Form.Group>
          <button className="button-actu-segurestau">
            <p className="actualizar-segurestau">Actualizar Contraseña</p>
          </button>
        </Form>
      </Card.Body>
    </Card>
    </Container>
  )
}
export default SeguridadRestaurante;