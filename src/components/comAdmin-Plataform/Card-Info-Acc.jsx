import { Card } from "react-bootstrap";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Card_Acc() {
    return (
        <>
        <Card>
            <Card.Body className="d-flex align-items-center gap-2">
                <IoPersonCircleOutline size={45} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">Panel de Administrador</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Administrador Platform - Administrador de Plataforma</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}