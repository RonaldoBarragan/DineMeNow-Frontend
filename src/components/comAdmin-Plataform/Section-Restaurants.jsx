import { Badge, Button, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export default function Section_Restaurants() {
    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Cuentas de Restaurantes</h3>
            <Button size="sm" className="buttonNaranjaDegrade style-button-propio"><span className="me-2">+</span> Registrar nuevo Restaurante</Button>
        </div>
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Restaurante</th>
                    <th>Gestor</th>
                    <th>Contacto</th>
                    <th>Rating</th>
                    <th>Estado Cuenta</th>
                    <th>Fecha Registro</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td>La Mesa Criolla<br /><small className="text-muted">Zona Rosa • Colombiana</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@lamesacriolla.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.5</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 2 */}
                <tr>
                    <td>Bella Napoli<br /><small className="text-muted">Chapinero • Italiana</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@bellanapoli.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.8</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 3 */}
                <tr>
                    <td>Sakura Sushi<br /><small className="text-muted">Zona T • Japonesa</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@sakurasushi.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.6</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>

                {/* FIla 4 */}
                <tr>
                    <td>El Rincón Gourmet<br /><small className="text-muted">Usaquén • Francesa</small></td>
                    <td>Carlos Rodríguez<br /><small className="text-muted">Administrador</small></td>
                    <td>carlos@elrincóngourmet.com<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                            <GoStarFill size={15} className="icon-color-rating" /><span>4.9</span>
                        </div>
                    </td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>15/08/2025</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}