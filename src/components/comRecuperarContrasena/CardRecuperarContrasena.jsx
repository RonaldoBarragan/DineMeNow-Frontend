import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./RecuperarContrasena.css";
import { BsEnvelope } from "react-icons/bs";
function CardRecuperar() {
  return (
    <Card className="recuperar">
      <Card.Body>
        <Card.Text>
          Ingresa tu email y te enviaremos un código para recuperar tu
          contraseña😸.
        </Card.Text>
        <div className="input-container-relative">
          <Form.Control
            type="email"
            placeholder="tu@email.com"
            className="inputForm icon-form-padding-left"
          />
          <div className="icon-form-overlay">
            <BsEnvelope size={15} />
          </div>
        </div>
        <br />
        <Button type="email" className="buttonNaranjaDegrade w-100">
          Enviar codigo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardRecuperar;
