import { Badge, Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { useState } from "react";

export default function Section_Restaurants() {

    const [show, setShow] = useState(false);
    
    return (
        <>
        {/*Contenido del modal*/}
        <Modal centered show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Nuevo Restaurante</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="size-letra-propio">
                    <Row>
                        <Col>
                        <Form.Group controlId="NameRestaurant">
                            <Form.Label>Nombre del Restaurante</Form.Label>
                            <Form.Control placeholder="Ej: La Mesa Criolla" type="text" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="RL">
                            <Form.Label>Representante Legal</Form.Label>
                            <Form.Control placeholder="Nombre Completo" type="text" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="CorreoRestaurant">
                            <Form.Label>Email del Restaurante</Form.Label>
                            <Form.Control placeholder="restaurante@email.com" type="email" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="TelRestaurant">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control placeholder="+57 301 234 5678" type="text" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="AddressRestaurant">
                            <Form.Label>Direccion Completa</Form.Label>
                            <Form.Control placeholder="Calle 123 #45-67, Chapinero, Bogotá" type="text" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="Zone">
                            <Form.Label>Zona</Form.Label>
                            <Form.Control placeholder="Zona" type="text" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="TypeFood">
                            <Form.Label>Tipo Cocina</Form.Label>
                            <Form.Select aria-label="Default select example" className="bgc-form-propio">
                                <option selected disabled>Seleccione Tipo</option>
                                <option>Colombiana</option>
                                <option>Italiana</option>
                                <option>Japonesa</option>
                                <option>Francesa</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="Capacity">
                            <Form.Label>Capacidad Total</Form.Label>
                            <Form.Control placeholder="Numero Personas" min={1} type="number" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="Prices">
                            <Form.Label>Rango de Precios</Form.Label>
                            <Form.Select aria-label="Default select example" className="bgc-form-propio">
                                <option selected disabled>Seleccione Rango</option>
                                <option>$ - Economico</option>
                                <option>$ - Moderado</option>
                                <option>$$ - Caro</option>
                                <option>$$$ - Muy Caro</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group controlId="Desc">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control placeholder="Describe el restaurante, ambiente, especialidades..." as="textarea" rows={2} />
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className="size-letra-propio bg-white" variant="light" onClick={() => setShow(false)}>Cancelar</Button>
                <Button className="size-letra-propio" variant="dark" onClick={() => setShow(false)}>Registrar Restaurante</Button>
            </Modal.Footer>
        </Modal>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Cuentas de Restaurantes</h3>
            <Button size="sm" onClick={() => setShow(true)} className="buttonNaranjaDegrade style-button-propio"><span className="me-2">+</span> Registrar nuevo Restaurante</Button>
        </div>
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Restaurante</th>
                    <th>Gestor</th>
                    <th>Contacto</th>
                    <th>Rating</th>
                    <th>Estado Cuenta</th>
                    <th>Fecha Registro</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td>La Mesa Criolla<br /><small className="text-muted">Zona Rosa • Colombiana</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@lamesacriolla.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.5</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 2 */}
                <tr>
                    <td>Bella Napoli<br /><small className="text-muted">Chapinero • Italiana</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@bellanapoli.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.8</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 3 */}
                <tr>
                    <td>Sakura Sushi<br /><small className="text-muted">Zona T • Japonesa</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@sakurasushi.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.6</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 4 */}
                <tr>
                    <td>El Rincón Gourmet<br /><small className="text-muted">Usaquén • Francesa</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@elrincóngourmet.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.9</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}