import { Card, Container } from "react-bootstrap";
import Tittle from "../components/comVista-Restaurante/Tittle";
import PanelEstadisticas from "../components/comVista-Restaurante/PanelEstadisticas";
import '../components/comVista-Restaurante/style.css';
import NavSecciones from "../components/comVista-Restaurante/Nav-Secciones";

export default function Vista_Restaurante() {
    return (
        <>
        <Container className="margen-provi container-principal-propio">
            <Tittle />
            <PanelEstadisticas />
            <Card className="p-3">
                <NavSecciones />
            </Card>
        </Container>
        </>
    )
}