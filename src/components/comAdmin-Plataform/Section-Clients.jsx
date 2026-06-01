import { Badge, Button, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Section_Clients({clientes}) {
    
  
    return (
        <>
        {clientes.length === 0
        ? <p className="text-muted text-center mt-3">No hay clientes registrados.</p>
        :
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Reservas Totales</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                <tr key={cliente.id}>
                    <td>{cliente.nombreCliente}<br /><small className="text-muted">{cliente.documento.tipo} {cliente.documento.numero}</small></td>
                    <td>{cliente.correo}</td>
                    <td>+57 {cliente.telefono}</td>
                    <td><Badge className="badge-count-reservas">{Math.floor(Math.random() * 5)}</Badge> <span>reservas</span></td>
                    <td><Badge className="badge-state-acc">Activo</Badge></td>
                    <td><Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        }
        </>
    )
}