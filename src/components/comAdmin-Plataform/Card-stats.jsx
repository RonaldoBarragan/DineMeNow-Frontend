import { Card, Col, Row } from "react-bootstrap";
import { LuBuilding } from "react-icons/lu";

export default function Card_stats() {
    return (
        <>
        <Row>
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold">4</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold">4</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold">4</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding size={25} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold">4</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    )
}