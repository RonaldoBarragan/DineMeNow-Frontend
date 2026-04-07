import { Card, Container } from "react-bootstrap";
import Tittle from "../components/comVista-Restaurante/Tittle";
import Stat from "../components/comVista-Restaurante/Estadisticas";
import '../components/comVista-Restaurante/style.css';
import NavSecciones from "../components/comVista-Restaurante/Nav-Secciones";

export default function Vista_Restaurante() {
    return (
        <>
        <Container className='my-4 margen-provi'>
            <Tittle />
            <Stat />
            <Card className="p-3">
                <NavSecciones />
            </Card>
        </Container>
        </>
    )
}