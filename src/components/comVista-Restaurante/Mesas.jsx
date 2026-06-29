import { Card, Table, Button, Badge, Row, Col, Modal, Form } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { actualizarMesa, crearMesaRestaurant, eliminarMesa, getListMesasRestaurant } from "../../api/Restaurant-Service";

export default function Mesas() {
    const { user } = useAuth();
    const [ mesas, setMesas ] = useState([]);

    // Estados para el Modal de creación
    const [showModal, setShowModal] = useState(false);
    const [numMesa, setNumMesa] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [restauranteNit, setRestauranteNit] = useState(""); // Se llenará dinámicamente

    // Estados para el Modal de edición
    const [showEditModal, setShowEditModal] = useState(false);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
    const [editNumMesa, setEditNumMesa] = useState("");
    const [editCapacidad, setEditCapacidad] = useState("");
    const [editEstado, setEditEstado] = useState(true);

    
        const fetchMesas = async () => {
            try {
                const data = await getListMesasRestaurant(user.id); // Usa el id de la acc del restaurante para obtener su NIT y luego las mesas
                setMesas(data);
                if(data.length > 0 && data[0].nitRestaurante) {
                    setRestauranteNit(data[0].nitRestaurante);// Asigna el NIT del restaurante a la variable de estado
                }
            } catch (error) {
                console.error("Error al obtener las mesas:", error);
            }
        };

        useEffect(()=>{
            if (user) fetchMesas();
        }, [user]);

        //funcion para manejar el envio del formulario
        const  handleCrearMesa = async (e) => {
            e.preventDefault();

            try{
                
                let nitActual = restauranteNit;

                if (!nitActual){

                    const config={
                        headers:{
                            Authorization: `Bearer ${user.token}`,
                        }
                    };
                    // Hace un llamado al endpoint de restaurante para traer el NIT de forma segura
                    const {data: restaurante} = await axios.get(`http://localhost:8080/api/restaurantes/${user.id}`, config);
                    nitActual = restaurante.nit;
                    setRestauranteNit(restaurante.nit);
                }

                const nuevaMesa = {
                    numMesa: parseInt(numMesa),
                    capacidad: parseInt(capacidad),
                    estado: true, // Por defecto, la mesa se crea como disponible
                    nitRestaurante: nitActual
                };

                await crearMesaRestaurant(nuevaMesa);

                // Limpiar campos, cerrar modal y refrescar la tabla de inmediato
                setNumMesa("");
                setCapacidad("");
                setShowModal(false);
                fetchMesas(); // Refresca la lista de mesas después de crear una nueva
            } catch(error){
                console.error("Error al crear la mesa:", error);
                alert("Hubo un error al crear la mesa. Verificar la consola.");
            }
        };

        // 2. Abrir modal de edición con los datos cargados
    const handleAbrirEditar = (mesa) => {
        setMesaSeleccionada(mesa);
        setEditNumMesa(mesa.numMesa);
        setEditCapacidad(mesa.capacidad);
        setEditEstado(mesa.estado === 'true' || mesa.estado === true);
        setShowEditModal(true);
    };

    // 3. Guardar cambios de la edición
    const handleEditarMesa = async (e) => {
        e.preventDefault();
        try {
            const mesaModificada = {
                id: mesaSeleccionada.id,
                numMesa: parseInt(editNumMesa),
                capacidad: parseInt(editCapacidad),
                estado: editEstado,
                nitRestaurante: mesaSeleccionada.nitRestaurante
            };

            await actualizarMesa(mesaSeleccionada.id, mesaModificada);
            setShowEditModal(false);
            fetchMesas();
        } catch (error) {
            console.error("Error al actualizar la mesa:", error);
            alert("No se pudieron guardar los cambios de la mesa.");
        }
    };

    // 4. Eliminar mesa
    const handleEliminarMesa = async (id, numMesa) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar la Mesa #${numMesa}?`)) {
            try {
                await eliminarMesa(id);
                fetchMesas(); // Refrescar la lista automáticamente
            } catch (error) {
                console.error("Error al eliminar la mesa:", error);
                alert("No se pudo eliminar la mesa seleccionada.");
            }
        }
    };
        

    return (
        <>
        {/*Estadisticas Mesas */}
        {mesas.length > 0 && (       
        <Row className="p-0 mb-3">
            <Col className="mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-mesas-total" size={30} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{mesas.length}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Total Mesas</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuCircleCheckBig className="icon-color-mesas-available" size={30} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{mesas.filter(m => m.estado === 'true' || m.estado === true).length}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Mesas Disponibles</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-mesas-capacity" size={30} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{mesas.reduce((total, mesa) => total + parseInt(mesa.capacidad), 0)}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Capacidad Total</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>        
        </Row>
        )}

        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Gestion de mesas</h3>
            <Button 
            size="sm" 
            className="buttonNaranjaDegrade style-button-AddElement"
            onClick={() => setShowModal(true)}
            >
                <span className="me-2">+</span> Agregar mesas</Button>
        </div>
        {/* Tabla */}
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Numero de Mesa</th>
                        <th>Capacidad</th>
                        <th>Estado</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="align-middle letra-size-tabla">
                    {/* Si no hay mesas, mostrar mensaje */}
                    {mesas.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="text-center py-4 text-muted">No hay mesas registradas.</td>
                    </tr>
                    ) : (                  
                        mesas.map((mesa) => (
                        <tr key={mesa.id}>
                            <td>Mesa #{mesa.numMesa}</td>
                            <td>{mesa.capacidad} personas</td>
                            <td><Badge bg={mesa.estado === 'true' || mesa.estado === true ? "success" : "danger"} pill>
                                {mesa.estado === 'true' || mesa.estado === true ? "Disponible" : "Ocupada"}</Badge></td>
                            <td className="d-flex justify-content-center">
                                <Button 
                                variant="outline-secondary" 
                                size="sm" className="me-2" 
                                onClick={() => handleAbrirEditar(mesa)}
                               >
                                    <FiEdit size={15} />
                                </Button>

                                <Button 
                                variant="outline-secondary" 
                                size="sm" className="me-2" 
                                onClick={() => handleEliminarMesa(mesa.id || mesa._id, mesa.numMesa)}>
                                    <FaRegTrashAlt size={15} />
                                </Button>
                            </td>
                        </tr>
                        ))
                    )}
                </tbody>
            </Table>  

            {/* CREAR MESA */}
            <Modal show={showModal} onHide={()=> setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Agregar Nueva Mesa</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleCrearMesa}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de Mesa</Form.Label>
                            <Form.Control
                                type="number" 
                                placeholder="Ej: 1" 
                                value={numMesa}
                                onChange={(e) => setNumMesa(e.target.value)}
                                required
                                />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacidad (personas)</Form.Label>
                            <Form.Control
                            type="number" 
                            placeholder="Ej: 4" 
                            value={capacidad}
                            onChange={(e) => setCapacidad(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button type="submit" size="sm" className="buttonNaranjaDegrade border-0">
                        Guardar Mesa
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>  

            {/* EDITAR MESA */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Editar Mesa</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleEditarMesa}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de Mesa</Form.Label>
                            <Form.Control
                                type="number" 
                                value={editNumMesa}
                                onChange={(e) => setEditNumMesa(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacidad (personas)</Form.Label>
                            <Form.Control
                                type="number" 
                                value={editCapacidad}
                                onChange={(e) => setEditCapacidad(e.target.value)}
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado de la Mesa</Form.Label>
                            <Form.Select 
                                value={editEstado} 
                                onChange={(e) => setEditEstado(e.target.value === "true")}
                            >
                                <option value="true">Disponible</option>
                                <option value="false">Ocupada</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancelar</Button>
                        <Button type="submit" size="sm" className="buttonNaranjaDegrade border-0">Guardar Cambios</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}