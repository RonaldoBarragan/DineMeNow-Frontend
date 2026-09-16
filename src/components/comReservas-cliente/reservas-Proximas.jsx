import { Card, Container, Button, Modal, Form} from 'react-bootstrap';
import './reservas-Proximas.css';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useAuth } from '../../context/AuthContext';
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';

function ReservasProximas() {
  const { user } = useAuth();
  const [mostrarModalEditar, setShowModalEditar] = useState(false);
  const [reserva, setReservas] = useState([]);

  //estado de model de editar reserva
  const [reservaseleccionada, setReservaSeleccionada] = useState(null);
  //ABRIR MODAL DE EDITAR RESERVA
  const abrirEditarReserva = (reserva) => {
    setReservaSeleccionada({
      ...reserva
    });
    setShowModalEditar(true);
  };
  //CERRAR MODAL DE EDITAR RESERVA
  const cerrarEditarReserva = () => {
    setShowModalEditar(false);
    setReservaSeleccionada(null);
  };

  //actualizar reserva
  const handleActualizarReserva = async () => {
    try {
      if (!reservaseleccionada) return;

      const reservaId = reservaseleccionada.id; // Asegúrate de que el ID de la reserva esté disponible
      const reservaActualizada = {
        fecha: reservaseleccionada.fecha,
        hora: reservaseleccionada.hora,
        personas: reservaseleccionada.personas
      };
      console.log("reservaActualizada", reservaActualizada);

      const respuesta = await actualizarReserva(
        reservaId, 
        reservaActualizada
      );

      console.log("Reserva del backend:", respuesta);
      setShowModalEditar(false);
      setReservaSeleccionada(null);
      alert("Reserva actualizada correctamente");
      } catch (error) {
        console.error("Error al actualizar la reserva:", error);
        console.error("respuesta del servidor:", error.response?.data);
        alert(
          error.response?.data?.mensaje || "Error al actualizar la reserva"
        );}

  return (
    <>
    {/* Modal para editar reserva */}
    <Modal 
    show={mostrarModalEditar}
    onHide={cerrarEditarReserva}
    centered
    className="modal-editar-reserva"
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {reservaseleccionada && (
          <Form>
            {/* FECHA */}
            <Form.Group controlId="formFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={reservaseleccionada.fecha}
                onChange={(e) =>
                  setReservaSeleccionada({
                    ...reservaseleccionada,
                    fecha: e.target.value
                  })
                }
              />
            </Form.Group>
            {/* HORA */}
            <Form.Group controlId="formHora">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                value={reservaseleccionada.hora}
                onChange={(e) =>
                  setReservaSeleccionada({
                    ...reservaseleccionada,
                    hora: e.target.value
                  })
                }
              />
            </Form.Group>
              {/* PERSONAS */}
            <Form.Group controlId="formPersonas">
              <Form.Label>Personas</Form.Label>
              <Form.Control
                type="number"
                value={reservaseleccionada.personas}
                onChange={(e) =>
                  setReservaSeleccionada({
                    ...reservaseleccionada,
                    personas: parseInt(e.target.value)
                  })
                }
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarEditarReserva}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleActualizarReserva}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
      </Modal>

{/* Card de reservas proximas */}
{reserva && (
  <Container className="Card-Proximas">
    <Card className="Card-Reservas-Proximas">
      <Card.Body>
        <div className="div-card-Proximas">
          {/*título*/}
        <Card.Title className="card-titulo-proximas">{reserva.nombre}</Card.Title>
        {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
        {/* INFORMACIÓN */}
        <div className="fila-2-proximas">
          <div className='info-text-proximas'>
            {/* FECHA */}
            <div className="info-desc-proximas">
            <CiCalendar /> {reserva.fecha}
            </div>
            {/* HORA */}
            <div className="info-desc-proximas">
            <IoMdTime /> {reserva.hora}
            </div>
             {/* MESA */}
            <div className="info-desc-proximas">
            <IoLocationOutline /> Mesa {reserva.mesa}
            </div>
          </div>
            </div>
            {/* BOTONES */}
            <div className="Botones-Acciones">
              <Button
              variant="outline-secondary" 
              size="sm"
              onClick={() => abrirEditarReserva(reserva)}>
                <FiEdit size={15} />
              </Button>
              <Button
              variant="outline-secondary" 
              size="sm"
              onClick={() => abrirEliminarReserva(reserva)}>
                <FaRegTrashAlt size={15} />
              </Button>
            </div>
          </div>
      </Card.Body>
    </Card>
  </Container>
)}
  
    </>
  );
}

export default ReservasProximas;