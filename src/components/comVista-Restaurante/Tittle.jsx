import { Card } from 'react-bootstrap';
import { LuBuilding } from "react-icons/lu";

export default function Tittle() {
    return (
    <>
    <Card className="mb-4">
        <Card.Body className="d-flex align-items-center gap-2">
            <LuBuilding size={28} />
            <div className="flex-column">
                <Card.Title className="fw-bold mb-0">Panel de Administrador</Card.Title>
                <Card.Text className="text-left mt-0 fs-propio">Administrador Platform - Administrador de Plataforma</Card.Text>
            </div>
        </Card.Body>
    </Card>
    </>
    )
}