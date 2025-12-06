import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { IoRestaurant } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { PiTextAlignJustifyFill } from "react-icons/pi";

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
                        <div className="input-container-relative">
                        <Form.Control type="text" placeholder="Ej: La Puerta Falsa" className="inputForm icon-form-padding-left" />
                        <IoRestaurant className="icon-form-overlay" />
                        </div>
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Nombre del Propietario/Representante <span className="text-danger">*</span></Form.Label>                      
                        <div className="input-container-relative">
                        <Form.Control type="text" placeholder="Nombre completo" className="inputForm icon-form-padding-left" />
                        <FaCrown className="icon-form-overlay" />  
                        </div>                    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Label className="fw-semibold">Correo Electronico <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">  
                        <Form.Control type="email" placeholder="restaurante@ejemplo.com" className="inputForm icon-form-padding-left" />
                        <IoIosMail className="icon-form-overlay" />
                        </div>
                        </Col>
                        <Col>
                        <Form.Label className="fw-semibold">Telefono de Contacto <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">
                        <Form.Control type="text" placeholder="(+57) 300 123 4567" className="inputForm icon-form-padding-left" />
                        <RiMessage2Fill className="icon-form-overlay" />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Label className="fw-semibold">Descripción del Restaurante <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">        
                        <Form.Control placeholder="Describe tu restaurante, especialidades, ambiente, etc." as="textarea" rows={1}/>
                        <PiTextAlignJustifyFill />
                        </div>  
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
        </>
    )
};