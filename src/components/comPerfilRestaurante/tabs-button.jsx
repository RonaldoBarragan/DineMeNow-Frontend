import { Container, Tab, Tabs } from "react-bootstrap";
import './Tabs-button.css';
import SeguridadRestaurante from "./Seguridad";
import ConfiguracionCuenta from "./Configuracion-Cuenta";
import InfoRestaurante from "./info-Restaurante";

function TabsSecciones() {
    return (
        <>
        <Container className='Card'>
        
            <Tabs defaultActiveKey="Perfil"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Perfil" title="Perfil del Restaurante" >
                    <InfoRestaurante /> 
                </Tab>
                <Tab eventKey="Seguridad" title="Seguridad" >
                    <SeguridadRestaurante/>
                </Tab>
                <Tab eventKey="Configuracion" title="Configuración de Cuenta" >
                    <ConfiguracionCuenta/>
                </Tab>
            </Tabs>
            
        </Container>
    </>
    )
}
export default TabsSecciones;
