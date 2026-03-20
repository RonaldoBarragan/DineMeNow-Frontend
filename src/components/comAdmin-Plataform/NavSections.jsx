import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";

export default function Nav_Section() {
    return (
        <>
        <Card>
            <Tabs defaultActiveKey="Solicitudes" className="rounded-pill mb-3" variant="pills">
                <Tab eventKey="Solicitudes" title="Solicitudes">
                    Solicitudes de Registro pendientes
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Title className="fs-6 fw-bold">El Dorado Gourmet</Card.Title>
                            <Row className="size-letra-propio p-1">
                                <Col>
                                <span className="fw-bold text-muted">Informacion basica</span>
                                <Card.Text className="text-left size-letra-propio m-0">
                                    <p className="m-0 text-left">Zona: Chapinero</p>
                                    <p className="m-0 text-left">Tipo de cocina: Peruana</p>
                                    <p className="m-0 text-left">Fecha de solicitud: 2025-08-25</p>
                                </Card.Text>
                                </Col>
                                <Col>
                                <span className="fw-bold text-muted">Contacto</span>
                                <Card.Text className="text-left size-letra-propio m-0">
                                    <p className="m-0 text-left">Email: eldorado@email.com</p>
                                    <p className="m-0 text-left">Teléfono: +57 301 234 5678</p>
                                </Card.Text>
                                </Col>
                                <Col>
                                <span className="fw-bold text-muted">Detalles Adicionales</span>
                                <Card.Text className="text-left size-letra-propio m-0">
                                    <p className="m-0 text-left">Dirección: Calle 123 #45-67, Chapinero</p>
                                    <p className="m-0 text-left">Capacidad estimada: 80 personas</p>
                                    <p className="m-0 text-left">Horario propuesto: 11:00 AM - 11:00 PM</p>
                                </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="Accs restaurant" title="Cuentas restaurantes">
                    Seccion 2
                </Tab>
                <Tab eventKey="Accs cliente" title="Clientes">
                    Seccion 3
                </Tab>
            </Tabs>
        </Card>
        </>
    )
}