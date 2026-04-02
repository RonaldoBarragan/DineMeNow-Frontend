import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import './estilos2/Style-Modal-Reserva.css';
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

export default function ReservaModal({restaurant, mostrar, ocultar}) {
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

    //Nota: Este codigo antes lo antendia yo y dios, ahora solo dios sabe que hace esto
    const [platosSeleccionados, setPlatosSeleccionados] = useState([]);
    // Guarda los platos que el usuario va agregando

    // 1. Agregar un plato (o sumar cantidad si ya existe)
    const agregarPlato = (plato) => {
        setPlatosSeleccionados(prev => {
            const existe = prev.find(p => p.nombre === plato.nombre);
            if (existe) {
                return prev.map(p => 
                    p.nombre === plato.nombre 
                    ? { ...p, cantidad: p.cantidad + 1 } 
                    : p
                );
            }
            return [...prev, { ...plato, cantidad: 1 }];
        });
    };

    // 2. Cambiar cantidad
    const cambiarCantidad = (nombre, valor) => {
        setPlatosSeleccionados(prev =>
            prev.map(p => p.nombre === nombre ? { ...p, cantidad: Math.max(1, p.cantidad + valor) } : p)
        );
    };

    // 3. Eliminar plato
    const eliminarPlato = (nombre) => {
        setPlatosSeleccionados(prev => prev.filter(p => p.nombre !== nombre));
    };

    return (
        <>
        {/*Contenido del modal*/}
        <Modal size="lg" centered show={mostrar} onHide={ocultar}>
            <Modal.Header closeButton>
                <Modal.Title>Reservar en {restaurant?.name}</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <Row className="g-5">
                    <Col>
                    <Form>
                        <h5 className="mb-3"><FiCalendar /> Detalles de la reserva</h5>
                        <Form.Group controlId="Fecha_Reserva" className="mb-3">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group controlId="Hora_Reserva" className="mb-3">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control placeholder="Hora" type="time"/>
                        </Form.Group>
                        <Form.Group controlId="Personas_Reserva" className="mb-3">
                            {platosSeleccionados.length > 0 && (
                                <Card className="p-3">
                                    <Card.Title className="fs-6 fw-bold">Platillos Seleccionados</Card.Title>
                                    {platosSeleccionados.map((plato, idx) => (
                                        <div key={idx} className="d-flex justify-content-between align-items-center mb-3">
                                            <span>{plato.nombre} <small className="text-warning">${plato.precio.toLocaleString()}</small></span>
                                            <div className="d-flex align-items-center gap-2">
                                                <Button variant="outline-secondary" size="sm" onClick={() => cambiarCantidad(plato.nombre, -1)}>-</Button>
                                                <span>{plato.cantidad}</span>
                                                <Button variant="outline-secondary" size="sm" onClick={() => cambiarCantidad(plato.nombre, 1)}>+</Button>
                                                <Button variant="outline-danger" size="sm" onClick={() => eliminarPlato(plato.nombre)}>x</Button>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Total */}
                                    <hr className="m-0 p-0"/>
                                    <div className="d-flex justify-content-between fw-bold pt-1">
                                        <span>Total:</span>
                                        <span>${platosSeleccionados.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toLocaleString()}</span>
                                    </div>
                                </Card>
                                )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mesa</Form.Label>
                            <Row className="g-2">
                                {restaurant?.mesas.map((mesa) => (
                                    <Col xs={6} key={mesa.id}>
                                    <Card
                                        className={`mesa-card p-2 text-center rounded border ${mesaSeleccionada?.id === mesa.id ? "mesa-selected" : ""}`}
                                        onClick={() => setMesaSeleccionada(mesa)}
                                    >
                                        <div className="mesa-nombre fw-semibold">Mesa {mesa.id}</div>
                                        <small className="text-muted">{mesa.personas} personas • {mesa.tipo}</small>
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Solicitudes_Especiales">
                            <Form.Label>Solicitudes especiales</Form.Label>
                            <Form.Control placeholder="Alergias, preferencias de mesa, etc" as="textarea" rows={2}/>
                        </Form.Group>
                        <Row className="p-0">
                            <Col>
                            <Form.Group controlId="Nombre_Cliente">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre" type="text"/>
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="Telefono_Cliente">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control placeholder="Telefono" type="text"/>
                            </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                    <Col>
                    <h5 className="mb-3"><FiCalendar /> Menu - Pre-Ordenar (Opcional)</h5>
                    {/*Cargar los platos del restaurante para que el cliente pueda pre ordenar y agilizar su experiencia al llegar al restaurante*/}
                    <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                        {restaurant?.menu.map((plato, idx) => (
                            <Card key={idx} className="mb-3">
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-6">{plato.nombre}</Card.Title>
                                    <Card.Text className="text-left small mb-1">{plato.descripcion}</Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="color-letra-precio">${plato.precio.toLocaleString()}</span>
                                        <Button
                                        size="sm"
                                        className="buttonNaranjaDegrade size-letra-propio"
                                        onClick={() => agregarPlato(plato)}
                                        >
                                            {platosSeleccionados.find(p => p.nombre === plato.nombre) 
                                            ? <><span>{platosSeleccionados.find(p => p.nombre === plato.nombre).cantidad}</span> <span>+</span></> 
                                            : "Agregar"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    </Col>
                </Row>
            </Modal.Body>
    
            <Modal.Footer>
                <Button className="bg-white" variant="light" onClick={ocultar}>Cancelar</Button>
                <Button className="buttonNaranjaDegrade" onClick={ocultar}>Crear Reserva</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}