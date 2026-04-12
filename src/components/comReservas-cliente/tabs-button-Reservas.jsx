import { Container, Tabs } from "react-bootstrap";
import './Tabs-button-Reservas.css';
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import ReservasProximas from "./reservas-Proximas";
import ReservasPasadas from "./reservas-Pasadas";

function TabsButtonReservas() {
  return (
    <>
    <Container className='Card-Reservas'>
      <Tabs defaultActiveKey="Reservas"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
        <Tabs eventKey="Reservas" title={<span><CiCalendar className="icono"/> Proximadas</span>} >
        <ReservasProximas />
        </Tabs>
        <Tabs eventKey="Pasadas" title={<span><IoMdTime className="icono"/> Pasadas</span>} >
        <ReservasPasadas />
        </Tabs>
      </Tabs>
    </Container>
    </>
  );
}

export default TabsButtonReservas;