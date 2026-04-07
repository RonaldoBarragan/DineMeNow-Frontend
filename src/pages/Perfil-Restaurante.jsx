import { Card, Container } from "react-bootstrap";
import Title from "../components/comPerfilRestaurante/title";
import TabsSecciones from "../components/comPerfilRestaurante/tabs-button";



const PerfilRestaurante = () => {

  return (
    <>
    <Container className="my-5 ">
      <div className="mb-4">
        <Title />
      </div>
      <div className="my-4">
        <TabsSecciones />
      </div>
      
    </Container>
    </>
      
  );
};

export default PerfilRestaurante;