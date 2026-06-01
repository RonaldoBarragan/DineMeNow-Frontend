import { Container } from "react-bootstrap";
import InfoRestaurante from "./info-Restaurante";
import Horario from "./horario-Restaurante";

function Perfil(){
  return(
    <Container className="p-0">
      <div className="mb-4">
        <InfoRestaurante />
      </div>

      <Horario />
    </Container>
  )
}
export default Perfil;