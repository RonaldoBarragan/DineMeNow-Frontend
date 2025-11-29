import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
function Cambiar() {
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
          <b>Cambio de contraseña 😸</b>
        </Card.Title>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Contraseña nueva</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            className="text-center fs-0 py-0"
            style={{
              letterSpacing: "5px",
              textTransform: "uppercase",
              backgroundColor: "#f3f3f5",
              border: "1px solid #b9b6b6bd",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            className="text-center fs-0 py-0"
            style={{
              letterSpacing: "5px",
              textTransform: "uppercase",
              backgroundColor: "#f3f3f5",
              border: "1px solid #b9b6b6bd",
            }}
          />
        </Form.Group>

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
          Confirmar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cambiar;
