import './card-GestiónEmpleados.css'
import { Badge, Card, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { LuBuilding } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
function CardGestionEmpleados(){
    return (
        <>
        <Container className="gestionempleados">
        <Card className="card-gestionempleados">
          <Card.Body>
            {/*TITULO*/}
            <LuBuilding  className="icono"/>
            <div>
            <Card.Title className="titulo">Gestión de Empleados</Card.Title>
            <Card.Text className="text">
              Administra el equipo de tu restaurante
            </Card.Text>
            </div>
            {/*TABS BUTTON*/}
            <Tabs defaultActiveKey="Gestion"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Gestion" title="Gestión de Empleados" >
                     
                </Tab>
                <Tab eventKey="Añadir" title="Añadir Empleado" >
                    
                </Tab>
            </Tabs>
            {/*CARDS*/}
            <Row>
                <Col md={4}>
                    <Card>
                        <h2>5</h2>
                        <p className='total-emple'>Total de Empleados</p>
                    </Card>
                </Col>
                <Col md= {4}>
                    <Card>
                        <h2>3</h2>
                        <p className='emple-activos'>Empleados Activos</p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <h2>1</h2>
                        <p className='emple-inactivos'>Empleados Inactivos</p>
                    </Card>
                </Col>
            </Row>
            {/* LISTA*/}
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
                        <td>Carlos Alberto Rodríguez Pérez</td>
                        <td><Badge bg="secondary">Mesero</Badge></td>
                        <td>3201234567</td>
                        <td><Badge bg="secondary">Activo</Badge></td>
                        <td>
                            <button className='btn-accion editar'>
                                <FiEdit />
                            </button>
                            <button className='btn-accion eliminar'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#002</td>
                        <td>Ana María González López</td>
                        <td><Badge bg="secondary">Cocina</Badge></td>
                        <td>3159876543</td>
                        <td><Badge bg="secondary">Activo</Badge></td>
                        <td>
                            <button className='btn-accion editar'>
                                <FiEdit />
                            </button>
                            <button className='btn-accion eliminar'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#003</td>
                        <td>Luis Fernando Martínez Silva</td>
                        <td><Badge bg="secondary">Mesero</Badge></td>
                        <td>3159876543	</td>
                        <td><Badge bg="secondary">Vacaciones</Badge></td>
                        <td>
                            <button className='btn-accion editar'>
                                <FiEdit />
                            </button>
                            <button className='btn-accion eliminar'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#004</td>
                        <td>Patricia Ramírez Castro</td>
                        <td><Badge bg="secondary">Cocina</Badge></td>
                        <td>3102345678</td>
                        <td><Badge bg="secondary">Activo</Badge></td>
                        <td>
                            <button className='btn-accion editar'>
                                <FiEdit />
                            </button>
                            <button className='btn-accion eliminar'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>#005</td>
                        <td>Jorge Andrés Sánchez Mora</td>
                        <td><Badge bg="secondary">Mesero</Badge></td>
                        <td>3134567890	</td>
                        <td><Badge bg="secondary">Inactivo</Badge></td>
                        <td>
                            <button className='btn-accion editar'>
                                <FiEdit />
                            </button>
                            <button className='btn-accion eliminar'>
                                <FiTrash2 />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

          </Card.Body>
        </Card>
      </Container>
      </>
    )
}
export default CardGestionEmpleados;