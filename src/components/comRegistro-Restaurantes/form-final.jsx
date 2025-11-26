import { Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Form_Final() {
    return (
        <>
        <Container className="container py-5">
            <h3 className="fw-bold">Registra tu restaurante</h3>
            <p>Únete a DineMeNow y comienza a gestionar tus reservas de manera eficiente. 
            Nuestro equipo revisará tu solicitud y te contactaremos en 24-48 horas.</p>
        </Container>
        <Card>
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Información Básica del Restaurante</Card.Title>
                <p className="text-muted">Proporciona los datos principales de tu restaurante</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label className="fw-semibold">Nombre del Restaurante <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Ej: La Puerta Falsa" />
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
        </>
    )
};