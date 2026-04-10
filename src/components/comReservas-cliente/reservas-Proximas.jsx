import { Card, Container } from 'react-bootstrap';
import './reservas-Proximas.css';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
function ReservasProximas() {
  return (
    <>
    <Container className='Card-Proximadas'>
      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <Card.Title className="fw-bold" style={{ fontSize: "18px"}}>La Mesa Criolla</Card.Title>
            <div className='info-text-prox'>
              <span className='info-desc'><CiCalendar size={15} className="Desc-icon"/></span> 15 de octubre de 2025
              <span className='info-desc'><IoMdTime size={15} className="Desc-icon"/></span> 19:00
              <span className='info-desc'><RxPeople size={15} className="Desc-icon"/></span> 4 personas<br/>
            </div>
            <div className="info-desc full-width">
            <IoLocationOutline size={15} />Mesa 5
            </div>
        </Card.Body>

      </Card>
      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <Card.Title className="fw-bold" style={{ fontSize: "18px"}}>Bella Napoli</Card.Title>
          <div className='info-text-prox'>
              <span className='info-desc'><CiCalendar size={15} className="Desc-icon"/></span> 19 de octubre de 2025
              <span className='info-desc m-0'><IoMdTime size={15} className="Desc-icon"/></span> 20:30
              <span className='info-desc'><RxPeople size={15} className="Desc-icon"/></span> 2 personas
            </div>
            <div className="info-desc full-width">
            <IoLocationOutline size={15} />Mesa 8
            </div>
            <div className="info-desc full-width">
            
            </div>
        </Card.Body>
      </Card>
    </Container>
    </>
    
  );
}

export default ReservasProximas;