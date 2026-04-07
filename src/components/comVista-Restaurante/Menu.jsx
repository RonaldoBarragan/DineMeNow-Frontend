import { Card, Table, Button, Badge } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";

export default function Menu() {
    return (
        <>
        <Card.Title className="fw-bold d-flex justify-content-between">Gestion del Menu<Button size="sm" className="buttonNaranjaDegrade"><span className="me-2">+</span> Agregar elemento</Button></Card.Title>
        {/* Tabla */}
        <Card.Body>
            <Table hover>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="align-middle letra-size-tabla">
                    {/* FILA 1 */}
                    <tr>
                        <td><span className="fondo-tab p-2 rounded"><IoCameraOutline size={25} /></span></td>
                        <td><Badge bg="secondary" pill>Entradas</Badge></td>
                        <td>Arepa de Choclo</td>
                        <td>Arepa tradicional con queso costeño</td>
                        <td>$18.000</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 2 */}
                    <tr>
                        <td><span className="fondo-tab p-2 rounded"><IoCameraOutline size={25} /></span></td>
                        <td><Badge bg="secondary" pill>Entradas</Badge></td>
                        <td>Empanadas Vallenas</td>
                        <td>Empanadas criollas rellenas de carne y papa</td>
                        <td>$15.000</td>
                        <td><Badge bg="success" pill>Disponible</Badge></td>
                        <td>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                            <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                        </td>
                    </tr>

                    {/* FILA 3 */}
                    <tr>
                        <td><span className="fondo-tab p-2 rounded"><IoCameraOutline size={25} /></span></td>
                        <td><Badge bg="secondary" pill>Principales</Badge></td>
                        <td>Bandeja Paisa</td>
                        <td>Plato típico completo</td>
                        <td>$45.000</td>
                        <td><Badge bg="danger" pill>No disponible</Badge></td>
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