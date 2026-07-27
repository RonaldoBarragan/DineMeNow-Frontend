import { Card, Container } from "react-bootstrap";
import './title-GestionEmple.css'
import { LuBuilding } from "react-icons/lu";
 function titleGestionEmple(){
        return (
      <Container className="title-gestionemple">
        <Card className="title-card-gestionemple">
          <Card.Body>
            <LuBuilding  className="icono"/>
            <div>
            <Card.Title className="titulo">Panel de Gestión - Restaurante</Card.Title>
            <Card.Text className="text">
              Gestor La Mesa Criolla - La Mesa Criolla
            </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Container>
    )
 }
 export default titleGestionEmple;