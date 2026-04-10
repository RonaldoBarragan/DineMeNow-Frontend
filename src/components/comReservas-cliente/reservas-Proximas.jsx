import {Badge,  Card, Container, Modal } from 'react-bootstrap';
import './reservas-Proximas.css';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
function ReservasProximas() {
  const [show, setShow] = useState(false);
  return (
    <>
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de la Reserva</Modal.Title>
      </Modal.Header>


    </Modal>
    <Container className='Card-Proximadas'>
      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <div className="div-card">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo">La Mesa Criolla</Card.Title>
              <div className="header-right">
                <Badge className="badge-confirmada">Confirmada</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos">
    {/* IZQUIERDA */}
    <div className="info-text-prox">
      <div className="info-desc"><CiCalendar size={15} /> 14 de octubre de 2025</div>
      <div className="info-desc"><IoMdTime size={15} /> 19:00</div>
      <div className="info-desc"><RxPeople size={15} /> 4 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right">          
      <button className="btn-detalles">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc full-width" >
    <IoLocationOutline size={15} /> Mesa 5
  </div>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <LuChefHat size={15} />2 platillos pre-ordenados • Total: <span className="precio">$61.000</span>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <strong>Solicitudes especiales:</strong>Mesa cerca de la ventana
  </div>
        </Card.Body>
      </Card>

      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <div className="div-card">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo">Bella Napoli</Card.Title>
              <div className="header-right">
                <Badge className="badge-Pendiente">Pendiente</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos">
    {/* IZQUIERDA */}
    <div className="info-text-prox">
      <div className="info-desc"><CiCalendar size={15} /> 19 de octubre de 2025</div>
      <div className="info-desc"><IoMdTime size={15} /> 20:30</div>
      <div className="info-desc"><RxPeople size={15} /> 2 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right">          
      <button className="btn-detalles">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc full-width" >
    <IoLocationOutline size={15} /> Mesa 8
  </div>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <LuChefHat size={15} />2 platillos pre-ordenados • Total: <span className="precio">$60.000</span>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <strong>Solicitudes especiales:</strong>Mesa cerca de la ventana
  </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export default ReservasProximas;