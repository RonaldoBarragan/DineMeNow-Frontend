import { Card, Col, Form, Row } from "react-bootstrap";
import { IoRestaurant } from "react-icons/io5";
import { FaCrown, FaBuilding } from "react-icons/fa6"; // Agregué FaBuilding para el NIT
import { IoIosMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { PiTextAlignJustifyFill } from "react-icons/pi";
import './page-style.css';

export default function Form_Restaurante({ onChange, valores }) {
    return (
        <>
            <div className="mb-4">
                <h3 className="fw-bold">Registra tu restaurante</h3>
                <p className="text-muted text-left">
                    Únete a DineMeNow y comienza a gestionar tus reservas de manera eficiente.
                </p>
            </div>

            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="fw-bold mb-3">Información Básica del Restaurante</Card.Title>
                    <p className="text-muted text-left">Proporciona los datos principales de tu restaurante</p>

                    <div className="mt-3">
                        {/* Fila 1: nombre y razonsocial */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Nombre del Restaurante <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">
                                    <Form.Control 
                                        name="nombre"
                                        value={valores?.nombre || ""}
                                        onChange={onChange}
                                        type="text" 
                                        placeholder="Ej: La Puerta Falsa" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <IoRestaurant className="icon-form-overlay" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Razón Social <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">
                                    <Form.Control 
                                        name="razonSocial"
                                        value={valores?.razonSocial || ""}
                                        onChange={onChange}
                                        type="text" 
                                        placeholder="Nombre legal de la empresa" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <FaBuilding className="icon-form-overlay" />
                                </div>
                            </Col>
                        </Row>

                        {/* Fila 2: NIT y propietario */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label className="fw-semibold">NIT <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">
                                    <Form.Control 
                                        name="nit"
                                        value={valores?.nit || ""}
                                        onChange={onChange}
                                        type="text" 
                                        placeholder="123456789-0" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <RiMessage2Fill className="icon-form-overlay" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Nombre del Propietario <span className="text-danger">*</span></Form.Label>                      
                                <div className="input-container-relative">
                                    <Form.Control 
                                        name="propietario"
                                        value={valores?.propietario || ""} 
                                        onChange={onChange}        
                                        type="text" 
                                        placeholder="Nombre completo" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <FaCrown className="icon-form-overlay" />  
                                </div>                    
                            </Col>
                        </Row>

                        {/* Fila 3: correo y teléfono */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Correo Electrónico <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">  
                                    <Form.Control 
                                        name="correo"
                                        value={valores?.correo || ""}
                                        onChange={onChange}
                                        type="email" 
                                        placeholder="restaurante@ejemplo.com" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <IoIosMail className="icon-form-overlay" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Teléfono de Contacto <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">
                                    <Form.Control 
                                        name="telefono"
                                        value={valores?.telefono || ""}
                                        onChange={onChange}
                                        type="text" 
                                        placeholder="300 123 4567" 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <RiMessage2Fill className="icon-form-overlay" />
                                </div>
                            </Col>
                        </Row>

                        {/* Fila 4: categoría y descripción */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Categoría <span className="text-danger">*</span></Form.Label>
                                <Form.Select 
                                    name="categoria"
                                    value={valores?.categoria || ""} 
                                    onChange={onChange}
                                    className="inputForm"
                                >
                                    <option value="">Selecciona una categoría...</option>
                                    <option value="Comida Típica">Comida Típica Colombiana</option>
                                    <option value="Comida Rápida">Comida Rápida</option>
                                    <option value="Italiana">Italiana / Pastas</option>
                                    <option value="Parrilla">Parrilla / Asados</option>
                                    <option value="Vegetariana">Vegetariana / Vegana</option>
                                    <option value="Internacional">Internacional</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-semibold">Descripción <span className="text-danger">*</span></Form.Label>
                                <div className="input-container-relative">        
                                    <Form.Control 
                                        name="descripcion"
                                        value={valores?.descripcion || ""} //El símbolo ?. (Optional Chaining) le dice a React: "Si 'valores' existe, lee la propiedad; si no existe, no explotes". Y el || "" pone un texto vacío por defecto.
                                        onChange={onChange}
                                        placeholder="Describe tu restaurante..." 
                                        as="textarea" 
                                        rows={1} 
                                        className="inputForm icon-form-padding-left" 
                                    />
                                    <PiTextAlignJustifyFill className="icon-form-overlay" />
                                </div>  
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}