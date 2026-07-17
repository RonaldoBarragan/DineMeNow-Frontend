import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { LiaSave } from "react-icons/lia";

export default function Profile_Form() {
    return (
        <>
        <Card>
            <Card.Body>
                <div className="d-flex align-items-center mb-4">
                    <BsPerson size={19} className="me-2"/>
                    <Card.Title className="fs-6 m-0">Información personal</Card.Title>
                </div>

                <Form className="px-2">
                    <Row className="px-0">
                        <Col>
                            <Form.Group controlId="formNombre1">
                                <Form.Label>Primer Nombre</Form.Label>
                                <Form.Control size="sm" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formNombre2">
                                <Form.Label>Segundo Nombre</Form.Label>
                                <Form.Control size="sm" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="px-0 mb-2">
                        <Col>
                            <Form.Group controlId="formApellido1">
                                <Form.Label>Primer Apellido</Form.Label>
                                <Form.Control size="sm" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formApellido2">
                                <Form.Label>Segundo Apellido</Form.Label>
                                <Form.Control size="sm" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="px-0">
                        <Card.Subtitle className="mb-2 fw-semibold">Información de contacto</Card.Subtitle>
                        <Col>
                            <Form.Group>
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control placeholder="example@mail.com" size="sm" disabled />
                                <Form.Text className="small">El correo no se puede modificar</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formTelefono">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control placeholder="1234678.." size="sm" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" className="buttonNaranjaDegrade letra-button-submit d-flex align-items-center gap-1"><LiaSave size={18} />Guardar cambios</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}