import { useState } from 'react';
import { Card, Button, Form, Spinner, Alert } from 'react-bootstrap';
import TokenTimer from './tokenTimer';
import { useNavigate } from 'react-router-dom';
import { confirmarCodigo, reenviarCodigo } from '../../api/Client-Service';

function CardVerificarToken({ email }) {
  const [codigo, setCodigo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Limpiamos espacios por si acaso
    const codigoLimpio = codigo.trim();

    if (codigo.length < 6) {
      setError("Por favor, ingresa el código completo.");
      return;
    }

    setLoading(true);
    try {
      // Ahora 'email' tendrá el valor que le pasamos desde el padre
      const response = await confirmarCodigo(email, codigoLimpio);
      console.log("✅ Verificación exitosa:", response);
      
      // Puedes usar una alerta o ir directo al login
      alert("¡Cuenta activada con éxito!");
      navigate('/login'); 

    } catch (err) {
      console.error("❌ Error en verificación:", err);
      setError(err.message || "Código incorrecto o ha expirado");
    } finally {
      setLoading(false);
    }
  };

  // Manejar el reenvío del código
  const handleReenviar = async () => {
    setError(null);
    try {
      await reenviarCodigo(email);
      alert("Se ha enviado un nuevo código a tu correo.");
    } catch (err) {
      setError("No se pudo reenviar el código. Intenta más tarde.");
    }
  };

  return (
    <Card style={{ width: '100%' }} className="shadow border-0">
      <Card.Body>
        <p className='text-start fw-bold mb-1'>Verificar token</p>
        <p className="text-muted small mb-2 text-start">
          Hemos enviado un código de verificación a:
        </p>
        <p className="fw-bold text-dark mt-0 mb-3 text-start">{email}</p>
        
        {/* Componente del Temporizador */}
        <TokenTimer initialTimeSegundos={300} />

        {error && (
          <Alert variant="danger" className="py-2 small">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start" controlId="formRecuperacionToken">
            <Form.Label className='text-start d-block small' style={{ color: '#000' }}>
              Ingresa el código
            </Form.Label>
            <Form.Control 
              type="text" 
              placeholder="000000" 
              maxLength={6}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className="text-center py-2 fw-bold" 
              style={{ 
                letterSpacing: '8px', 
                textTransform: 'uppercase',
                backgroundColor: '#f3f3f5',
                fontSize: '1.2rem',
                border: '1px solid #b9b6b6bd' 
              }}
              required
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            size="sm" 
            disabled={loading}
            style={{ 
              width: '100%', 
              backgroundColor: '#FF6600', 
              borderColor: '#FF6600', 
              color: '#FFFFFF',
              fontWeight: 'bold',
              padding: '10px'
            }}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Verificando...
              </>
            ) : (
              'Verificar cuenta'
            )}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p className="text-muted small mb-0">¿No recibiste el código?</p>
          <Button 
            variant="link" 
            onClick={handleReenviar}
            className="text-decoration-none p-0 small" 
            style={{ color: '#FF6600' }}
          >
            Reenviar código
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardVerificarToken;