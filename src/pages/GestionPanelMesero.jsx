import { Card, Container } from "react-bootstrap";

import Card_info_mesero from "../components/comGestionPanelMesero/Card-info-Mesero"
import Card_stats_mesero from "../components/comGestionPanelMesero/Card-stats-mesero";
import '../components/comVista-Restaurante/style.css';
import CardSections from "../components/comGestionPanelMesero/CardSections";

export default function Panel_Mesero() {
    return (
        <>
        <Container className='my-4  margen-provi'>
            <Card_info_mesero />
            <div className="mt-3">
            <Card_stats_mesero />
            </div>
            <Card className="p-3">
                <CardSections />
            </Card>
        </Container>
        </>
    )
}