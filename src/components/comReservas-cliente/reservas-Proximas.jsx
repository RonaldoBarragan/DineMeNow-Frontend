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
import { getMyReservas } from '../../api/Client-Service';
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
        <Row>
          <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" 
          value={reservaSeleccionada?.fecha || ""}/>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control type="time" 
          value={reservaSeleccionada?.hora || ""}/>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Numero de mesa</Form.Label>
          <Form.Control type="number" 
          value={reservaSeleccionada?.numeroMesa || ""}/>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" 
          value={reservaSeleccionada?.descripcion || ""}/>
        </Form.Group>
        </Col>
        </Row>
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
      onClick={() => {setReservaSeleccionada(reservas);
        setTipoModal(1);
        setShowModal(true)}}>
        Guardar
      </Button>
    </Modal.Footer>
    </>
)}
    {/* 2 */}
    {tipoModal === 2 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title className='tituloo'>
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
      onClick= {() => {setReservaSeleccionada(reservas);
        setTipoModal(2);
        setShowModal(true)}
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