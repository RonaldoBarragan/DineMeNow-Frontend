import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { cambiarPasswordConToken } from "../../services/authService";
import "./CambioContrasena.css";
import "../comIniciarSesion/formInicioSesion.css";

function CardCambiar({ resetToken }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!resetToken) {
      navigate("/recuperarcontrasena", { replace: true });
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmacion) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      await cambiarPasswordConToken(resetToken, password);
      alert("Contraseña actualizada correctamente. Ya puedes iniciar sesión.");
      navigate("/iniciarsesion", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!resetToken) return null;

  return (
    <Card className="cambio">
      <Card.Body>
        <Card.Title>Cambio de contraseña</Card.Title>
        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-start w-100 fw-bold">Nueva contraseña</Form.Label>
            <div className="input-container-relative">
              <Form.Control
                type="password"
                placeholder="••••••••"
                className="inputForm icon-form-padding-left"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <div className="icon-form-overlay"><AiOutlineLock size={20} /></div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-start w-100 fw-bold">Confirmar contraseña</Form.Label>
            <div className="input-container-relative">
              <Form.Control
                type="password"
                placeholder="••••••••"
                className="inputForm icon-form-padding-left"
                value={confirmacion}
                onChange={(e) => setConfirmacion(e.target.value)}
                disabled={loading}
                required
              />
              <div className="icon-form-overlay"><AiOutlineLock size={20} /></div>
            </div>
          </Form.Group>

          <br />
          <Button type="submit" className="buttonNaranjaDegrade w-100" disabled={loading}>
            {loading ? (
              <><Spinner animation="border" size="sm" className="me-2" />Actualizando...</>
            ) : (
              "Confirmar"
            )}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardCambiar;