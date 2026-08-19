import './card-GestiónEmpleados.css';
import {Badge,Card,Row,Col,Form,Modal,Button} from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState, useEffect } from 'react';
import {getListEmpleadosRestaurant, eliminarEmpleado, actualizarEmpleado} from "../../api/Restaurant-Service";
import { useAuth } from '../../context/AuthContext';

function ListaEmpleados() {
    const { user } = useAuth();
    const [mostrarModal, setMostrarModal] = useState(false);
    const [empleadoSeleccionado, setEmpleadoSelecionado] = useState(null);
    const [empleados, setEmpleados] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        //cargar la lista de empleados
        const cargarEmpleados = async () => {

            try {

                if (!user?.id) {
                    return;
                }

                const empleadosObtenidos =
                    await getListEmpleadosRestaurant(user.id);

                console.log(
                    "Empleados obtenidos:",
                    empleadosObtenidos
                );

                setEmpleados(empleadosObtenidos);

            } catch (error) {

                console.error(
                    "Error al obtener la lista de empleados:",
                    error
                );

            } finally {

                setCargando(false);

            }
        };

        cargarEmpleados();

    }, [user?.id]);
    const abrirEditar = (empleado) => {
        const partes = empleado.nombre.trim().split(/\s+/); // Separa el texto cada vez que encuentra un espacio
        // /\s+/
        // \s  = cualquier espacio
        // +   = uno o más espacios seguidos
        setEmpleadoSelecionado({
            ...empleado,
            primerNombre: partes[0] || "",
            segundoNombre: partes[1] || "",
            primerApellido: partes[2] || "",
            segundoApellido: partes[3] || ""
        });
        setMostrarModal(true);
    }
    //actualizar empleado
    const handleActualizarEmpleado = async () => {
        try {
            const empleadoActualizado = {...empleadoSeleccionado,
            nombre: `${empleadoSeleccionado.primerNombre} ${empleadoSeleccionado.segundoNombre}`,
            apellido: `${empleadoSeleccionado.primerApellido} ${empleadoSeleccionado.segundoApellido}`};
            const empleado = await actualizarEmpleado(empleadoSeleccionado.id, empleadoActualizado);
            setEmpleado((empleadosActuales) =>
                empleadosActuales.map((empleadoActual) => (empleadoActual.id === empleado.id 
                    ? empleado 
                    : empleadoActual))
            );
            setMostrarModal(false);
            alert("Empleado actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar el empleado:", error);
            alert("Ocurrió un error al actualizar el empleado. Por favor, inténtelo de nuevo.");
        }
    };

    //Eliminar empleado
    const handleEliminarEmpleado = async (empleadoId) => {
        if (window.confirm("¿Está seguro de que desea eliminar este empleado?")) {
            try {
                await eliminarEmpleado(empleadoId);
                //Eliminar directamente de la lista 
                setEmpleados((empleadosActuales) =>
                    empleadosActuales.filter((empleado) => empleado.id !== empleadoId)
                );
                alert("Empleado eliminado correctamente.");
            } catch (error) {
                console.error("Error al eliminar el empleado:", error);
                alert("Ocurrió un error al eliminar el empleado. Por favor, inténtelo de nuevo.");
            }
        }
    };
return (
        <>
        <Modal
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        centered
        className="modal-empleados"
        >
        <Modal.Header closeButton>
            <Modal.Title className='title-modal'>
                Editar Empleado
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className='form-modal'>
            {empleadoSeleccionado && (
                <Form >
                    <Row className="fila-formulario">
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Primer Nombre</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.primerNombre}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, primerNombre: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Segundo Nombre</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.segundoNombre}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, segundoNombre: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="fila-formulario">
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Primer Apellido</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.primerApellido}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, primerApellido: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Segundo Apellido</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.segundoApellido}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, segundoApellido: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Correo</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.correo}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, correo: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Teléfono</Form.Label>
                            <Form.Control className='control-model'
                            defaultValue={empleadoSeleccionado.telefono}
                            onChange={(e) => setEmpleadoSeleccionado({...empleadoSeleccionado, telefono: e.target.value})}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Cargo</Form.Label>
                            <Form.Select  className='select' defaultValue={empleadoSeleccionado.rol}>
                                <option value="ROL_MESERO">Mesero</option>
                                <option value="ROL_CHEF">Chef</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group >
                            <Form.Label className='label-model'>Estado</Form.Label>
                            <Form.Select className='select' defaultValue={empleadoSeleccionado.estado}>
                                <option value="DISPONIBLE">Disponible</option>
                                <option value="NO DISPONIBLE">No Disponible</option>
                            </Form.Select>
                             </Form.Group>
                        </Col>
                    </Row>
                    
                </Form>
        )}
        </Modal.Body>

        <Modal.Footer className="botones-modal" >
            
            <Button 
                className="btn-cancelar"
                onClick={() => setMostrarModal(false)}
                >
                Cancelar
            </Button>

            <Button className="btn-confirmar" 
            onClick={handleActualizarEmpleado}>
                Guardar Cambios
            </Button>
            
        </Modal.Footer>
        </Modal>
            <div className="card-lista">
            {/*CARDS*/}
            <Row>
                <Col md={4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad'>{empleados.length}</h2>
                        <p className='total-emple'>Total de Empleados</p>
                    </Card>
                </Col>
                <Col md= {4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad act'>{empleados.filter(empleado => empleado.estado === "DISPONIBLE").length}</h2>
                        <p className='emple-activos'>Empleados Disponibles</p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-estadistica">
                        <h2 className='cantidad'>{empleados.filter(empleado => empleado.estado === "NO DISPONIBLE").length}</h2>
                        <p className='emple-inactivos'>Empleados No Disponibles</p>
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
                    {cargando && (
                        <tr>
                            <td colSpan="6">Cargando empleados...</td>
                        </tr>
                    )}
                    {!cargando && empleados.length === 0 && (
                        <tr>
                            <td colSpan="6">No se encontraron empleados.</td>
                        </tr>
                    )}
                    {/* EMPLEADOS */} 
                    {!cargando && empleados.map((empleado, index) => (
                        <tr key={empleado.id || index}>
                           {/* ID */}
                        <td>
                            #
                            {String(index + 1).padStart(
                            3,
                            "0"
                            )}

                                </td>
                                {/* NOMBRE */}
                                    <td>
                                        <div className='info-empleado'>
                                            <div className='nombre'>
                                                {empleado.nombre}
                                                {" "}
                                                {empleado.apellido}
                                            </div>

                                            <div className='correo'>
                                                {empleado.correo}
                                            </div>
                                        </div>
                                    </td>

                                {/* CARGO */}

                                    <td>
                                        <Badge className='cargo'>
                                            {
                                                empleado.rol === "ROL_MESERO"
                                                    ? "Mesero"
                                                    : empleado.rol === "ROL_CHEF"
                                                    ? "Chef"
                                                    : empleado.rol
                                            }
                                        </Badge>
                                    </td>

                                {/* TELEFONO */}
                                    <td>
                                        {empleado.telefono}
                                    </td>

                                {/* ESTADO */}
                                    <td>
                                        <Badge
                                            className={
                                                empleado.estado === "DISPONIBLE"
                                                    ? "disponible"
                                                    : "no disponible"
                                            }
                                        >
                                            {empleado.estado}
                                        </Badge>
                                    </td>

                                {/* ACCIONES */}
                                    <td>
                                        <button
                                            className='btn-accion'
                                            onClick={() =>
                                                abrirEditar(empleado)
                                            }
                                            >
                                            <FiEdit />
                                        </button>

                                        <button
                                            className='btn-accion'
                                            onClick={() =>
                                                handleEliminarEmpleado(
                                                    empleado.id
                                                )
                                            }
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </td>
                    |   </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        
      </>
    )
}
export default ListaEmpleados;
