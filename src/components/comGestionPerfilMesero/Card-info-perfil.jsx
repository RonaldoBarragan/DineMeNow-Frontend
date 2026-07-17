import { Card } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";

export default function Card_Info_Perfil() {
    return (
        <>
        <Card className="mb-4">
            <Card.Body className="d-flex align-items-center gap-2">
                <BsPerson size={30} className="me-2 icon-color-profile" />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">Mi Perfil</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Gestiona tu perfil personal</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}