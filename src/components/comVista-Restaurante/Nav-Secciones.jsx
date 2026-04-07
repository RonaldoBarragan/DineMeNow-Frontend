import { Container, Tab, Tabs } from "react-bootstrap";
import Reservas from "./Reservas";
import Menu from "./Menu";
import Mesas from "./Mesas";

export default function NavSecciones() {
    return (
        <>
        <Container className="per">
            <Tabs defaultActiveKey="Reservas" className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Reservas" title="Gestion de Reservas">
                    <Reservas />
                </Tab>
                <Tab eventKey="Menu" title="Gestion del Menu">
                    <Menu />
                </Tab>
                <Tab eventKey="Mesas" title="Gestion de Mesas">
                    <Mesas />
                </Tab>
            </Tabs>
        </Container>
    </>
    )
}