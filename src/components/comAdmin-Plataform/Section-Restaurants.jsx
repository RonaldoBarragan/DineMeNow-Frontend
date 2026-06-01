import { Badge, Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal_Delete_Confirm from "./Modal-Confirm-Restaurant-Delete";
import { eliminarRestaurante } from "../../api/AdminPlatService";

export default function Section_Restaurants({restaurantes, setRestaurantes}) {

    const [show, setShow] = useState(false);
    
    const [nitAEliminar, setNitAEliminar] = useState(null);

    // Abre el modal guardando el nit del restaurante a eliminar
    const eliminarRestauranteHandler = (nit) => {
    setNitAEliminar(nit);
    };

    // Se ejecuta al presionar "Eliminar" en el modal
    const confirmarEliminar = async () => {
    try {
        await eliminarRestaurante(nitAEliminar);
        setRestaurantes((prev) => prev.filter((r) => r.nit !== nitAEliminar));
        setNitAEliminar(null); // cierra el modal
    } catch (error) {
        alert("Error al eliminar el restaurante.");
        setNitAEliminar(null);
    }
    };

    // Se ejecuta al presionar "Cancelar" en el modal
    const cancelarEliminar = () => {
    setNitAEliminar(null);
    };

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
        {restaurantes.length === 0
        ? <p className="text-muted text-center mt-3">No hay restaurantes registrados.</p>
        :
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Restaurante</th>
                    <th>Gestor</th>
                    <th>Contacto</th>
                    <th>Estado Cuenta</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                {restaurantes.map((r) => (
                <tr key={r.id}>
                    <td>{r.nombre}<br /><small className="text-muted">{r.direccion.calle} {r.direccion.numero} • {r.categoria}</small></td>
                    <td>{r.propietario}<br /><small className="text-muted">{r.razonSocial}</small></td>
                    <td>{r.correo}<br /><small className="text-muted">+57 {r.telefono}</small></td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover" onClick={() => eliminarRestauranteHandler(r.nit)}><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        }
        <Modal_Delete_Confirm mostrar={nitAEliminar !== null} onConfirmar={confirmarEliminar} onCancelar={cancelarEliminar} mensaje="¿Estás seguro de que deseas eliminar este restaurante?"/>
        </>
    )
}