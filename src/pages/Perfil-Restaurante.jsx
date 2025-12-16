import { Card, Container } from "react-bootstrap";
import Title from "../components/comPerfilRestaurante/title";
import TabsRestaurante from "../components/comPerfilRestaurante/button-Tabs";
import InfoRestaurante from "../components/comPerfilRestaurante/info-Restaurante";
import Horario from "../components/comPerfilRestaurante/horario-Restaurante";


const PerfilRestaurante = () => {

  return (
    <>
    <Container className="my-4">
      <Title/>
      <br></br>
      <TabsRestaurante/>
      <br></br>
      <InfoRestaurante/>
      <Horario/>
    </Container>
    </>
      
  );
};

export default PerfilRestaurante;