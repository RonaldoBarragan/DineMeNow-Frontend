import './card-GestiónEmpleados.css'
import { Badge, Card, Container, Row, Col, Tabs, Tab, Form } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit, FiTrash2 } from "react-icons/fi";
function ListaEmpleados (){
return (
        <>
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
                            <button className='btn-accion'>
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
                            <button className='btn-accion'>
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
                            <button className='btn-accion'>
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
                            <button className='btn-accion'>
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
                            <button className='btn-accion'>
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
        
      </>
    )
}
export default ListaEmpleados;
