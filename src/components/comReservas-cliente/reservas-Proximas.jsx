import { Badge, Card, Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './reservas-Proximas.css';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { use, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getMyReservas, deleteReserva, updateReserva } from '../../api/Client-Service';
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

function ReservasProximas() {

  const {user} = useAuth();
  const [reservas, setReservas] = useState([]);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState(null);

  useEffect(() => {
  const cargarReservas = async () => {
    try{
      const data = await getMyReservas();

      console.log("Reservas cliente", data);
      setReservas(data);
    }catch(error){
      console.error(error);
    }
  };

  if(user){
    cargarReservas();
  }
},[user]);
//eliminar reserva//
const eliminarReserva = async (reservaId) => {
  try {
    await deleteReserva(reservaId);
    setReservas ((reservasActuales) => reservasActuales.filter((reserva) => reserva.id !== reservaId));
    setShowModal(false);
    setReservaSeleccionada(null);
    alert("Reserva eliminada correctamente.");
   } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    console.error(error.response?.data);
    alert("No se pudo eliminar la reserva.");
  }
};
//actualizar reserva//
const actualizarReserva = async () => {
  
  try {
    if (!reservaSeleccionada) return; 
    const reservaActualizada = {
      ...reservaSeleccionada,
      fecha: reservaSeleccionada.fecha,
      hora: reservaSeleccionada.hora,
      numeroMesa: reservaSeleccionada.numeroMesa,
      descripcion: reservaSeleccionada.descripcion,
      nombrePlatos: reservaSeleccionada.nombrePlatos,
    };
     console.log("Datos Enviados:", reservaActualizada);

    const respuesta = await updateReserva(
      reservaSeleccionada.id, 
      reservaActualizada
    );

    console.log("Respuesta del backend:", respuesta);

    setReservas((reservasActuales) => reservasActuales.map((reserva) =>
      reserva.id === reservaSeleccionada.id 
    ? respuesta 
    : reserva
    ));
    setShowModal(false);
    setReservaSeleccionada(null);
    alert("Reserva actualizada correctamente.");

  } catch (error) {
    console.error("Error al actualizar:", error);
    console.error("Respuesta del servidor", error.response?.data);
    alert(
      error.response?.data?.mensaje ||
      "Ocurrió un error al actualizar la reserva. Por favor, inténtelo de nuevo.");
  }
  };
      return (
    <>
    
    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
      {/* 1 */}
    {tipoModal === 1 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title >
          Editar Reserva
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        
          
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" 
          value={reservaSeleccionada?.fecha || ""}
          onChange={(e) => setReservaSeleccionada({...reservaSeleccionada, fecha: e.target.value})}
          />
        </Form.Group>
        
        
        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control type="time" 
          value={reservaSeleccionada?.hora || ""}
          onChange={(e) => setReservaSeleccionada({...reservaSeleccionada, hora: e.target.value})}
          />
        </Form.Group>
        
        
       
        <Form.Group className="mb-3">
          <Form.Label>Numero de mesa</Form.Label>
          <Form.Control type="number" 
          value={reservaSeleccionada?.numeroMesa || ""}
          onChange={(e) => setReservaSeleccionada({...reservaSeleccionada, numeroMesa: e.target.value})}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" 
          value={reservaSeleccionada?.descripcion || ""}
          onChange={(e) => setReservaSeleccionada({...reservaSeleccionada, descripcion: e.target.value})}
          />
        </Form.Group>
        
        
        <Form.Group className="mb-3">
          <Form.Label>Nombre del plato</Form.Label>
          <Form.Control type="text" 
          value={reservaSeleccionada?.nombrePlatos?.[0] || ""}
          onChange={(e) => setReservaSeleccionada({...reservaSeleccionada, nombrePlatos: [e.target.value]})}
          />
        </Form.Group>
        
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
      variant='secondary'
      onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
      <Button
      variant='primary'
      onClick={() => {
        actualizarReserva();

      }}>
        Guardar
      </Button>
    </Modal.Footer>
    </>
)}
    {/* 2 */}
    {tipoModal === 2 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title >
          Eliminar Reserva
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        ¿Estas seguro de que deseas eliminar esta reserva?
      </p>

    </Modal.Body>
    <Modal.Footer>
      <Button
      variant='secondary'
      onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
      <Button
      variant='danger'
      onClick= {() => {
        eliminarReserva(reservaSeleccionada.id)}
      }>
        Eliminar
      </Button>
    </Modal.Footer>
    </>
    )}
  </Modal>


  {/* CARDS */}
    <Container className="Card-Proximadas">

{reservas.map((reserva) => (

<Card key={reserva.id} className="Card-Reservas-Proximas">

<Card.Body>

<Card.Title className="card-titulo">
  {reserva.nombreRestaurante}
</Card.Title>

<div className="info-desc">
   <CiCalendar /> {reserva.fecha}
</div>

<div className="info-desc">
   <IoMdTime /> {reserva.hora}
</div>

<div className="info-desc">
   <IoLocationOutline />
   Mesa {reserva.numeroMesa}
</div>
 {/* BOTONES */}
  <div className="Botones-Acciones">
    <Button
      variant="outline-secondary" 
      size="sm"
      onClick={() => {
          setReservaSeleccionada(reserva);
          setTipoModal(1);
          setShowModal(true);
        }}
    >
      <FiEdit size={15} />
    </Button>
    <Button
      variant="outline-secondary" 
      size="sm"
      onClick={() => {
          setReservaSeleccionada(reserva);
          setTipoModal(2);
          setShowModal(true);
        }}
      >
        <FaRegTrashAlt size={15} />
    </Button>
    </div>
          
</Card.Body>

</Card>

))}

</Container>
  </>
  );
}

export default ReservasProximas;