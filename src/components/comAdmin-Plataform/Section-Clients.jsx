import { Badge, Button, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Section_Clients() {
    return (
        <>
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Reservas Totales</th>
                    <th>Fecha Registro</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td>Ana Garcia<br /><small className="text-muted">Cliente Frecuente</small></td>
                    <td>ana.garcia@email.com</td>
                    <td>+57 301 234 5678</td>
                    <td><Badge className="badge-count-reservas">12</Badge> <span>reservas</span></td>
                    <td>10/07/2025</td>
                    <td><Badge className="badge-state-acc">Activo</Badge></td>
                    <td><Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button></td>
                </tr>

                {/* FIla 2 */}
                <tr>
                    <td>Carlos Mendoza<br /><small className="text-muted">Cliente Nuevo</small></td>
                    <td>carlos.mendoza@email.com</td>
                    <td>+57 302 345 6789</td>
                    <td><Badge className="badge-count-reservas">3</Badge> <span>reservas</span></td>
                    <td>25/09/2025</td>
                    <td><Badge className="badge-state-acc">Activo</Badge></td>
                    <td><Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button></td>
                </tr>

                {/* FIla 3 */}
                <tr>
                    <td>Maria Rodriguez<br /><small className="text-muted">Cliente VIP</small></td>
                    <td>maria.rodriguez@email.com</td>
                    <td>+57 303 456 7890</td>
                    <td><Badge className="badge-count-reservas">28</Badge> <span>reservas</span></td>
                    <td>05/03/2025</td>
                    <td><Badge className="badge-state-acc">Activo</Badge></td>
                    <td><Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}