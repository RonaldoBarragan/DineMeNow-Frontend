import { Container, Tab, Tabs } from "react-bootstrap";
import './Tabs-button.css';
import Perfil from "./info-horario";
import SeguridadRestaurante from "./Seguridad";
import ConfiguracionCuenta from "./Configuracion-Cuenta";

function TabsSecciones() {
    return (
        <>
        <Container className='Card'>
        
            <Tabs defaultActiveKey="Perfil"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Perfil" title="Perfil del Restaurante" >
                    <Perfil/> 
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
