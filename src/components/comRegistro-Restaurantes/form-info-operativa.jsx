import { Card, Col, Form, Row } from "react-bootstrap";

export default function Form_Info_Operativa() {
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Información Operativa</Card.Title>
                <p className="text-muted">Detalles sobre el funcionamiento de tu restaurante</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label className="fw-semibold">Capacidad Total (personas) <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="number" placeholder="50" />
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Horario de Apertura <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="time" />
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Horario de Cierre <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="time" />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label style={{ fontSize: "13px" }}>Servicios Adicionales</Form.Label>
                        <Col>
                        <Form.Check type="checkbox" label="Servicio a domicilio" />
                        </Col>
                        <Col>
                        <Form.Check type="checkbox" label="Parqueadero" />
                        </Col>
                        <Col>
                        <Form.Check type="checkbox" label="Acepta tarjetas" />
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}