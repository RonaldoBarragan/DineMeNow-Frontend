import { Container } from "react-bootstrap";
import Gestion from "../components/comGestionEmpleadosRestaurante/card-GestiónEmpleados";

const GestionEmpleados = () => {
    return(
        <>
        <Container className="my-5 margen-provi">            
            <div className="mb-4">
                <Gestion/>
            </div>
        </Container>
        </>
    );
};
export default GestionEmpleados;