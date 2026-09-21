import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Key } from 'react-bootstrap-icons';
import './style.css';
import { actuContraClient } from '../../api/Client-Service';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function SeguridadPerfilCliente() {
    const { user } = useAuth();

    // 1. Estados para los campos del formulario
    const [formData, setFormData] = useState({
        passwordActual: '',
        passwordNueva: '',
        confirmPassword: '',
    });

    // 2. Estados para manejo de UI (carga, mensajes de éxito/error)
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

    // Actualizar el estado de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje({ tipo: '', texto: '' });

        // Validaciones en frontend
        if (!formData.passwordActual || !formData.passwordNueva || !formData.confirmPassword) {
        setMensaje({ tipo: 'danger', texto: 'Por favor, completa todos los campos.' });
        return;
        }

        if (formData.passwordNueva !== formData.confirmPassword) {
        setMensaje({ tipo: 'danger', texto: 'La nueva contraseña y su confirmación no coinciden.' });
        return;
        }

        if (formData.passwordNueva.length < 3) {
        setMensaje({ tipo: 'danger', texto: 'La nueva contraseña debe tener al menos 3 caracteres.' });
        return;
        }

        setLoading(true);

        try {
        // 3. Preparar el payload exacto que espera tu endpoint
        const payload = {
            passwordActual: formData.passwordActual,
            passwordNueva: formData.passwordNueva,
        };

        // Reemplaza '/api/usuarios/cambiar-password' por la URL real de tu backend
        await actuContraClient(user.id, payload);

        // Éxito: Limpiar formulario y notificar al usuario
        setMensaje({ tipo: 'success', texto: '¡Contraseña actualizada con éxito!' });
        setFormData({
            passwordActual: '',
            passwordNueva: '',
            confirmPassword: '',
        });
        } catch (error) {
        setMensaje({
            tipo: 'danger',
            texto: error.message || 'Ocurrió un error al conectar con el servidor.',
        });
        } finally {
        setLoading(false);
        }
    };

    return (
        <Card className="cardGestionPerfilCliente p-3 mt-4">
            <Card.Body>
                {/* Título con Icono de Llave */}
                <div className="d-flex align-items-center mb-4">
                <Key size={20} className="me-2" style={{ transform: 'rotate(-45deg)' }} />
                <h5 className="mb-0 gestioncliente-Title">Cambiar Contraseña</h5>
                </div>

                {/* Mensajes de Alerta (Éxito / Error) */}
                {mensaje.texto && (
                <Alert variant={mensaje.tipo} onClose={() => setMensaje({ tipo: '', texto: '' })} dismissible>
                    {mensaje.texto}
                </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    {/* Contraseña Actual */}
                    <Form.Group className="mb-3" controlId="currentPassword">
                        <Form.Label className="gestioncliente-label">Contraseña Actual</Form.Label>
                        <Form.Control
                        type="password"
                        name="passwordActual"
                        placeholder="••••••••"
                        className="inputFormSeguridad"
                        value={formData.passwordActual}
                        onChange={handleChange}
                        disabled={loading}
                        />
                    </Form.Group>

                    {/* Nueva Contraseña */}
                    <Form.Group className="mb-3" controlId="newPassword">
                        <Form.Label className="gestioncliente-label">Nueva Contraseña</Form.Label>
                        <Form.Control
                        type="password"
                        name="passwordNueva"
                        placeholder="••••••••"
                        className="inputFormSeguridad"
                        value={formData.passwordNueva}
                        onChange={handleChange}
                        disabled={loading}
                        />
                    </Form.Group>

                    {/* Confirmar Nueva Contraseña */}
                    <Form.Group className="mb-4" controlId="confirmPassword">
                        <Form.Label className="gestioncliente-label">Confirmar Nueva Contraseña</Form.Label>
                        <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="••••••••"
                        className="inputFormSeguridad"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={loading}
                        />
                    </Form.Group>

                    {/* Botón de Acción */}
                    <Button type="submit" className="buttonNaranjaDegrade" disabled={loading}>
                        {loading ? (
                        <>
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                            Actualizando...
                        </>
                        ) : (
                        'Actualizar Contraseña'
                        )}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}