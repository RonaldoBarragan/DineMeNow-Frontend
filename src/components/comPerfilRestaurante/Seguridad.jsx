import { Button, Card, Form } from "react-bootstrap";
import { FiLock } from "react-icons/fi";
import './Seguridad.css';
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { ActualizarContraTempResta } from "../../api/Restaurant-Service";

export default function SeguridadRestaurante() {
    const { user } = useAuth();

    const [passwordActual, setPasswordActual] = useState("");
    const [passwordNueva, setPasswordNueva] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    const [errores, setErrores] = useState({});
    const [guardando, setGuardando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState(null);
    const [errorGuardar, setErrorGuardar] = useState(null);

    const validarFormulario = () => {
    const nuevosErrores = {};

    if (!passwordActual.trim()) nuevosErrores.passwordActual = true;
    if (!passwordNueva.trim()) nuevosErrores.passwordNueva = true;
    if (!confirmarPassword.trim()) nuevosErrores.confirmarPassword = true;

    if (
        passwordNueva.trim() &&
        confirmarPassword.trim() &&
        passwordNueva !== confirmarPassword
    ) {
        nuevosErrores.confirmarPassword = true;
    }

    if (
        passwordActual.trim() &&
        passwordNueva.trim() &&
        passwordActual === passwordNueva
    ) {
        nuevosErrores.passwordNueva = true;
    }
        return nuevosErrores;
    };

    const handleActualizar = async (e) => {
    e.preventDefault();

    const nuevosErrores = validarFormulario();
    setMensajeExito(null);
    setErrorGuardar(null);

    if (Object.keys(nuevosErrores).length > 0) {
    setErrores(nuevosErrores);
    if (nuevosErrores.confirmarPassword && passwordNueva !== confirmarPassword) {
        setErrorGuardar("Las contraseñas no coinciden.");
    } else if (passwordActual.trim() && passwordNueva.trim() && passwordActual === passwordNueva) {
        setErrorGuardar("La contraseña no puede ser la misma que la actual.");
    } else {
        setErrorGuardar("Completa todos los campos.");
    }
        return;
    }

    setErrores({});
    setGuardando(true);
    try {
        await ActualizarContraTempResta(user.id, passwordActual, passwordNueva);

        setMensajeExito("Contraseña actualizada correctamente.");
        setPasswordActual("");
        setPasswordNueva("");
        setConfirmarPassword("");
    } catch (error) {
        console.error("Error al actualizar contraseña:", error);
        setErrorGuardar(error.message || "No se pudo actualizar la contraseña");
    } finally {
        setGuardando(false);
    }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title className="fw-bold fs-6 mb-3"><FiLock size={23} /> Seguridad</Card.Title>

                {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
                {errorGuardar && <div className="alert alert-danger">{errorGuardar}</div>}

                <Form onSubmit={handleActualizar}>
                    <Form.Group className="mb-3" controlId="actualcontra">
                        <Form.Label>Contraseña Actual</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="•••••••"
                            className="input-segu-restau"
                            value={passwordActual}
                            isInvalid={!!errores.passwordActual}
                            onChange={e => setPasswordActual(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nuevacontra">
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="•••••••"
                            className="input-segu-restau"
                            value={passwordNueva}
                            isInvalid={!!errores.passwordNueva}
                            onChange={e => setPasswordNueva(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {passwordActual === passwordNueva
                                ? "Debe ser diferente a la contraseña actual."
                                : "Este campo es obligatorio."}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmarcontra">
                        <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="•••••••"
                            className="input-segu-restau"
                            value={confirmarPassword}
                            isInvalid={!!errores.confirmarPassword}
                            onChange={e => setConfirmarPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {passwordNueva !== confirmarPassword
                                ? "Las contraseñas no coinciden."
                                : "Este campo es obligatorio."}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        type="submit"
                        className="button-actu-segurestau"
                        disabled={guardando}
                    >
                        <p className="actualizar-segurestau">
                            {guardando ? "Actualizando..." : "Actualizar Contraseña"}
                        </p>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};