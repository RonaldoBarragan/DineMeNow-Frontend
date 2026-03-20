import { Card, Col, Row } from "react-bootstrap";
import { LuBuilding } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
//Falta colores a los iconos
export default function Card_stats() {
    return (
        <>
        <Row className="p-0 mt-3">
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">4</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">1.247</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Usuarios</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <FaRegStar size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">4.7</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Rating Promedio</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuSettings size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">3</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Solicitudes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    )
}