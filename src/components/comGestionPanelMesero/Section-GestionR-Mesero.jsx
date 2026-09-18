import { Badge, Button, ListGroup, Modal, Spinner, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import { getReservasRestaurant, updateReservaEstado } from "../../api/Restaurant-Service";

export default function Section_GestionR_Mesero({ idRestaurant }) {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);

    // Estado para controlar el modal y la reserva seleccionada
    const [showModal, setShowModal] = useState(false);
    const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

    useEffect(() => {
        if (!idRestaurant) return;

        const fetchReservas = async () => {
            try {
                setLoading(true);
                const data = await getReservasRestaurant(idRestaurant);
                setReservas(data);
            } catch (error) {
                console.error("Error al obtener reservas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservas();
    }, [idRestaurant]);

    const handleConfirmar = async (Reserva) => {
        try {
            await updateReservaEstado(Reserva, 'CONFIRMADA');

            // Actualización del estado local
            setReservas(prev =>
                prev.map(r => r.id === Reserva.id ? { ...r, estado: 'CONFIRMADA' } : r)
            );
        } catch (error) {
            console.error("Error al confirmar la reserva:", error);
        }
    };

    const handleCancelar = async (Reserva) => {
        try {
            await updateReservaEstado(Reserva, 'CANCELADA');

            // Actualización del estado local
            setReservas(prev =>
                prev.map(r => r.id === Reserva.id ? { ...r, estado: 'CANCELADA' } : r)
            );
        } catch (error) {
            console.error("Error al cancelar la reserva:", error);
        }
    };

    const handleVerDetalle = (reserva) => {
        setReservaSeleccionada(reserva);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setReservaSeleccionada(null);
    };

    const getBadgeClass = (estado) => {
        switch (estado?.toLowerCase()) {
            case 'confirmada':
                return 'badge-state-confirmadaMesero';
            case 'pendiente':
                return 'badge-state-pendienteMesero';
            case 'cancelada':
                return 'badge-state-canceladaMesero';
            default:
                return 'bg-secondary';
        }
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold mb-3">Reservas del Día</h3>
            </div>

            <Table className="size-letra-propio align-middle">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Mesa</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Solicitudes Especiales</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center py-4 text-muted">
                                No se encontraron reservas registradas.
                            </td>
                        </tr>
                    ) : (
                        reservas.map((reserva) => (
                            <tr key={reserva.id}>
                                <td>{reserva.nombreCliente}</td>
                                <td>Mesa #{reserva.numeroMesa}</td>
                                <td>{reserva.fecha}</td>
                                <td>{reserva.hora}</td>
                                <td>
                                    <Badge className={`${getBadgeClass(reserva.estado)} text-capitalize`}>
                                        {reserva.estado?.toLowerCase()}
                                    </Badge>
                                </td>
                                <td>{reserva.descripcion || 'Ninguna'}</td>
                                <td>
                                    {/* Ver Detalle */}
                                    <Button
                                        variant="outline-secondary" 
                                        size="sm" 
                                        className="me-2 icon-color-hover"
                                        onClick={() => handleVerDetalle(reserva)}
                                    >
                                        <MdOutlineRemoveRedEye className="text-dark" size={15} />
                                    </Button>

                                    {/* Solo se muestran si la reserva NO está cancelada */}
                                    {reserva.estado?.toLowerCase() === 'pendiente' && (
                                        <>
                                            <Button 
                                                variant="outline-secondary" 
                                                size="sm" 
                                                className="me-2 icon-color-hover"
                                                onClick={() => handleConfirmar(reserva)}
                                            >
                                                <IoMdCheckmarkCircleOutline className="text-dark" size={15} />
                                            </Button>

                                            <Button 
                                                variant="outline-secondary" 
                                                size="sm" 
                                                className="icon-color-hover"
                                                onClick={() => handleCancelar(reserva)}
                                            >
                                                <MdOutlineCancel className="text-dark" size={15} />
                                            </Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

            {/* MODAL PARA DETALLES DE LA RESERVA */}
            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Detalles de la Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {reservaSeleccionada && (
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Cliente:</strong> {reservaSeleccionada.nombreCliente}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Restaurante:</strong> {reservaSeleccionada.nombreRestaurante} (NIT: {reservaSeleccionada.nitRestaurante})
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Mesa Asignada:</strong> #{reservaSeleccionada.numeroMesa}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Fecha y Hora:</strong> {reservaSeleccionada.fecha} a las {reservaSeleccionada.hora}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Estado:</strong>{' '}
                                <Badge className={getBadgeClass(reservaSeleccionada.estado)}>
                                    {reservaSeleccionada.estado}
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Solicitudes:</strong> {reservaSeleccionada.descripcion || 'Sin especificaciones'}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Platos Pre-ordenados:</strong>
                                {reservaSeleccionada.nombrePlatos && reservaSeleccionada.nombrePlatos.length > 0 ? (
                                    <ul className="mt-2 mb-0">
                                        {reservaSeleccionada.nombrePlatos.map((plato, idx) => (
                                            <li key={idx}>{plato}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span className="ms-2 text-muted">No se precargaron platos</span>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}