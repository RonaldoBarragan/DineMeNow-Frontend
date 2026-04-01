import { Badge, Button, Table } from "react-bootstrap";
import { CiCamera } from "react-icons/ci";

export default function Section_VistaMenu_Mesero() {

    return (
        <>
        
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Menú del Restaurante</h3>
            
        </div>
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Categoria</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                <tr>
                    <td><CiCamera size={38}/><br /></td>
                    <td>Entradas<br /></td>
                    <td>Arepa de Choclo<br /></td>
                    <td>Arepa tradicional con queso costeño</td>
                    <td>$12.000</td>
                    <td><Badge className="badge-state-disponibleMesero">Disponible</Badge></td>
                </tr>
                {/* Fila 2 */}
                <tr>
                    <td><CiCamera size={38}/><br /></td>
                    <td>Platos Fuertes<br /></td>
                    <td>Bandeja Paisa<br /></td>
                    <td>Frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro</td>
                    <td>$25.000</td>
                    <td><Badge className="badge-state-disponibleMesero">Disponible</Badge></td>
                </tr>
                    {/* Fila 3 */}
                <tr>
                    <td><CiCamera size={38}/><br /></td>
                    <td>Postres<br /></td>
                    <td>Postre de Natas<br /></td>
                    <td>Postre tradicional hecho con leche, azúcar y canela</td>
                    <td>$8.000</td>
                    <td><Badge className="badge-state-noDisponibleMesero">No Disponible</Badge></td>
                </tr>

            </tbody>
        </Table>
        </>
    )
}