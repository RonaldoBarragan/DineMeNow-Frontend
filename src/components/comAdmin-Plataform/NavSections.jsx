import { Card, Tab, Tabs } from "react-bootstrap";
import Section_Solicitud from "./Section-Solicitud";
import Section_Restaurants from "./Section-Restaurants";

export default function Nav_Section() {
    return (
        <>
        <Card className="p-3">
            <Tabs defaultActiveKey="Solicitudes" className="rounded-pill mb-3 tab-principal" variant="pills">
                <Tab eventKey="Solicitudes" title="Solicitudes (3)">
                    <Section_Solicitud />
                </Tab>
                <Tab eventKey="Accs restaurant" title="Cuentas restaurantes">
                    <Section_Restaurants />
                </Tab>
                <Tab eventKey="Accs cliente" title="Clientes">
                    Seccion 3
                </Tab>
            </Tabs>
        </Card>
        </>
    )
}