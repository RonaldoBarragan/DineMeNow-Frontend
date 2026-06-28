import { Card, Col, Row } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";


export default function Stat({reservas = [], mesas = []}) {

    const totalReservasHoy = reservas.length;

    const mesasDisponibles = mesas.filter(m => m.estado).length;

    const confirmadas = reservas.filter(r =>{ 
        const estado = r.estado?.toString().toUpperCase();
        return estado === 'CONFIRMADA' ||   estado === 'CONFIRMED'
    }).length;

    const pendientes = reservas.filter(r => { 
        const estado = r.estado?.toString().toUpperCase();
        return estado === 'PENDIENTE' || estado === 'PENDING'
    }).length;


    return (     
        <>
        <Row className="mb-4 p-0">
            {/* Tarjeta: Reservas Hoy */}
            <Col md={3} sm={6} className="mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <FiCalendar className="icon-color-reservas" size={28}/>
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{totalReservasHoy}</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Reservas hoy</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            {/* Tarjeta: Mesas Disponibles */}

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-mesas" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{mesasDisponibles}</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Total de Mesas</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            {/* Tarjeta: Confirmadas */}
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuCircleCheckBig className="icon-color-confirms" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{confirmadas}</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Confirmadas</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            {/* Tarjeta: Pendientes */}
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <FaRegClock className="icon-color-reserva-pending" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{pendientes}</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Pendientes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            
        </Row>
        </>
    )
}