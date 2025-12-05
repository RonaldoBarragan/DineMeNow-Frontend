import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./RecuperarContrasena.css";
function CardRecuperar() {
  return (
    <Card className="recuperar">
      <Card.Body>
        <Card.Text>
          Ingresa tu email y te enviaremos un código para recuperar tu
          contraseña😸.
        </Card.Text>
        <Form.Control type="email" placeholder="example.123@gmail.com" />
        <br />
        <Button type="email" className="buttonNaranjaDegrade w-100">
          Enviar codigo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardRecuperar;
