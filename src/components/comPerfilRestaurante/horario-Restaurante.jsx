import {Card, Row, Col,Container} from 'react-bootstrap'; 
import './Horario-Restaurante.css';
function Horario (){
  return(
    <Container className='Card-horario'>
    <Card className='info-card-horario'>
      <Card.Body>
        
        <p className='title-horario'>Configuración de Horarios</p>
        
        <Row className="align-items-start">
          <Col >
            <p className="info-subtitle-horario">Horario de Atención</p>
            <p className="info-text-horario">Lunes a Domingo: 12:00 - 22:00</p>

            <p className="info-subtitle-horario">Capacidad Total</p>
            <p className="info-text-horario">20 mesas (80 personas)</p> 

            <button className="btn-confi-horario">
              <p className='Configurar-horario'>Configurar Horarios</p>
            </button>
          </Col>
        </Row>

      </Card.Body>
    </Card> 
    </Container>
  )
}
export default Horario