import { Card, Col, Form, Row } from "react-bootstrap";

export default function Form_Restaurante() {
    return (
        <>
            <div className="mb-4">
            <h3 className="fw-bold">Registra tu restaurante</h3>
            <p className="text-muted">Únete a DineMeNow y comienza a gestionar tus reservas de manera eficiente. 
            Nuestro equipo revisará tu solicitud y te contactaremos en 24-48 horas.</p>
            </div>

        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Información Básica del Restaurante</Card.Title>
                <p className="text-muted">Proporciona los datos principales de tu restaurante</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label className="fw-semibold">Nombre del Restaurante <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Ej: La Puerta Falsa" />
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Nombre del Propietario/Representante <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Nombre completo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Label className="fw-semibold">Correo Electronico <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="email" placeholder="restaurante@ejemplo.com" />
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Telefono de Contacto <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="(+57) 300 123 4567" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Label className="fw-semibold">Descripción del Restaurante <span className="text-danger">*</span></Form.Label>
                        <Form.Control placeholder="Describe tu restaurante, especialidades, ambiente, etc." as="textarea" rows={2}/>
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
        </>
    )
};