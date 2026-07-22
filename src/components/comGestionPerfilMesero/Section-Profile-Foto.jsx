import { Card } from "react-bootstrap";
import { HiOutlineCamera } from "react-icons/hi";

export default function Profile_Foto() {
    return (
        <>
        <Card className="mb-4">
            <Card.Body>
                <div className="d-flex align-items-center mb-4">
                    <HiOutlineCamera size={19} className="me-2"/>
                    <Card.Title className="fs-6 m-0">Foto de perfil</Card.Title>
                </div>
                <div className="d-flex align-items-center">
                    <div className="Foto-Profile me-4">EJ</div>
                    <div>
                        <span className="fw-bold">Nombre</span> <br />
                        <span className="small text-muted">Email</span> <br />
                        <span className="small text-muted">Cargo (Rol)</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}