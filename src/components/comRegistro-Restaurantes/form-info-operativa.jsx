import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import './form-info-documentacion.css'; {/*Reutiliza una clase CSS del otro formulario*/}
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDeliveryDining } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

export default function Form_Info_Operativa() {
    return (
        <>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Información Operativa</Card.Title>
                <p className="text-muted">Detalles sobre el funcionamiento de tu restaurante</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label className="fw-semibold">Capacidad Total (personas) <span className="text-danger">*</span></Form.Label>
                        <InputGroup>
                        <InputGroup.Text><HiMiniUserGroup /></InputGroup.Text>
                        <Form.Control type="number" placeholder="50" />
                        </InputGroup>
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
                        <Form.Label className="letra-size">Servicios Adicionales</Form.Label>
                        <Col>
                        <InputGroup>
                        <InputGroup.Text><MdDeliveryDining /></InputGroup.Text>
                        <Form.Check type="checkbox" label="Servicio a domicilio" />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                        <InputGroup.Text><FaParking /></InputGroup.Text>
                        <Form.Check type="checkbox" label="Parqueadero" />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup>
                        <InputGroup.Text><FaCreditCard /></InputGroup.Text>
                        <Form.Check type="checkbox" label="Acepta tarjetas" />
                        </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}