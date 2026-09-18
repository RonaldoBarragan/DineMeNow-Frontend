import { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import { PiGridFourLight } from "react-icons/pi";
import { getListMesasRestaurant } from "../../api/Restaurant-Service";

export default function Section_VistaMesas_Mesero({idRestaurant}) {
    const [mesas, setMesas] = useState([]);
    
        useEffect(() => {
            if (!idRestaurant) return;
    
            const fetchMesas = async () => {
                try {
                    const data = await getListMesasRestaurant(idRestaurant);
                    setMesas(data);
                } catch (error) {
                    console.error("Error al obtener reservas:", error);
                }
            };
    
            fetchMesas();
        }, [idRestaurant]);

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
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {mesas.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="text-center py-4 text-muted">
                            No se encontraron reservas registradas.
                        </td>
                    </tr>
                ) : (
                    mesas.map((mesa) => (
                        <tr key={mesa.id}>
                            <td>
                                <div className="d-flex align-items-center gap-1">
                                    <PiGridFourLight size={22} />
                                    <small className="mb-0">Mesa {mesa.numMesa}</small>
                                </div>
                            </td>
                            <td>{mesa.capacidad} personas<br /></td>
                            <td><Badge className={mesa.estado === "true" ? 'badge-state-mesaDisponibleMesero' : 'badge-state-mesaOcupadaMesero'}>{mesa.estado === "true" ? 'Disponible' : 'Ocupada'}</Badge></td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
        </>
    )
}