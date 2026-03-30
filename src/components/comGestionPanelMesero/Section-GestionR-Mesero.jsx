import { Badge, Button, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";


export default function Section_GestionR_Mesero() {


    
    return (
        <>
        
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Reservas del Día</h3>
            
        </div>
        <Table className="size-letra-propio align-middle">
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
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td>Ana Rodriguez<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>2025-08-26<br /></td>
                    <td>19:00<br /></td>
                    <td>4</td>
                    <td><Badge className="badge-state-confirmadaMesero">Confirmada</Badge></td>
                    <td>Cumpleaños</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><IoMdCheckmarkCircleOutline className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><MdOutlineCancel className="text-dark" size={15} /></Button>
                    </td>
                </tr>
                {/* Fila 2 */}
                <tr>
                    <td>Beto Sanchez<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>2025-08-26<br /></td>
                    <td>20:00<br /></td>
                    <td>2</td>
                    <td><Badge className="badge-state-pendienteMesero">Pendiente</Badge></td>
                    <td>Ninguna</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><IoMdCheckmarkCircleOutline className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><MdOutlineCancel className="text-dark" size={15} /></Button>
                    </td>
                </tr>
                    {/* Fila 3 */}
                <tr>
                    <td>Carlos Mendez<br /><small className="text-muted">+57 301 234 5678</small></td>
                    <td>2025-08-26<br /></td>
                    <td>21:00<br /></td>
                    <td>6</td>
                    <td><Badge className="badge-state-canceladaMesero">cancelada</Badge></td>
                    <td>Eventos especiales</td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><IoMdCheckmarkCircleOutline className="text-dark" size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover"><MdOutlineCancel className="text-dark" size={15} /></Button>
                    </td>
                </tr>

            </tbody>
        </Table>
        </>
    )
}