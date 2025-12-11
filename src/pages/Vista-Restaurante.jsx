import { Container } from "react-bootstrap";
import Tittle from "../components/comVista-Restaurante/Tittle";
import Stat from "../components/comVista-Restaurante/Estadisticas";
import Reservas from "../components/comVista-Restaurante/Reservas";
import '../components/comVista-Restaurante/style.css';

export default function Vista_Restaurante() {
    return (
        <>
        <Container className='my-4 margen-provi'>
            <Tittle />
            <Stat />
            <Reservas />
        </Container>
        </>
    )
}