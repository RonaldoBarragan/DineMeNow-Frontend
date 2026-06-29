import { Table, Button, Badge } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
import { useEffect, useState } from "react";
import { actualizarPlato, crearPlato, eliminarPlato, getListPlatosRestaurant } from "../../api/Restaurant-Service";
import { useAuth } from "../../context/AuthContext";
import AgregarPlato from "./AgregarPLatos"; 
import axios from "axios";

export default function Menu() {
    const [platos, setPlatos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [platoAEditar, setPlatoAEditar] = useState(null);
    const { user } = useAuth();

    // Cargar platos automáticamente
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
    }, [user]);

    // Función eliminar platos
    const handleEliminarPlato = async (platoId) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este plato?")) {
            try {
                await eliminarPlato(platoId);
                setPlatos(platos.filter(plato => plato.id !== platoId));
            } catch (error) {
                console.error("Error al eliminar el plato:", error);
                alert("Ocurrió un error al eliminar el plato. Por favor, inténtalo de nuevo.");
            }
        }
    };

    // Función para inyectar el plato recién creado a la lista
   const handlePlatoAgregado = async (nuevoPlato) => {
    try {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const { data: restaurante } = await axios.get(
            `http://localhost:8080/api/restaurantes/${user.id}`,
            config
        );

        const platoDto = {
            nitRestaurante: restaurante.nit,
            nomPlato: nuevoPlato.nomPlato,
            descripcion: nuevoPlato.descripcion,
            precio: nuevoPlato.precio,
            disponible: nuevoPlato.disponible,
            categoria: [nuevoPlato.categoria.toUpperCase().replace(" ", "_")]
        };

        if(platoAEditar){
            const platoModificado = await actualizarPlato(platoAEditar.id, platoDto);
            setPlatos(prev => prev.map(p => p.id === platoAEditar.id ? platoModificado : p));
        }else{

        console.log("USER:", user);
        console.log("TOKEN:", user?.token);
        const platoCreado = await crearPlato(platoDto);

        setPlatos(prev => [...prev, platoCreado]);
    }
        handleCerrarModal();

    } catch (error) {
        console.error("Error al agregar el plato:", error);
        alert("Ocurrió un error al agregar el plato.");
    }
};

// Controladores para abrir y cerrar limpiando estados
    const handleAbrirEditar = (plato) => {
        setPlatoAEditar(plato);
        setShowModal(true);
    };

    const handleCerrarModal = () => {
        setShowModal(false);
        setPlatoAEditar(null);
    };

    return (
        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-3">Gestion del Menu</h3>
            <Button 
                size="sm" 
                className="buttonNaranjaDegrade style-button-AddElement"
                onClick={() => setShowModal(true)}
            >
                <span className="me-2">+</span> Agregar elemento
            </Button>
        </div>

        {/* Tabla */}
        <Table hover responsive>
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
                {platos.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="text-center py-4 text-muted">No hay platos registrados.</td>
                    </tr>
                ) : (
                    platos.map((plato) => (
                        <tr key={plato.id}>
                            <td><span className="p-2 rounded icon-bg-camera-color"><HiOutlineCamera size={20} /></span></td>
                            <td><Badge className="badge-table-category" pill>{plato.categoria}</Badge></td>
                            <td>{plato.nomPlato || plato.nombre}</td>
                            <td>{plato.descripcion}</td>
                            <td>${plato.precio ? plato.precio.toLocaleString() : '0'}</td>
                            <td>
                                <Badge className={plato.disponible ? "badge-table-positivo-state" : "badge-table-negativo-state"} pill>
                                    {plato.disponible ? "Disponible" : "No disponible"}
                                </Badge>
                            </td>
                            <td>
                                <Button 
                                variant="outline-secondary" 
                                size="sm" 
                                className="me-2"
                                onClick={() =>handleAbrirEditar(plato)}
                                >
                                    <FiEdit size={15} />
                                </Button>
                                <Button 
                                    variant="outline-secondary" 
                                    size="sm" 
                                    className="me-2 btn-outline-danger-custom" 
                                    onClick={() => handleEliminarPlato(plato.id)}
                                >
                                    <FaRegTrashAlt size={15} />
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>

        <AgregarPlato 
            show={showModal} 
            handleClose={() => setShowModal(false)} 
            onPlatoAgregado={handlePlatoAgregado}
            token={user?.token}
            platoEdicion={platoAEditar} // Pasamos los datos del plato si se va a editar
        />
        </>
    );
}
