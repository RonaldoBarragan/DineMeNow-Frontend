import { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import { CiCamera } from "react-icons/ci";
import { getListPlatosRestaurant } from "../../api/Restaurant-Service";

export default function Section_VistaMenu_Mesero({idRestaurant}) {
    const [platos, setPlatos] = useState([]);

    useEffect(() => {
        if (!idRestaurant) return;

        const fetchMenu = async () => {
            try {
                const data = await getListPlatosRestaurant(idRestaurant);
                setPlatos(data);
            } catch (error) {
                console.error("Error al obtener reservas:", error);
            }
        };

        fetchMenu();
    }, [idRestaurant]);
        
    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Menú del Restaurante</h3>
            
        </div>
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    {/*<th>Foto</th>*/}
                    <th>Categoria</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {platos.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center py-4 text-muted">
                                No se encontraron reservas registradas.
                            </td>
                        </tr>
                    ) : (
                        platos.map((plato) => (
                            <tr key={plato.id}>
                                {/*<td><CiCamera size={38}/><br /></td>*/}
                                <td className="text-capitalize">{plato.categoria?.[0]?.toLowerCase()}<br /></td>
                                <td>{plato.nomPlato}<br /></td>
                                <td>{plato.descripcion}</td>
                                <td>${Number(plato.precio).toLocaleString('es-CO')}</td>
                                <td><Badge className={plato.disponible ? 'badge-state-disponibleMesero' : 'badge-state-noDisponibleMesero'}>{plato.disponible ? 'Disponible' : 'No disponible'}</Badge></td>
                            </tr>
                        ))
                    )}
            </tbody>
        </Table>
        </>
    )
}