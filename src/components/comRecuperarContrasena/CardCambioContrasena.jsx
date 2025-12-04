import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./CambioContrasena.css";
function CardCambiar() {
  return (
    <Card className="cambio">
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100">Nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            className="text-left fs-0 py-0"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100">
            Confirmar contraseña
          </Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            className="text-left fs-0 py-0"
          />
        </Form.Group>

        <br />
        <Button className="buttonNaranjaDegrade w-100">Confirmar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCambiar;
