import { Card, Table, Button, Badge, Row, Col } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { getListMesasRestaurant } from "../../api/Gestion-Restaurant";

export default function Mesas() {
    const { user } = useAuth();
    const [ mesas, setMesas ] = useState([]);

    useEffect(() => {
        const fetchMesas = async () => {
            try {
                const data = await getListMesasRestaurant(user.id); // Usa el id de la acc del restaurante para obtener su NIT y luego las mesas
                console.log("Mesas obtenidas:", data);
                setMesas(data);
            } catch (error) {
                console.error("Error al obtener las mesas:", error);
            }
        };
        fetchMesas();
    }, []);

    return (
        <>
        {/*Estadisticas Mesas */}
        <Row className="mb-4">
            <Col className="mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-mesas-total" size={30} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">12</Card.Title>
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
                        <Card.Title className="fw-bold mb-0">12</Card.Title>
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
                        <Card.Title className="fw-bold mb-0">12</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Capacidad Total</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>        
        </Row>

        <Card.Title className="fw-bold d-flex justify-content-between">Inventario de Mesas<Button size="sm" className="buttonNaranjaDegrade"><span className="me-2">+</span> Agregar mesas</Button></Card.Title>
        {/* Tabla */}
        <Card.Body>
            <Table hover>
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
                        <td colSpan="5" className="text-center py-4">No hay mesas registradas. Agrega tu primera mesa para que los clientes puedan reservar.</td>
                    </tr>
                    ) : (                  
                        mesas.map((mesa) => (
                        <tr key={mesa.id}>
                            <td>Mesa {mesa.numMesa}</td>
                            <td>{mesa.capacidad} personas</td>
                            <td><Badge bg={mesa.estado === 'true' ? "success" : "danger"} pill>{mesa.estado === 'true' ? "Disponible" : "Ocupada"}</Badge></td>
                            <td className="d-flex justify-content-center">
                                <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                                <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                            </td>
                        </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </Card.Body>
        </>
    )
}