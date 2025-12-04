import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function Recuperar() {
  return (
    <Card
      style={{
        width: "30%",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="shadow "
    >
      <Card.Body>
        <Card.Title>
          <b>Recuperar contraseña</b>
        </Card.Title>
        <Card.Text>
          Ingresa tu email y te enviaremos un codigo para cambiar tu contraseña
          😼👍
        </Card.Text>
        <Form.Control
          type="token"
          placeholder="example.123@gmail.com"
          className="text-center fs-0 py-0"
          style={{
            letterSpacing: "5px",
            textTransform: "uppercase",

            backgroundColor: "#f3f3f5",

            border: "1px solid #b9b6b6bd",
          }}
        />
        <br />
        <Button
          variant="primary"
          type="email"
          size="sm"
          style={{
            width: "50%",
            backgroundColor: "#FF6600",
            borderColor: "#FF6600",
            color: "#FFFFFF",
          }}
        >
          Enviar codigo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Recuperar;
