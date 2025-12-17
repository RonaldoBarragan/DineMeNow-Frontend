import {Card, Row, Col,Container} from 'react-bootstrap'; 
import './Horario-Restaurante.css';
function Horario (){
  return(
    <Container className='Card'>
    <Card className='info-card '>
      <Card.Body>
        
        <p className='title'>Configuración de Horarios</p>
        
        <Row className="align-items-start">
          <Col >
            <p className="info-subtitle">Horario de Atención</p>
            <p className="info-text">Lunes a Domingo: 12:00 - 22:00</p>

            <p className="info-subtitle">Capacidad Total</p>
            <p className="info-text">20 mesas (80 personas)</p> 

            <button className="btn-confi">
              <p className='Configurar'>Configurar Horarios</p>
            </button>
          </Col>
        </Row>

      </Card.Body>
    </Card> 
    </Container>
  )
}
export default Horario