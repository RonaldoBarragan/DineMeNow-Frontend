import { Card, Col, Row } from "react-bootstrap";
import { FcPlanner } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

export default function Stat() {
    return (     
        <>
        <Row className="mb-4">
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><FcPlanner size={30} />12</Card.Title>              
                <p className="text-muted letra-size">Reservas hoy</p>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><FcBusinesswoman size={30} />8</Card.Title>               
                <p className="text-muted letra-size">Mesas disponibles</p>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><FcOk size={30} />9</Card.Title>           
                <p className="text-muted letra-size">Confirmadas</p>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><FcOvertime size={30} />3</Card.Title>         
                <p className="text-muted letra-size">Pendientes</p>
            </Card>
            </Col>
            
        </Row>
        </>
    )
}