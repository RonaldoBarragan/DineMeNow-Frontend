import { Table, Button, Badge } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi";
import { useEffect, useState } from "react";
import { getListPlatosRestaurant } from "../../api/Restaurant-Service";
import { useAuth } from "../../context/AuthContext";

export default function Menu() {
    const [platos, setPlatos] = useState([]);

    const disponible = Math.random() > 0.5; // Simulación de disponibilidad para el plato, reemplazar con dato real en implementación final
    const { user } = useAuth();

    useEffect(() => {
        const fetchPlatos = async () => {
            try {
                const data = await getListPlatosRestaurant(user.id); // Usa el id de la acc del restaurante para obtener su NIT y luego los platos
                setPlatos(data);
            } catch (error) {
                console.error("Error al obtener los platos:", error);
            }
        };
        fetchPlatos();
    }, []);

    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Gestion del Menu</h3>
            <Button size="sm" className="buttonNaranjaDegrade style-button-AddElement"><span className="me-2">+</span> Agregar elemento</Button>
        </div>
        {/* Tabla */}
        <Table className="align-middle fs-propio">
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
            <tbody>
                {/*Si no hay platos, mostrar mensaje*/}
                {platos.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="text-center py-4 text-muted">No hay platos registrados.</td>
                    </tr>
                ) : (platos.map((plato) => (
                    <tr key={plato.id}>
                    <td><span className="p-2 rounded icon-bg-camera-color"><HiOutlineCamera size={20} /></span></td>
                    <td><Badge className="badge-table-category" pill>{plato.categoria}</Badge></td>
                    <td>{plato.nomPlato}</td>
                    <td>{plato.descripcion}</td>
                    <td>${plato.precio.toLocaleString()}</td>
                    <td><Badge className={disponible ? "badge-table-positivo-state" : "badge-table-negativo-state"} pill>{disponible ? "Disponible" : "No disponible"}</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                    </td>
                </tr>
                )))}
            </tbody>
        </Table>
        </>
    )
}