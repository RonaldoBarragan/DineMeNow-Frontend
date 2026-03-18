import { Card, Container } from "react-bootstrap";

import CardSupTitle from "../components/comGestionPanelMesero/CardSupTitle"
import CardsInfStats from "../components/comGestionPanelMesero/CardsInfStats";
import '../components/comVista-Restaurante/style.css';
import CardSections from "../components/comGestionPanelMesero/CardSections";

export default function Panel_Mesero() {
    return (
        <>
        <Container className='my-4  margen-provi'>
            <CardSupTitle />
            <div className="mt-3">
            <CardsInfStats />
            </div>
            <Card className="p-3">
                <CardSections />
            </Card>
        </Container>
        </>
    )
}