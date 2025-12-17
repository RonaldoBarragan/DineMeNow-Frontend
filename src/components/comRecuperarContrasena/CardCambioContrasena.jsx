import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AiOutlineLock } from "react-icons/ai";
import "./CambioContrasena.css";
import "../comIniciarSesion/formInicioSesion.css";
function CardCambiar() {
  return (
    <Card className="cambio">
      <Card.Body>
        <Card.Title>Cambio de contraseña</Card.Title>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fw-bold">
            Nueva contraseña
          </Form.Label>

          <div className="input-container-relative">
            <Form.Control
              type="password"
              placeholder="••••••••"
              className="inputForm icon-form-padding-left"
            />
            <div className="icon-form-overlay">
              <AiOutlineLock size={20} />
            </div>
          </div>
        </Form.Group>
        <Form.Label className="text-start w-100 fw-bold">
          Confirmar contraseña
        </Form.Label>
        <Form.Group className="mb-3">
          <div className="input-container-relative">
            <Form.Control
              type="password"
              placeholder="••••••••"
              className="inputForm icon-form-padding-left"
            />
            <div className="icon-form-overlay">
              <AiOutlineLock size={20} />
            </div>
          </div>
        </Form.Group>

        <br />
        <Button className="buttonNaranjaDegrade w-100">Confirmar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCambiar;
