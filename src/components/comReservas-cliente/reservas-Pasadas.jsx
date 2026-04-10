import './reservas-Pasadas.css';
import {Badge,  Card, Container } from 'react-bootstrap';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
function ReservasPasadas() {
  return (
     <>
    <Container className='Card-Pasadas'>
      <Card className='Card-Reservas-Pasadas'>
        <Card.Body>
          <div className="div-card-pasadas">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo-pasadas">Sakura Sushi</Card.Title>
              <div className="header-right">
                <Badge className="badge-Completada">Completada</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos-pasadas">
    {/* IZQUIERDA */}
    <div className="info-text-pasadas">
      <div className="info-desc-pasadas"><CiCalendar size={15} /> 24 de septiembre de 2025</div>
      <div className="info-desc-pasadas"><IoMdTime size={15} /> 18:00</div>
      <div className="info-desc-pasadas"><RxPeople size={15} /> 3 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right-pasadas">          
      <button className="btn-detalles-pasadas">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles-pasadas">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc-pasadas full-width" >
    <IoLocationOutline size={15} /> Mesa 12
  </div>
  </div>
  <hr className="divider-pasadas" />
  <div className="info-desc-pasadas">
    <LuChefHat size={15} />1 platillo pre-ordenado • Total: <span className="precio-pasado">$90.000</span>
  </div>
  <hr className="divider-pasadas" />
  <div className="info-desc-pasadas">
    <strong>Solicitudes especiales:</strong>Sin wasabi
  </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export default ReservasPasadas;