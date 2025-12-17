import { Card, Col, Form, Row } from "react-bootstrap";
import './page-style.css';
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
                <p className="text-muted text-left">Detalles sobre el funcionamiento de tu restaurante</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label className="fw-semibold">Capacidad Total (personas) <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">                       
                        <Form.Control type="number" placeholder="50" className="inputForm icon-form-padding-left" />
                        <HiMiniUserGroup className="icon-form-overlay" />
                        </div> 
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Horario de Apertura <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">
                        <Form.Control type="time" className="inputForm" />
                        </div>
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Horario de Cierre <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">
                        <Form.Control type="time" className="inputForm" />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label className="letra-size">Servicios Adicionales</Form.Label>
                        <Col>                       
                        <div className="d-flex align-items-center gap-2">
                        <MdDeliveryDining />
                        <Form.Check type="checkbox" label="Servicio a domicilio" />
                        </div>
                        </Col>
                        <Col>
                        <div className="d-flex align-items-center gap-2">
                        <FaParking />
                        <Form.Check type="checkbox" label="Parqueadero" />
                        </div>
                        </Col>
                        <Col>
                        <div className="d-flex align-items-center gap-2">
                        <FaCreditCard />
                        <Form.Check type="checkbox" label="Acepta tarjetas" />
                        </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}