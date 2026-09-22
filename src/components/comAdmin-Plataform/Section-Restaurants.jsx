import { Badge, Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal_Delete_Confirm from "./Modal-Confirm-Restaurant-Delete";
import { eliminarRestaurante } from "../../api/AdminPlatService";
import ModalInfoRestaurant from './Modal-Info-Restaurant';

export default function Section_Restaurants({restaurantes, setRestaurantes}) {
    const [nitAEliminar, setNitAEliminar] = useState(null);

    // Abre el modal guardando el nit del restaurante a eliminar
    const eliminarRestauranteHandler = (nit) => {
    setNitAEliminar(nit);
    };

    // Se ejecuta al presionar "Eliminar" en el modal
    const confirmarEliminar = async () => {
    try {
        await eliminarRestaurante(nitAEliminar);
        setRestaurantes((prev) => prev.filter((r) => r.nit !== nitAEliminar));
        setNitAEliminar(null); // cierra el modal
    } catch (error) {
        alert("Error al eliminar el restaurante.");
        setNitAEliminar(null);
    }
    };

    // Se ejecuta al presionar "Cancelar" en el modal
    const cancelarEliminar = () => {
    setNitAEliminar(null);
    };
    
    const [showModalInfo, setShowModalInfo] = useState(false);
      const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    
      // Abrir modal con la información del restaurante correspondiente
      const handleOpenInfoModal = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setShowModalInfo(true);
      };
    
      // Cerrar modal
      const handleCloseInfoModal = () => {
        setShowModalInfo(false);
        setSelectedRestaurant(null);
      };

    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Cuentas de Restaurantes</h3>
        </div>
        {restaurantes.length === 0
        ? <p className="text-muted text-center mt-3">No hay restaurantes registrados.</p>
        :
        <Table className="size-letra-propio align-middle">
            <thead>
                <tr>
                    <th>Restaurante</th>
                    <th>Gestor</th>
                    <th>Contacto</th>
                    <th>Estado Cuenta</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* FIla 1 */}
                {restaurantes.map((r) => (
                <tr key={r.id}>
                    <td>{r.nombre}<br /><small className="text-muted">{r.direccion.calle} {r.direccion.numero} • {r.categoria}</small></td>
                    <td>{r.propietario}<br /><small className="text-muted">{r.razonSocial}</small></td>
                    <td>{r.correo}<br /><small className="text-muted">+57 {r.telefono}</small></td>
                    <td><Badge className="badge-state-acc">Activa</Badge></td>
                    <td>
                        <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover" onClick={() => handleOpenInfoModal(r)}><MdOutlineRemoveRedEye className="text-dark" size={15} /></Button>
                        {/* <Button variant="outline-secondary" size="sm" className="me-2 icon-color-hover"><FiEdit className="text-dark" size={15} /></Button> */}
                        <Button variant="outline-secondary" size="sm" className="icon-color-hover" onClick={() => eliminarRestauranteHandler(r.nit)}><FaRegTrashAlt className="text-danger" size={15} /></Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        }
        {/* Renderizado del Modal Componente Independiente */}
      <ModalInfoRestaurant
        show={showModalInfo}
        onHide={handleCloseInfoModal}
        restaurant={selectedRestaurant}
      />
        <Modal_Delete_Confirm mostrar={nitAEliminar !== null} onConfirmar={confirmarEliminar} onCancelar={cancelarEliminar} mensaje="¿Estás seguro de que deseas eliminar este restaurante?"/>
        
        </>
    )
}