import './reservas-Pasadas.css'; 
import { Badge, Card, Container, Modal, Button } from 'react-bootstrap'; 
import { CiCalendar } from "react-icons/ci"; 
import { IoMdTime } from "react-icons/io"; 
import { RxPeople } from "react-icons/rx"; 
import { IoLocationOutline } from "react-icons/io5"; 
import { MdOutlineRemoveRedEye } from "react-icons/md"; 
import { LuChefHat } from "react-icons/lu"; 
import { useAuth } from "../../context/AuthContext"; 
import { getMyReservas, obtenerPlatos } from '../../api/Client-Service'; 
import { useEffect, useState } from "react"; 
 
function ReservasPasadas() { 
  const { user } = useAuth(); 
  const [reservas, setReservas] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [tipoModal, setTipoModal] = useState(null); 
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null); 
  const [platosSeleccionados, setPlatosSeleccionados] = useState([]); 
 
  useEffect(() => { 
    const cargarReservas = async () => { 
      try { 
        const data = await getMyReservas(); 
 
        const reservasPasadas = data.filter((reserva) => { 
          const fechaReserva = new Date( 
            `${reserva.fecha}T${reserva.hora}` 
          ); 
 
          return fechaReserva < new Date(); 
        }); 
 
        setReservas(reservasPasadas); 
      } catch (error) { 
        console.error("Error al cargar las reservas:", error); 
      } 
    }; 
 
    if (user) { 
      cargarReservas(); 
    } 
  }, [user]); 
 
  const reservasCompletadas = reservas.filter( 
    (reserva) => reserva.estado === "COMPLETADA" 
  ); 
 
  const abrirDetalles = async (reserva) => { 
    try { 
      const menuRestaurante = await obtenerPlatos(reserva.nitRestaurante); 
 
      const platosReserva = Array.isArray(reserva.nombrePlatos) 
        ? reserva.nombrePlatos 
        : []; 
 
      const platos = platosReserva.map((nombrePlatoReserva) => { 
        const match = nombrePlatoReserva.match(/^(\d+)x\s(.+)$/); 
        const cantidad = match ? Number(match[1]) : 1; 
        const nombre = match ? match[2].trim() : nombrePlatoReserva.trim(); 
 
        const platoMenu = menuRestaurante.find( 
          (plato) => 
            plato.nomPlato?.trim().toLowerCase() === 
            nombre.toLowerCase() 
        ); 
 
        const precio = Number( 
          platoMenu?.precio ?? 
          platoMenu?.valor ?? 
          0 
        ); 
 
        return { 
          nombre, 
          cantidad, 
          precio, 
          total: cantidad * precio 
        }; 
      }); 
 
      setPlatosSeleccionados(platos); 
      setReservaSeleccionada(reserva); 
      setTipoModal(1); 
      setShowModal(true); 
 
    } catch (error) { 
      console.error("Error obteniendo los platos:", error); 
 
      setPlatosSeleccionados([]); 
      setReservaSeleccionada(reserva); 
      setTipoModal(1); 
      setShowModal(true); 
    } 
  }; 
 
  const totalPagado = platosSeleccionados.reduce( 
    (total, plato) => total + plato.total, 
    0 
  ); 
 
  return ( 
    <> 
      <Modal 
        centered 
        show={showModal} 
        onHide={() => setShowModal(false)} 
      > 
        {tipoModal === 1 && reservaSeleccionada && ( 
          <> 
            <Modal.Header closeButton> 
              <Modal.Title> 
                Detalles de la Reserva 
              </Modal.Title> 
            </Modal.Header> 
 
            <Modal.Body> 
 
              <div className='info'> 
                <p className='title-modal-nombre'> 
                  Nombre del restaurante{" "} 
                  {reservaSeleccionada.nombreRestaurante} 
                </p> 
 
                <div className='info-desc-modal'> 
                  Nombre del cliente:{" "} 
                  {reservaSeleccionada.nombreCliente} 
                </div> 
 
                <div className='modal-cuadro'> 
 
                  <div className="columna-pricipal"> 
                    <div className='info-desc-modal'> 
                      <CiCalendar size={15} />{" "} 
                      {reservaSeleccionada.fecha} 
                    </div> 
 
                    <div className='info-desc-modal'> 
                      <IoLocationOutline size={15} />{" "} 
                      Mesa {reservaSeleccionada.numeroMesa} 
                    </div> 
                  </div> 
 
                  <div className="columna-pricipal"> 
                    <div className='info-desc-modal'> 
                      <IoMdTime size={15} />{" "} 
                      {reservaSeleccionada.hora} 
                    </div> 
                  </div> 
 
                </div> 
 
                <div className='estado'> 
                  <Badge className="badge-Completada"> 
                    {reservaSeleccionada.estado} 
                  </Badge> 
                </div> 
              </div> 
 
              <div className='info-platillos'> 
 
                <p className='title-modal'> 
                  <LuChefHat size={15} /> 
                  Platillos pre-ordenados 
                </p> 
 
                <div className='info'> 
 
                  {platosSeleccionados.map((plato, index) => ( 
                    <div className="platillo-row" key={index}> 
 
                      <div> 
                        <span className="desc-pas"> 
                          {plato.nombre} 
                        </span> 
                      </div> 
 
                      <div> 
                        <span className="desc-pas"> 
                          Cantidad: {plato.cantidad} 
                        </span> 
                      </div> 
 
                      <div> 
                        <span className="desc-pas"> 
                          Valor unitario: ${plato.precio.toLocaleString("es-CO")} 
                        </span> 
                      </div> 
 
 
                    </div> 
                  ))} 
 
                  <div className="total-pagar"> 
                    <strong> 
                      Total pagado: ${totalPagado.toLocaleString("es-CO")} 
                    </strong> 
                  </div> 
 
                </div> 
              </div> 
 
              <div className='info-reserva'> 
 
                <p className='title-modal'> 
                  Información adicional 
                </p> 
 
                <div className='info'> 
 
                  <div className='fila-reserva'> 
 
                    <div className="columna-reserva"> 
 
                      <div className="campo-reserva"> 
 
                        <span className="label"> 
                          ID de reserva 
                        </span> 
 
                        <span className="valor"> 
                          {reservas.findIndex( 
                            (r) => r.id === reservaSeleccionada.id 
                          ) + 1} 
                        </span> 
 
                      </div> 
 
                    </div> 
 
                  </div> 
 
                </div> 
 
              </div> 
 
            </Modal.Body> 
 
            <Modal.Footer> 
              <Button 
                className="btn-cerrar" 
                onClick={() => setShowModal(false)} 
              > 
                <span className="cerrar"> 
                  Cerrar 
                </span> 
              </Button> 
            </Modal.Footer> 
          </> 
        )} 
      </Modal> 
 
      <Container className='Card-Pasadas'> 
 
        {reservasCompletadas.length === 0 ? ( 
          <p className="text-muted text-center"> 
            No tienes reservas pasadas. 
          </p> 
        ) : ( 
          reservasCompletadas.map((reserva) => ( 
            <Card 
              key={reserva.id} 
              className='Card-Reservas-Pasadas' 
            > 
 
              <Card.Body> 
 
                <div className="div-card-pasadas"> 
 
                  <Card.Title className='tituloo'> 
                    {reserva.nombreRestaurante} 
                  </Card.Title> 
 
                  <div className="header-right"> 
                    <Badge className="badge-Completada"> 
                      {reserva.estado} 
                    </Badge> 
                  </div> 
 
                  <div className="fila-dos-pasadas"> 
 
                    <div className="info-text-pasadas"> 
 
                      <div className="info-desc-pasadas"> 
                        <CiCalendar size={15} /> 
                        {reserva.fecha} 
                      </div> 
 
                      <div className="info-desc-pasadas"> 
                        <IoMdTime size={15} /> 
                        {reserva.hora} 
                      </div> 
 
                      <div className="info-desc-pasadas"> 
                        <RxPeople size={15} /> 
                        Mesa {reserva.numeroMesa} 
                      </div> 
 
                    </div> 
 
                    <div className="header-right-pasadas"> 
 
                      <button 
                        type="button" 
                        onClick={() => abrirDetalles(reserva)} 
                        className="btn-detalles-pasadas" 
                      > 
 
                        <MdOutlineRemoveRedEye size={15} /> 
 
                        <span className="Ver-detalles-pasadas"> 
                          Ver detalles 
                        </span> 
 
                      </button> 
 
                    </div> 
 
                  </div> 
 
                </div> 
 
              </Card.Body> 
 
            </Card> 
          )) 
        )} 
 
      </Container> 
    </> 
  ); 
} 
 
export default ReservasPasadas;