import { Card, Table, Button, Badge, Row, Col } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { MdOutlineTableBar } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

export default function Mesas() {
    return (
        <>
        {/*Estadisticas Mesas */}
        <Row className="mb-4">
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><MdOutlineTableBar size={30} />12</Card.Title>              
                <p className="text-muted letra-size">Total de Mesas</p>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><BsCheck2Circle size={30} />8</Card.Title>               
                <p className="text-muted letra-size">Mesas disponibles</p>
            </Card>
            </Col>
            <Col className="mb-3">
            <Card className="p-2 align-items-center">
                <Card.Title className="mb-0"><IoMdPeople size={30} />9</Card.Title>           
                <p className="text-muted letra-size">Capacidad Total</p>
            </Card>
            </Col>           
        </Row>

        <Card.Title className="fw-bold d-flex justify-content-between">Inventario de Mesas<Button size="sm" className="buttonNaranjaDegrade"><span className="me-2">+</span> Agregar mesas</Button></Card.Title>
        {/* Tabla */}
        <Card.Body>
            <Table hover>
                <thead>
                    <tr>
                        <th>Numero de Mesa</th>
                        <th>Capacidad</th>
                        <th>Estado</th>
                        <th>Fecha de Registro</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="align-middle letra-size-tabla">
                    {/* FILA 1 */}
                    <tr>
                        <td>Mesa 1</td>
                        <td>4 personas</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>2024-01-15</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 2 */}
                    <tr>
                        <td>Mesa 2</td>
                        <td>2 personas</td>
                        <td><Badge bg="danger" pill>Ocupada</Badge></td>
                        <td>2024-01-16</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 3 */}
                    <tr>
                        <td>Mesa 3</td>
                        <td>6 personas</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>2024-01-17</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 4 */}
                    <tr>
                        <td>Mesa 4</td>
                        <td>4 personas</td>
                        <td><Badge bg="warning" text="dark" pill>Reservada</Badge></td>
                        <td>2024-01-18</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 5 */}
                    <tr>
                        <td>Mesa 5</td>
                        <td>8 personas</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>2024-01-19</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 6 */}
                    <tr>
                        <td>Mesa 6</td>
                        <td>2 personas</td>
                        <td><Badge bg="secondary" pill>Mantenimiento</Badge></td>
                        <td>2024-01-20</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 7 */}
                    <tr>
                        <td>Mesa 7</td>
                        <td>4 personas</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>2024-01-21</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 8 */}
                    <tr>
                        <td>Mesa 8</td>
                        <td>6 personas</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>2024-01-22</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card.Body>
        </>
    )
}