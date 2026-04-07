import { Card, Table, Button, Badge } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './style.css';

export default function Reservas() {
    return (
        <>
        <Card.Title className="fw-bold d-flex justify-content-between">Reservas Recientes <Button size="sm" className="buttonNaranjaDegrade"><span className="me-2">+</span> Nueva reserva</Button></Card.Title>
        {/* Tabla */}
        <Card.Body>
            <Table hover>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Personas</th>
                        <th>Estado</th>
                        <th>Solicitudes Especiales</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="align-middle letra-size-tabla">
                    {/* FILA 1 */}
                    <tr>
                        <td>Ana Rodríguez<br /><small className="text-muted">+57 300 123 4567</small></td>
                        <td>2025-08-27</td>
                        <td>19:30</td>
                        <td>4</td>
                        <td><Badge bg="success" pill>Confirmada</Badge></td>
                        <td>Mesa cerca de la ventana</td>
                        <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><Eye size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 2 */}
                    <tr>
                        <td>Carlos Mendoza<br /><small className="text-muted">+57 301 987 6543</small></td>
                        <td>2025-08-27</td>
                        <td>20:00</td>
                        <td>2</td>
                        <td><Badge bg="warning" text="dark" pill>Pendiente</Badge></td>
                        <td>Celebración de aniversario</td>
                        <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><Eye size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><LuCircleCheckBig size={15} /></Button>
                        <Button variant="outline-secondary" size="sm"><IoIosCloseCircleOutline size={17} /></Button>
                        </td>
                    </tr>

                    {/* FILA 3 */}
                    <tr>
                        <td>Sofía García<br /><small className="text-muted">+57 302 456 7890</small></td>
                        <td>2025-08-27</td>
                        <td>18:00</td>
                        <td>6</td>
                        <td><Badge bg="success" pill>Confirmada</Badge></td>
                        <td>Ninguna</td>
                        <td>
                        <Button variant="outline-secondary" size="sm"><Eye size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 4 */}
                    <tr>
                        <td>Miguel Torres<br /><small className="text-muted">+57 305 234 5678</small></td>
                        <td>2025-08-28</td>
                        <td>19:00</td>
                        <td>3</td>
                        <td><Badge bg="warning" text="dark" pill>Pendiente</Badge></td>
                        <td>Sin gluten</td>
                        <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><Eye size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><LuCircleCheckBig size={15} /></Button>
                        <Button variant="outline-secondary" size="sm"><IoIosCloseCircleOutline size={17} /></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card.Body>
        </>
    )
}