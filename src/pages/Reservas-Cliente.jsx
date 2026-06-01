import { Container } from "react-bootstrap";
import TabsButtonReservas from "../components/comReservas-cliente/tabs-button-Reservas";
import TitleReservas from "../components/comReservas-cliente/title-Reservas";
import Header from "../components/comHomePage/Header";

const ReservasCliente = () => {
  
  return (
    <>
      <Header viewMode="results" />

    <Container className="my-5 ">
      <div className="mb-4">
        <TitleReservas />
      </div>
      <div className="my-4">
        <TabsButtonReservas /> 
      </div>
      
    </Container>
    </>
  );
}
export default ReservasCliente;