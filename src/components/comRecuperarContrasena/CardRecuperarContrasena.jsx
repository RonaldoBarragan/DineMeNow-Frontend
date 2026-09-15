import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "./RecuperarContrasena.css";
import { BsEnvelope } from "react-icons/bs";
import { solicitarCodigoRecuperacion } from "../../services/authService";



function CardRecuperar() {
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const correoLimpio = correo.trim().toLowerCase();
    if (!correoLimpio) {
      setError("Ingresa tu correo electrónico.");
      return;
    }

    setLoading(true);
    try {
      await solicitarCodigoRecuperacion(correoLimpio);
      navigate("/verificar-token", { state: { correo: correoLimpio, tipo: "recuperacion" } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="recuperar">
      <Card.Body>
        <Card.Text>
          Ingresa tu email y te enviaremos un código para recuperar tu contraseña 😸.
        </Card.Text>

        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <div className="input-container-relative">
            <Form.Control
              type="email"
              placeholder="tu@email.com"
              className="inputForm icon-form-padding-left"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              disabled={loading}
              required
            />
            <div className="icon-form-overlay">
              <BsEnvelope size={15} />
            </div>
          </div>
          <br />
          <Button type="submit" className="buttonNaranjaDegrade w-100" disabled={loading}>
            {loading ? <><Spinner animation="border" size="sm" className="me-2" />Enviando...</> : "Enviar código"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardRecuperar;
