import { Container } from "react-bootstrap";
import InfoRestaurante from "./info-Restaurante";
import Horario from "./horario-Restaurante";

function Perfil(){
  return(
    <Container >
      <div className="mb-4">
        <InfoRestaurante />
      </div>

      <Horario />
    </Container>
  )
}
export default Perfil;