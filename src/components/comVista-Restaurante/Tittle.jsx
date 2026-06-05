import { Card } from 'react-bootstrap';
import { LuBuilding } from "react-icons/lu";
import { useAuth } from '../../context/AuthContext';

export default function Tittle() {
    const { user } = useAuth();

    return (
    <>
    <Card className="mb-4">
        <Card.Body className="d-flex align-items-center gap-2">
            <LuBuilding className="icon-color-panel" size={28} />
            <div className="flex-column">
                <Card.Title className="fw-bold mb-0">Panel de Gestion - Restaurante</Card.Title>
                <Card.Text className="text-left mt-0 fs-propio">Gestionar {user?.nombre}</Card.Text>
            </div>
        </Card.Body>
    </Card>
    </>
    )
}