import './reservas-Pasadas.css';
import { Badge, Card, Container, Modal, Button } from 'react-bootstrap';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { useAuth } from "../../context/AuthContext";
import { getMyReservas } from '../../api/Client-Service';
import { useEffect, useState } from "react";

function ReservasPasadas() {
  const { user } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState(null);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
 
  const reservasPasadas = (reserva) => {
    const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}`);
    const fechaActual = new Date();
    return fechaReserva < fechaActual;
  }
  useEffect(() => {
    const cargarReservas = async () => {
      try { const data = await getMyReservas();
        console.log("Todas las reservas", data);
        const reservasPasadas = data.filter((reserva) => {
          const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}`);
          const fechaActual = new Date();
          return fechaReserva < fechaActual;
        }
        );
        setReservas(reservasPasadas);
      } catch (error) {
        console.error("Error al cargar las reservas:", error);
      }
    };

    if (user) {
      cargarReservas();
    }
  }, [user]);

  return (
     <>
    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
      {/* 1 */}
    {tipoModal === 1 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title >
          Detalles de la Reserva
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    {/* Info principal */}
    <div className='info'>
      <p className='title-modal-nombre'>Nombre del restaurante {reservaSeleccionada?.nombreRestaurante}</p>
      <div className='info-desc-modal'>Nombre del cliente: {reservaSeleccionada?.nombreCliente}</div>
      {/* LADO IZQUIERDO */}
      <div className='modal-cuadro'>
      
      <div className="columna-pricipal">
      <div className='info-desc-modal'><CiCalendar size={15} /> {reservaSeleccionada?.fecha}</div>
      <div className='info-desc-modal'><IoLocationOutline size={15} /> Mesa {reservaSeleccionada?.numeroMesa}</div>
      </div>
      {/* LADO DERECHO */}
      <div className="columna-pricipal">
      <div className='info-desc-modal'><IoMdTime size={15} /> {reservaSeleccionada?.hora}</div>
      
      </div>
      
    </div >
    <div className='estado'><Badge className="badge-Completada">{reservaSeleccionada?.estado}</Badge></div>
    </div>

    

    {/* Info Platillos pre-ordenados */}
     <div className='info-platillos'>
      <p className='title-modal'><LuChefHat size={15} />Platillos pre-ordenados</p>
        <div className='info'>
          <div className='platillo-row'>
      <div>
        <span className="nombre">{reservaSeleccionada?.nombrePlato}</span>
      </div>
    </div>
    </div>
    </div>
    {/* Información adicional */}
     <div className='info-reserva'>
      <p className='title-modal'>Información adicional</p>
      <div className='info'>
        {/* LADO IZQUIERDO */}
        <div className='fila-reserva'>
        <div className="columna-reserva">
        <div className="campo-reserva">
          <span className="label">ID de reserva</span>
          <span className="valor">{reservaSeleccionada?.id}</span>
        </div>
        </div>
        </div>
      </div>
    </div>

    </Modal.Body>
    <Modal.Footer>
      <Button className="btn-cerrar" onClick={() => setShowModal(false)}><span className="cerrar">Cerrar</span></Button>
    </Modal.Footer>
    </>
)}

  </Modal>
    <Container className='Card-Pasadas'>
      {reservas
      .filter ((reserva) => reserva.estado === "COMPLETADA")
      .map((reserva) => (

      <Card key={reserva.id} className='Card-Reservas-Pasadas'>
        <Card.Body>
          <div className="div-card-pasadas">
{/* fila 1: título + badge + botón */}
              <Card.Title className='tituloo'>{reserva.nombreRestaurante}</Card.Title>
              <div className="header-right">
                <Badge className="badge-Completada">{reserva.estado}</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos-pasadas">
    {/* IZQUIERDA */}
    <div className="info-text-pasadas">
      <div className="info-desc-pasadas"><CiCalendar size={15} /> {reserva.fecha}</div>
      <div className="info-desc-pasadas"><IoMdTime size={15} /> {reserva.hora}</div>
      <div className="info-desc-pasadas"><RxPeople size={15} /> Mesa {reserva.numeroMesa} </div>
    </div>
    {/* DERECHA */}
    <div className="header-right-pasadas">          
      <button onClick={() => {
    setReservaSeleccionada(reserva);
    setTipoModal(1);
    setShowModal(true);
  }} className="btn-detalles-pasadas">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles-pasadas">Ver detalles</span>
      </button>
    </div>
  </div>
          </div>
        </Card.Body>
      </Card>
      ))}
    </Container>
    </>
  );
}

export default ReservasPasadas;