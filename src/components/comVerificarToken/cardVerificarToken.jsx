import { useState } from "react";
import { Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import TokenTimer from "./tokenTimer";
import { useNavigate } from "react-router-dom";
import { confirmarCodigo, reenviarCodigo } from "../../api/Client-Service";
import { verificarCodigoRecuperacion, solicitarCodigoRecuperacion } from "../../services/authService";
import { useNotification } from '../../context/NotificationContext';

function CardVerificarToken({ email, recovery = false }) {
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resent, setResent] = useState(false);
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const codigoLimpio = codigo.trim();

    if (!/^\d{6}$/.test(codigoLimpio)) {
      setError("Ingresa un código válido de 6 dígitos.");
      return;
    }

    setLoading(true);
    try {
      if (recovery) {
        const response = await verificarCodigoRecuperacion(email, codigoLimpio);
        if (!response?.resetToken) {
          throw new Error("El servidor no devolvió el token de recuperación.");
        }
        navigate("/cambiarcontrasena", { state: { resetToken: response.resetToken } });
      } else {
        await confirmarCodigo(email, codigoLimpio);
        showNotification(
          "¡Cuenta activada con éxito!",
          "Éxito",
          "success",
          () => {
            navigate("/iniciarsesion");
          }
        );
      }
    } catch (err) {
      setError(err.message || "Código incorrecto o ha expirado.");
    } finally {
      setLoading(false);
    }
  };

  const handleReenviar = async () => {
    setError(null);
    setResent(false);
    try {
      if (recovery) {
        await solicitarCodigoRecuperacion(email);
      } else {
        await reenviarCodigo(email);
      }
      setResent(true);
    } catch (err) {
      setError(err.message || "No se pudo reenviar el código.");
    }
  };

  return (
    <Card style={{ width: "100%" }} className="shadow border-0">
      <Card.Body>
        <p className="text-start fw-bold mb-1">
          {recovery ? "Recuperar contraseña" : "Verificar token"}
        </p>
        <p className="text-muted small mb-2 text-start">
          Hemos enviado un código de verificación a:
        </p>
        <p className="fw-bold text-dark mt-0 mb-3 text-start">{email}</p>

        <TokenTimer initialTimeSegundos={300} />

        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}
        {resent && <Alert variant="success" className="py-2 small">Se envió un nuevo código.</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start" controlId="formRecuperacionToken">
            <Form.Label className="text-start d-block small" style={{ color: "#000" }}>
              Ingresa el código
            </Form.Label>
            <Form.Control
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              placeholder="000000"
              maxLength={6}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ""))}
              className="text-center py-2 fw-bold"
              style={{ letterSpacing: "8px", backgroundColor: "#f3f3f5", fontSize: "1.2rem", border: "1px solid #b9b6b6bd" }}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="sm" disabled={loading} style={{ width: "100%", backgroundColor: "#FF6600", borderColor: "#FF6600", color: "#FFFFFF", fontWeight: "bold", padding: "10px" }}>
            {loading ? <><Spinner animation="border" size="sm" className="me-2" />Verificando...</> : "Verificar código"}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p className="text-muted small mb-0">¿No recibiste el código?</p>
          <Button variant="link" onClick={handleReenviar} className="text-decoration-none p-0 small" style={{ color: "#FF6600" }}>
            Reenviar código
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardVerificarToken;
