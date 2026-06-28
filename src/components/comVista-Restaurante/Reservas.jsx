import { Card, Table, Button, Badge, Spinner } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { obtenerReservasPorNit } from "../../api/reservaRestauService";
import { useAuth } from "../../context/AuthContext"; 


export default function Reservas() {
    // 1. Extraemos directamente el objeto user global del Contexto
    const { user } = useAuth(); 
    
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                // 2. Validamos si el contexto ya tiene un usuario cargado con su token
                if (!user || !user.token) {
                    throw new Error("Usuario no autenticado");
                }
                
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` }
                };

                // Primero obtenemos el NIT del restaurante usando el ID del usuario del Contexto
                const { data: restaurante } = await axios.get(
                    `http://localhost:8080/api/restaurantes/${user.id}`,
                    config
                );

                // Solicitamos las reservas asociadas a dicho NIT
                const datosReservas = await obtenerReservasPorNit(restaurante.nit, user.token);
                setReservas(datosReservas);
                console.log("Restaurante:", restaurante);
                console.log("NIT:", restaurante.nit);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar reservas:", error);
                setError(error.message || "Error desconocido");
                setLoading(false);
            }
        };

        // Solo intentamos cargar datos si el contexto terminó de inicializarse
        if (user) {
            cargarDatos();
        }
    }, [user]); 

    const renderEstadoBadge = (estado) => {
        switch (estado?.toUpperCase()) {
            case "CONFIRMADA": return <Badge bg="success" pill>Confirmada</Badge>;
            case "PENDIENTE": return <Badge bg="warning" text="dark" pill>Pendiente</Badge>;
            case "CANCELADA": return <Badge bg="danger" pill>Cancelada</Badge>;
            default: return <Badge bg="secondary" pill>{estado || "Desconocido"}</Badge>;
        }
    };

    if (loading) return <div className="text-center my-4"><Spinner animation="border" variant="warning" /></div>;
    if (error) return <div className="alert alert-danger text-center my-3">{error}</div>;

    return (
        <>
        <Card.Title className="fw-bold m-0 mb-3">Reservas Recientes</Card.Title>
        <Card.Body className="px-0">
            {reservas.length === 0 ? (
                <div className="text-center py-4 text-muted">No hay reservas registradas.</div>
            ) : (
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Personas</th>
                            <th>Estado</th>
                            <th>Solicitudes Especiales</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle letra-size-tabla">
                        {reservas.map((reserva) => (
                            <tr key={reserva.id || reserva.idReserva}>
                                <td>
                                    {reserva.nombreCliente || "Cliente Anónimo"}
                                    <br />
                                    
                                </td>
                                <td>{reserva.fecha}</td>
                                <td>{reserva.hora}</td>
                                <td>{reserva.personas || reserva.numPersonas || 4}</td>
                                <td>{renderEstadoBadge(reserva.estado)}</td>
                                <td>{reserva.descripcion || "Ninguna"}</td>
                                <td>
                                    <Button variant="outline-secondary" size="sm" className="me-2">
                                        <Eye size={15} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Card.Body>
        </>
    );
}