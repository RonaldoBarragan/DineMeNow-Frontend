import { Card, Container } from "react-bootstrap";
import './title-Reservas.css'

function TitleReservas() {
    return (
      <Container className="title-reservas">
        <Card className="title-card-reservas">
          <Card.Body>
            <Card.Title className="titulo">Mis Reservas</Card.Title>
            <Card.Text className="text">
              Gestiona todas tus reservas 
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
}

export default TitleReservas;