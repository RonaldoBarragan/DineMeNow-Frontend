import './card-GestiónEmpleados.css'
import { Card, Container, Tabs, Tab } from "react-bootstrap";
import { LuUsers } from "react-icons/lu";
import ListaEmpreados from "./listaEmpreados";
import Añadirempreado from './añadir-empreado';
function CardGestionEmpleados(){
    return (
        <>
        <Container className="gestionempleados">
        <Card className="card-gestionempleados">
          <Card.Body>
            {/*TITULO*/}
            <div className='titulo-empleados'>
            <LuUsers  className="icono"/>
            <div>
            <Card.Title className="titulo">Gestión de Empleados</Card.Title>
            <Card.Text className="descripcion">
              Administra el equipo de tu restaurante
            </Card.Text>
            </div>
            </div>
            {/*TABS BUTTON*/}
            <div className='tabs'>
            <Tabs defaultActiveKey="Gestion"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Gestion" title="Gestión de Empleados" >
                     <ListaEmpreados/>
                </Tab>
                <Tab eventKey="Añadir" title="Añadir Empleado" >
                    <Añadirempreado/>
                </Tab>
            </Tabs>
            </div>
          </Card.Body>
        </Card>
      </Container>
      </>
    )
}
export default CardGestionEmpleados;