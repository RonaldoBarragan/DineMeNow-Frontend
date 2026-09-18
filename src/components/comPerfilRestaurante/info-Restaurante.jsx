import {Card, Row, Col, Button, Modal, Form, Spinner, Badge } from 'react-bootstrap'; 
import './Info-Restaurante.css';
import { LuBuilding } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { actualizarRestaurant, getRestaurantByIdAcc } from '../../api/Restaurant-Service';

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const serviciosDisponibles = ["Parqueadero", "Servicio a domicilio", "Acepta tarjetas"];

export default function InfoRestaurante() {
    const { user } = useAuth();

    const [restaurante, setRestaurante] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState(null);
    const [guardando, setGuardando] = useState(false);
    const [errorGuardar, setErrorGuardar] = useState(null);
    const [errores, setErrores] = useState({});

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datos = await getRestaurantByIdAcc(user.id);
                setRestaurante(datos);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar info del restaurante:", error);
                setError(error.message || "Error desconocido");
                setLoading(false);
            }
        };

        if (user) {
            cargarDatos();
        }
    }, [user]);

    // Copia COMPLETA del objeto actual, incluyendo los campos que no se editan en este form
    const handleAbrirModal = () => {
        setFormData({ ...restaurante, direccion: { ...restaurante.direccion } });
        setErrorGuardar(null);
        setErrores({});
        setShow(true);
    };

    const handleCerrarModal = () => {
        setShow(false);
        setFormData(null);
        setErrores({});
    };

    const toggleDia = (dia) => {
        setFormData(prev => {
            const yaEsta = prev.diasAbierto.includes(dia);
            return {
                ...prev,
                diasAbierto: yaEsta
                    ? prev.diasAbierto.filter(d => d !== dia)
                    : [...prev.diasAbierto, dia]
            };
        });
    };

    const toggleServicio = (servicio) => {
        setFormData(prev => {
            const yaEsta = prev.servicios.includes(servicio);
            return {
                ...prev,
                servicios: yaEsta
                    ? prev.servicios.filter(s => s !== servicio)
                    : [...prev.servicios, servicio]
            };
        });
    };

    // Revisa que ningún campo editable venga vacío. Devuelve un objeto
    // { nombreCampo: true } por cada campo inválido.
    const validarFormulario = (data) => {
        const nuevosErrores = {};

        if (!data.nombre?.trim()) nuevosErrores.nombre = true;
        if (!data.categoria?.trim()) nuevosErrores.categoria = true;
        if (!data.telefono?.trim()) nuevosErrores.telefono = true;
        if (!data.correo?.trim()) nuevosErrores.correo = true;
        if (data.capacidad === null || data.capacidad === undefined || data.capacidad === "" || isNaN(data.capacidad)) {
            nuevosErrores.capacidad = true;
        }
        if (!data.horarioApertura) nuevosErrores.horarioApertura = true;
        if (!data.horarioCierre) nuevosErrores.horarioCierre = true;
        if (!data.descripcion?.trim()) nuevosErrores.descripcion = true;
        if (!data.diasAbierto || data.diasAbierto.length === 0) nuevosErrores.diasAbierto = true;

        if (!data.direccion?.calle?.trim()) nuevosErrores.calle = true;
        if (!data.direccion?.numero?.trim()) nuevosErrores.numero = true;
        if (!data.direccion?.ciudad?.trim()) nuevosErrores.ciudad = true;
        if (!data.direccion?.codigoPostal?.trim()) nuevosErrores.codigoPostal = true;
        if (!data.direccion?.pais?.trim()) nuevosErrores.pais = true;

        return nuevosErrores;
    };

    const handleGuardar = async () => {
        const nuevosErrores = validarFormulario(formData);

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            setErrorGuardar("Por favor completa todos los campos antes de guardar.");
            return; // Interrumpe el envío al backend
        }

        setErrores({});
        setGuardando(true);
        setErrorGuardar(null);
        try {
            // formData ya trae TODOS los campos del DTO (editados + sin tocar)
            const actualizado = await actualizarRestaurant(user.id, formData);
            setRestaurante(actualizado);
            setShow(false);
            setFormData(null);
        } catch (error) {
            console.error("Error al actualizar info del restaurante:", error);
            setErrorGuardar(error.message || "No se pudo guardar la información");
        } finally {
            setGuardando(false);
        }
    };

    if (loading) return <div className="text-center my-4"><Spinner animation="border" variant="warning" /></div>;
    if (error) return <div className="alert alert-danger text-center my-3">{error}</div>;

    return (
        <>
        <Modal centered show={show} onHide={handleCerrarModal} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Editar Información</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {errorGuardar && <div className="alert alert-danger">{errorGuardar}</div>}
                {formData && (
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="nombreRestau">
                                    <Form.Label>Nombre del Restaurante</Form.Label>
                                    <Form.Control
                                        value={formData.nombre}
                                        isInvalid={!!errores.nombre}
                                        onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="categoriaRestau">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control
                                        value={formData.categoria}
                                        isInvalid={!!errores.categoria}
                                        onChange={e => setFormData({ ...formData, categoria: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="telefonoRestau">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control
                                        value={formData.telefono}
                                        isInvalid={!!errores.telefono}
                                        onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="correoRestau">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={formData.correo}
                                        isInvalid={!!errores.correo}
                                        onChange={e => setFormData({ ...formData, correo: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group controlId="capacidadRestau">
                                    <Form.Label>Capacidad</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        value={formData.capacidad}
                                        isInvalid={!!errores.capacidad}
                                        onChange={e => setFormData({ ...formData, capacidad: Number(e.target.value) })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="horarioApertura">
                                    <Form.Label>Hora Apertura</Form.Label>
                                    <Form.Control
                                        type="time"
                                        value={formData.horarioApertura}
                                        isInvalid={!!errores.horarioApertura}
                                        onChange={e => setFormData({ ...formData, horarioApertura: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="horarioCierre">
                                    <Form.Label>Hora Cierre</Form.Label>
                                    <Form.Control
                                        type="time"
                                        value={formData.horarioCierre}
                                        isInvalid={!!errores.horarioCierre}
                                        onChange={e => setFormData({ ...formData, horarioCierre: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group controlId="calleDireccion">
                                    <Form.Label>Calle</Form.Label>
                                    <Form.Control
                                        value={formData.direccion.calle}
                                        isInvalid={!!errores.calle}
                                        onChange={e => setFormData({
                                            ...formData,
                                            direccion: { ...formData.direccion, calle: e.target.value }
                                        })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="numeroDireccion">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control
                                        value={formData.direccion.numero}
                                        isInvalid={!!errores.numero}
                                        onChange={e => setFormData({
                                            ...formData,
                                            direccion: { ...formData.direccion, numero: e.target.value }
                                        })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="ciudadDireccion">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control
                                        value={formData.direccion.ciudad}
                                        isInvalid={!!errores.ciudad}
                                        onChange={e => setFormData({
                                            ...formData,
                                            direccion: { ...formData.direccion, ciudad: e.target.value }
                                        })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="codigoPostalDireccion">
                                    <Form.Label>Código Postal</Form.Label>
                                    <Form.Control
                                        value={formData.direccion.codigoPostal}
                                        isInvalid={!!errores.codigoPostal}
                                        onChange={e => setFormData({
                                            ...formData,
                                            direccion: { ...formData.direccion, codigoPostal: e.target.value }
                                        })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="paisDireccion">
                                    <Form.Label>País</Form.Label>
                                    <Form.Control
                                        value={formData.direccion.pais}
                                        isInvalid={!!errores.pais}
                                        onChange={e => setFormData({
                                            ...formData,
                                            direccion: { ...formData.direccion, pais: e.target.value }
                                        })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Días Abierto</Form.Label>
                                <div className="d-flex flex-wrap gap-3">
                                    {diasSemana.map(dia => (
                                        <Form.Check
                                            key={dia}
                                            type="checkbox"
                                            id={`dia-${dia}`}
                                            label={dia}
                                            checked={formData.diasAbierto.includes(dia)}
                                            onChange={() => toggleDia(dia)}
                                        />
                                    ))}
                                </div>
                                {errores.diasAbierto && (
                                    <div className="text-danger small mt-1">
                                        Selecciona al menos un día.
                                    </div>
                                )}
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Servicios</Form.Label>
                                <div className="d-flex flex-wrap gap-3">
                                    {serviciosDisponibles.map(servicio => (
                                        <Form.Check
                                            key={servicio}
                                            type="checkbox"
                                            id={`servicio-${servicio}`}
                                            label={servicio}
                                            checked={formData.servicios.includes(servicio)}
                                            onChange={() => toggleServicio(servicio)}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="descripcionRestau">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={formData.descripcion}
                                        isInvalid={!!errores.descripcion}
                                        onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button className='buttonNaranjaDegrade' onClick={handleGuardar} disabled={guardando}>
                    {guardando ? "Guardando..." : "Guardar Cambios"}
                </Button>
            </Modal.Footer>
        </Modal>

        <Card className='mb-4'>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-2">
                        <LuBuilding size={18} />
                        <span className="fw-bold fs-5">Información del Restaurante</span>
                    </div>
                    <Button variant="outline-secondary" size="sm" onClick={handleAbrirModal}>
                        <AiOutlineForm size={15} className="me-1" /> Editar Información
                    </Button>
                </div>

                <div className="Info-restaurant-perfil">
                <p className="fw-bold mb-1">Nombre del Restaurante</p>
                <p className="mb-3">{restaurante.nombre}</p>

                <p className="fw-bold mb-1">Categoria</p>
                <p className="mb-3">{restaurante.categoria}</p>

                <p className="fw-bold mb-1">Dirección</p>
                <p className="mb-3">
                    <CiLocationOn size={15} className="me-1" />{restaurante.direccion?.calle} #{restaurante.direccion?.numero}, {restaurante.direccion?.ciudad}, {restaurante.direccion?.pais}
                </p>

                <p className="fw-bold mb-1">Teléfono</p>
                <p className="mb-3">
                    <LuPhone size={15} className="me-1" />{restaurante.telefono}
                </p>

                <p className="fw-bold mb-1">Email</p>
                <p className="mb-3">
                    <CiMail size={15} className="me-1" />{restaurante.correo}
                </p>

                <p className="fw-bold mb-1">Descripción</p>
                <p className="mb-0">{restaurante.descripcion}</p>
                </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body className='Info-restaurant-perfil'>
                <Card.Title className='fw-bold mb-2'>Horarios</Card.Title>                                    
                <p>
                    {restaurante.diasAbierto?.map((dia, i) => (
                        <Badge key={i} bg="secondary" className="me-1">{dia}</Badge>
                    ))}
                    entre {restaurante.horarioApertura} - {restaurante.horarioCierre}
                </p>
                <p>Capacidad Total: {restaurante.capacidad} personas</p>
            </Card.Body>
        </Card>
        </>
    );
};