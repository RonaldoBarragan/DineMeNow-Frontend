import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { LiaSave } from "react-icons/lia";
import { TbLock } from "react-icons/tb";

export default function Security_Pass() {
    return (
        <>
        <Card>
            <Card.Body>
                <div className="d-flex align-items-center mb-4">
                    <TbLock size={19} className="me-2"/>
                    <Card.Title className="fs-6 m-0">Información personal</Card.Title>
                </div>

                <Form className="px-2">
                    <Row md={2} className="px-0">
                        <Col  className="mb-3">
                            <Form.Group controlId="formContraActual">
                                <Form.Label>Contraseña actual</Form.Label>
                                <Form.Control placeholder="••••••••" type="password" size="sm" />
                            </Form.Group>
                        </Col>
                        <Col  className="mb-3">
                            <Form.Group controlId="formContraNueva">
                                <Form.Label>Contraseña nueva</Form.Label>
                                <Form.Control placeholder="••••••••" type="password" size="sm" />
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group controlId="formContraConfirm">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control placeholder="••••••••" type="password" size="sm" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" className="buttonNaranjaDegrade letra-button-submit d-flex align-items-center gap-1"><LiaSave size={18} />Actualizar Contraseña</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}