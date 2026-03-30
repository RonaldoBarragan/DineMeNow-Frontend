import { Badge, Button, Table } from "react-bootstrap";
import { PiGridFourLight } from "react-icons/pi";

export default function Section_VistaMesas_Mesero() {


    return (
        <>
        
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Menú del Restaurante</h3>
            
        </div>
        <Table className="size-letra-propio align-middle ">
            <thead>
                <tr>
                    <th>N# Mesa</th>
                    <th>Capacidad</th>
                    <th>Ubicación</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                        <PiGridFourLight size={22} />
                        <small className="mb-0">Mesa 1</small>
                        </div>
                    </td>
                    <td>2 personas<br /></td>
                    <td>Principal<br /></td>
                    <td><Badge className="badge-state-mesaDisponibleMesero">Disponible</Badge></td>
                </tr>
                {/* Fila 2 */}
                <tr>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                        <PiGridFourLight size={22} />
                        <small className="mb-0">Mesa 2</small>
                        </div>
                    </td>
                    <td>4 personas<br /></td>
                    <td>Terraza<br /></td>
                    <td><Badge className="badge-state-mesaOcupadaMesero">Ocupada</Badge></td>
                </tr>
                {/* Fila 3 */}
                <tr>
                    <td>
                        <div className="d-flex align-items-center gap-1">
                        <PiGridFourLight size={22} />
                        <small className="mb-0">Mesa 3</small>
                        </div>
                    </td>
                    <td>4 personas<br /></td>
                    <td>Principal<br /></td>
                    <td><Badge className="badge-state-mesaReservadaMesero">Reservada</Badge></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}