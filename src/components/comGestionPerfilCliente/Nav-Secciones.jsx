import { Container, Tab, Tabs } from "react-bootstrap";
import PerfilCliente from "./Perfil";
import SeguridadPerfilCliente from "./Seguridad";
import NotificacionesPerfilCliente from "./Notificaciones";
import CuentaPerfilCliente from "./Cuenta";

function NavSeccionesGestionPerfil() {
  return (
    <>
    <Tabs defaultActiveKey="Perfil" className="mb-3 tab-restaurant rounded-pill" variant="pills" fill>
        <Tab eventKey="Perfil" title="Perfil">
            <PerfilCliente />
        </Tab>
        <Tab eventKey="Seguridad" title="Seguridad">
            <SeguridadPerfilCliente/>
        </Tab>
        <Tab eventKey="Notificaciones" title="Notificaciones">
            <NotificacionesPerfilCliente/>
        </Tab>
        <Tab eventKey="Cuenta" title="Cuenta">
            <CuentaPerfilCliente/>
        </Tab>
    </Tabs>
    </>
  );
}

export default NavSeccionesGestionPerfil;