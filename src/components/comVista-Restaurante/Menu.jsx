import { Table, Button, Badge } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi";
import { useEffect, useState } from "react";
import { getListPlatosRestaurant } from "../../api/Menu-Restaurant";

export default function Menu() {
    const [platos, setPlatos] = useState([]);

    useEffect(() => {
        const fetchPlatos = async () => {
            try {
                const data = await getListPlatosRestaurant("123456789"); // Reemplaza con el NIT real del restaurante, arreglar eta vaina
                setPlatos(data);
            } catch (error) {
                console.error("Error fetching platos:", error);
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
                {/* FILA 1 */}
                <tr>
                    <td><span className="p-2 rounded icon-bg-camera-color"><HiOutlineCamera size={20} /></span></td>
                    <td><Badge className="badge-table-category" pill>Entradas</Badge></td>
                    <td>Arepa de Choclo</td>
                    <td>Arepa tradicional con queso costeño</td>
                    <td>$18.000</td>
                    <td><Badge className="badge-table-positivo-state" pill>Disponible</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                    </td>
                </tr>

                {/* FILA 2 */}
                <tr>
                    <td><span className="p-2 rounded icon-bg-camera-color"><HiOutlineCamera size={20} /></span></td>
                    <td><Badge className="badge-table-category" pill>Entradas</Badge></td>
                    <td>Empanadas Vallenas</td>
                    <td>Empanadas criollas rellenas de carne y papa</td>
                    <td>$15.000</td>
                    <td><Badge className="badge-table-positivo-state" pill>Disponible</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                    </td>
                </tr>

                {/* FILA 3 */}
                <tr>
                    <td><span className="p-2 rounded icon-bg-camera-color"><HiOutlineCamera size={20} /></span></td>
                    <td><Badge className="badge-table-category" pill>Principales</Badge></td>
                    <td>Bandeja Paisa</td>
                    <td>Plato típico completo</td>
                    <td>$45.000</td>
                    <td><Badge className="badge-table-negativo-state" pill>No disponible</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FiEdit size={15} /></Button>
                        <Button variant="outline-secondary" size="sm" className="me-2"><FaRegTrashAlt size={15} /></Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}