import { Card, Container } from "react-bootstrap";
import Title from "../components/comPerfilRestaurante/title";
import TabsRestaurante from "../components/comPerfilRestaurante/button-Tabs";
import InfoRestaurante from "../components/comPerfilRestaurante/info-Restaurante";
import Horario from "../components/comPerfilRestaurante/horario-Restaurante";


const PerfilRestaurante = () => {

  return (
    <>
    <Container className="my-5 ">
      <div className="mb-4">
        <Title />
      </div>

      <div className="mb-2">
        <TabsRestaurante />
      </div>

      <div className="mb-4">
        <InfoRestaurante />
      </div>

      <Horario />
    </Container>
    </>
      
  );
};

export default PerfilRestaurante;