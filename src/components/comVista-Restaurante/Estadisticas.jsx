import { Card, Col, Row } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";

export default function Stat() {
    return (     
        <>
        <Row className="mb-4 p-0">
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <FiCalendar className="icon-color-reservas" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">12</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Reservas hoy</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-mesas" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">8</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Mesas disponibles</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuCircleCheckBig className="icon-color-confirms" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">9</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Confirmadas</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <FaRegClock className="icon-color-reserva-pending" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">3</Card.Title>
                        <Card.Text className="text-left mt-0 fs-propio">Pendientes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            
        </Row>
        </>
    )
}