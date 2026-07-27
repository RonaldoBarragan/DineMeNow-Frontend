import { Card, Container } from "react-bootstrap";
import Gestion from "../components/comGestionEmpleadosRestaurante/card-GestiónEmpleados";
import Titlegestion from "../components/comGestionEmpleadosRestaurante/title-GestionEmple";

const GestionEmpleados = () => {
    return(
        <>
        <Container className="my-5 ">
             <div className="mb-4">
                <Titlegestion/>
            </div>
            <div className="mb-4">
                <Gestion/>
            </div>
        </Container>
        </>
    );
};
export default GestionEmpleados;