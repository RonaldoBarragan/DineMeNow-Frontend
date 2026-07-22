import './card-GestiónEmpleados.css'
import { Badge, Card, Container, Row, Col, Tabs, Tab, Form, Modal } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
function ListaEmpleados (){
    const[mostrarModal, setMostrarModal] = useState(false);
    const[empleadoSeleccionado, setEmpleadoSelecionado] = useState(false);
    const abrirEditar = (empleado) => {
        setEmpleadoSelecionado(empleado);
        setMostrarModal(true);
    }
return (
        <>
        <Modal
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title className='title-modal'>
                Editar Empleado
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {empleadoSeleccionado && (
                <Form>
                    <Row className="fila-formulario">
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Primer Nombre</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.nombre}
                            />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Segundo Nombre</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.nombre}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="fila-formulario">
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.nombre}
                            />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.nombre}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.correo}
                            />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                            defaultValue={empleadoSeleccionado.telefono}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Select defaultValue={empleadoSeleccionado.cargo}>
                                <option value="Mesero">Mesero</option>
                                <option value="Cocina">Cocina</option>
                                <option value="Cajero">Cajero</option>
                                <option value="Supervisor">Supervisor</option>
    </                      Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select defaultValue={empleadoSeleccionado.estado}>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                                <option value="Vacaciones">Vacaciones</option>
                            </Form.Select>
                             </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                        value={empleadoSeleccionado.id}
                        readOnly
                        />
                    </Form.Group>
                </Form>
        )}
        </Modal.Body>

        <Modal.Footer>
            <button 
                className="btn-cancelar"
                onClick={() => setMostrarModal(false)}
                >
                Cancelar
            </button>

            <button className="btn-confirmar">
                Guardar Cambios
            </button>
        </Modal.Footer>
        </Modal>
            <div className="card-lista">
            {/*CARDS*/}
            <Row>
                <Col md={4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad'>5</h2>
                        <p className='total-emple'>Total de Empleados</p>
                    </Card>
                </Col>
                <Col md= {4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad act'>3</h2>
                        <p className='emple-activos'>Empleados Activos</p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad'>1</h2>
                        <p className='emple-inactivos'>Empleados Inactivos</p>
                    </Card>
                </Col>
            </Row>
             {/*titulo de lista + buscar */}
             <div className='lista'>
             {/* TÍTULO */}
            <p className="titulo-lista">Lista de Empleados</p>
            {/* BUSCADOR */}
             <div className="search-box">
                <FaMagnifyingGlass className="icono-buscar" />
              
                <Form.Control
                    type="text"
                    placeholder="Buscar por nombre o cargo..."
                    />
            </div>
            </div>
            {/* LISTA*/}
            <div className="tabla-container">
            <table className='tabla'>
                {/*CABECERA DE LA TABLA ID-NOMBRE-CRAGO ETC*/}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Empleado</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {/*contenido de datos*/}
                <tbody>
                    <tr>
                        <td>#001</td>
                        <td>
                            <div className='info-empleado'>
                                <div className='nombre'>Carlos Alberto Rodríguez Pérez</div>
                                <div className='correo'>carlos.rodriguez@gmail.com</div>
                            </div>
                        </td>
                        <td><Badge className='cargo'>Mesero</Badge></td>
                        <td>3201234567</td>
                        <td><Badge className='activo' >Activo</Badge></td>
                        <td>
                            <button className='btn-accion'
                            onClick={() => abrirEditar({
                            id: "#001",
                            nombre: "Carlos Alberto Rodríguez Pérez",
                            correo: "carlos.rodriguez@gmail.com",
                            cargo: "Mesero",
                            telefono: "3201234567",
                            estado: "Activo"
                            })}
                            >
                                <FiEdit />
                            </button>
                            <button className='btn-accion'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#002</td>
                        <td>
                            <div className='info-empleado'>
                                <div className='nombre'>Ana María González López</div>
                                <div className='correo'>ana.gonzalez@gmail.com</div>
                            </div>
                        </td>
                        <td><Badge  className='cargo'>Cocina</Badge></td>
                        <td>3159876543</td>
                        <td><Badge className='activo'>Activo</Badge></td>
                        <td>
                            <button className='btn-accion'
                            onClick={() => abrirEditar({
                            id: "#002",
                            nombre: "Ana María González López",
                            correo: "ana.gonzalez@gmail.com",
                            cargo: "Cocina",
                            telefono: "3159876543",
                            estado: "Activo"
                            })}
                            >
                                <FiEdit />
                            </button>
                            <button className='btn-accion'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#003</td>
                        <td>
                            <div className='info-empleado'>
                                <div className='nombre'>Luis Fernando Martínez Silva</div>
                                <div className='correo'>luis.martinez@gmail.com</div>
                            </div>
                        </td>
                        <td><Badge  className='cargo'>Mesero</Badge></td>
                        <td>3159876543	</td>
                        <td><Badge className='vacaciones'>Vacaciones</Badge></td>
                        <td>
                            <button className='btn-accion'
                            onClick={() => abrirEditar({
                            id: "#003",
                            nombre: "Luis Fernando Martínez Silva",
                            correo: "luis.martinez@gmail.com",
                            cargo: "Mesero",
                            telefono: "3159876543",
                            estado: "Vacaciones"
                            })}
                            >
                                <FiEdit />
                            </button>
                            
                            <button className='btn-accion'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#004</td>
                        <td>
                            <div className='info-empleado'>
                                <div className='nombre'>Patricia Ramírez Castro</div>
                                <div className='correo'>patricia.ramirez@gmail.com</div>
                            </div>
                        </td>
                        <td><Badge  className='cargo'>Cocina</Badge></td>
                        <td>3102345678</td>
                        <td><Badge className='activo'>Activo</Badge></td>
                        <td>
                            <button className='btn-accion'
                            onClick={() => abrirEditar({
                            id: "#004",
                            nombre: "Patricia Ramírez Castro",
                            correo: "patricia.ramirez@gmail.com",
                            cargo: "Cocina",
                            telefono: "3102345678",
                            estado: "Activo"
                            })}
                            >
                                <FiEdit />
                            </button>
                            <button className='btn-accion'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#005</td>
                        <td>
                            <div className='info-empleado'>
                                <div className='nombre'>Jorge Andrés Sánchez Mora</div>
                                <div className='correo'>jorge.sanchez@gmail.com</div>
                            </div>
                        </td>
                        <td><Badge className='cargo'>Mesero</Badge></td>
                        <td>3134567890	</td>
                        <td><Badge className='inactivo'>Inactivo</Badge></td>
                        <td>
                            <button className='btn-accion'
                            onClick={() => abrirEditar({
                            id: "#005",
                            nombre: "Jorge Andrés Sánchez Mora",
                            correo: "jorge.sanchez@gmail.com",
                            cargo: "Mesero",
                            telefono: "3134567890",
                            estado: "Inactivo"
                            })}
                            >
                                <FiEdit />
                            </button>
                            <button className='btn-accion'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        
      </>
    )
}
export default ListaEmpleados;
