import { Card } from "react-bootstrap";
import { HiOutlineCamera } from "react-icons/hi";

export default function Profile_Foto() {
    return (
        <>
        <Card>
            <Card.Body>
                <div className="d-flex align-items-center">
                    <HiOutlineCamera size={19} className="me-2"/>
                    <Card.Title className="fs-6">Foto de perfil</Card.Title>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}