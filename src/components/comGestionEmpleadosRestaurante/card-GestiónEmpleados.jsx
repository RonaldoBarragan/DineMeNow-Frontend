import './card-GestiónEmpleados.css'
import { Card, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { LuBuilding } from "react-icons/lu";
function CardGestionEmpleados(){
    return (
        <>
        <Container className="gestionempleados">
        <Card className="card-gestionempleados">
          <Card.Body>
            <LuBuilding  className="icono"/>
            <div>
            <Card.Title className="titulo">Gestión de Empleados</Card.Title>
            <Card.Text className="text">
              Administra el equipo de tu restaurante
            </Card.Text>
            </div>
            <Tabs defaultActiveKey="Gestion"  className="mb-3 fondo-tab rounded-pill" variant="pills" fill>
                <Tab eventKey="Gestion" title="Gestión de Empleados" >
                     
                </Tab>
                <Tab eventKey="Añadir" title="Añadir Empleado" >
                    
                </Tab>
            </Tabs>
            <Row>
                <Col md={4}>
                    <Card>
                        <h2>5</h2>
                        <p className='total-emple'>Total de Empleados</p>
                    </Card>
                </Col>
                <Col md= {4}>
                    <Card>
                        <h2>3</h2>
                        <p className='emple-activos'>Empleados Activos</p>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <h2>1</h2>
                        <p className='emple-inactivos'>Empleados Inactivos</p>
                    </Card>
                </Col>
            </Row>


          </Card.Body>
        </Card>
      </Container>
      </>
    )
}
export default CardGestionEmpleados;