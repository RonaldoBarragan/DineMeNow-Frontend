import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { LuCircleCheckBig } from "react-icons/lu";
import { CgCloseO } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Section_Solicitud() {
    return (
        <>
        <h3 className="fw-bold mb-3">Solicitudes de Registro pendientes</h3>
        {/*Primera solocitud*/}
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fs-6 d-flex justify-content-between">El Dorado Gourmet<Badge pill className="badge-pending">Pendiente</Badge></Card.Title>
                <Row className="size-letra-propio p-1">
                    <Col>
                    <span className="fw-bold text-muted">Informacion basica</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Zona: Chapinero</p>
                        <p className="m-0 text-left">Tipo de cocina: Peruana</p>
                        <p className="m-0 text-left">Fecha de solicitud: 2025-08-25</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Contacto</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Email: eldorado@email.com</p>
                        <p className="m-0 text-left">Teléfono: +57 301 234 5678</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Detalles Adicionales</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Dirección: Calle 123 #45-67, Chapinero</p>
                        <p className="m-0 text-left">Capacidad estimada: 80 personas</p>
                        <p className="m-0 text-left">Horario propuesto: 11:00 AM - 11:00 PM</p>
                    </Card.Text>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <hr className="m-0 p-0"/>
                </Row>
                <Row className="p-0">
                    <div className="d-flex gap-2">
                        <Button variant="success" size="sm" className="fw-bold d-flex align-items-center gap-2"><LuCircleCheckBig size={18} /> Aceptar</Button>
                        <Button variant="outline-danger" size="sm" className="fw-bold d-flex align-items-center gap-2"><CgCloseO size={18}/>Rechazar</Button>
                        <Button variant="outline-secondary" size="sm" className="fw-bold d-flex align-items-center gap-2"><MdOutlineRemoveRedEye size={18}/>Ver documentos</Button>
                    </div>
                </Row>
            </Card.Body>
        </Card>
        {/*Segunda solicitud*/}
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fs-6 d-flex justify-content-between">Pizzeria Napolitana<Badge pill className="badge-pending">Pendiente</Badge></Card.Title>
                <Row className="size-letra-propio p-1">
                    <Col>
                    <span className="fw-bold text-muted">Informacion basica</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Zona: Zona T</p>
                        <p className="m-0 text-left">Tipo de cocina: Italiana</p>
                        <p className="m-0 text-left">Fecha de solicitud: 2025-08-24</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Contacto</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Email: napolitana@email.com</p>
                        <p className="m-0 text-left">Teléfono: +57 302 345 6789</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Detalles Adicionales</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Dirección: Calle 123 #45-67, Zona T</p>
                        <p className="m-0 text-left">Capacidad estimada: 80 personas</p>
                        <p className="m-0 text-left">Horario propuesto: 11:00 AM - 11:00 PM</p>
                    </Card.Text>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <hr className="m-0 p-0"/>
                </Row>
                <Row className="p-0">
                    <div className="d-flex gap-2">
                        <Button variant="success" size="sm" className="fw-bold d-flex align-items-center gap-2"><LuCircleCheckBig size={18} /> Aceptar</Button>
                        <Button variant="outline-danger" size="sm" className="fw-bold d-flex align-items-center gap-2"><CgCloseO size={18}/>Rechazar</Button>
                        <Button variant="outline-secondary" size="sm" className="fw-bold d-flex align-items-center gap-2"><MdOutlineRemoveRedEye size={18}/>Ver documentos</Button>
                    </div>
                </Row>
            </Card.Body>
        </Card>
        {/*Tercera solicitud*/}
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fs-6 d-flex justify-content-between">Asados Don Carlos<Badge pill className="badge-pending">Pendiente</Badge></Card.Title>
                <Row className="size-letra-propio p-1">
                    <Col>
                    <span className="fw-bold text-muted">Informacion basica</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Zona: Usaquen</p>
                        <p className="m-0 text-left">Tipo de cocina: Parrilla</p>
                        <p className="m-0 text-left">Fecha de solicitud: 2025-08-23</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Contacto</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Email: doncarlos@email.com</p>
                        <p className="m-0 text-left">Teléfono: +57 303 456 7890</p>
                    </Card.Text>
                    </Col>
                    <Col>
                    <span className="fw-bold text-muted">Detalles Adicionales</span>
                    <Card.Text className="text-left size-letra-propio m-0">
                        <p className="m-0 text-left">Dirección: Calle 123 #45-67, Usaquén</p>
                        <p className="m-0 text-left">Capacidad estimada: 80 personas</p>
                        <p className="m-0 text-left">Horario propuesto: 11:00 AM - 11:00 PM</p>
                    </Card.Text>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <hr className="m-0 p-0"/>
                </Row>
                <Row className="p-0">
                    <div className="d-flex gap-2">
                        <Button variant="success" size="sm" className="fw-bold d-flex align-items-center gap-2"><LuCircleCheckBig size={18} /> Aceptar</Button>
                        <Button variant="outline-danger" size="sm" className="fw-bold d-flex align-items-center gap-2"><CgCloseO size={18}/>Rechazar</Button>
                        <Button variant="outline-secondary" size="sm" className="fw-bold d-flex align-items-center gap-2"><MdOutlineRemoveRedEye size={18}/>Ver documentos</Button>
                    </div>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}