import {Card, Row, Col,Container} from 'react-bootstrap'; 
import './Info-Restaurante.css';
import { LuBuilding } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
function InfoRestaurante (){
  return(
    <Container className='Card-inforestau'>
    <Card className='info-card-restau'>
      <Card.Body>
        
        <div className='encabezado-inforestau'>
          <div className='encabezado-title-inforestau'>
          <LuBuilding size={15}/> 
          <p className='encb-title-inforestau'>Información del Restaurante</p>
          </div>
          <button className="btn-edit-inforestau">
          <AiOutlineForm size={15}/> <p className='Editar-inforestau'>Editar Informacion</p>
          </button>
        </div>

        <Row className="align-items-start">
          <Col md={6}>
            <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2MjI5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="inforestau-image" rounded />
            
            <p className="inforestau-subtitle">Nombre del Restaurante</p>
            <p className="inforestau-text">La Mesa Criolla</p>

            <p className="inforestau-subtitle">Zona</p>
            <p className="inforestau-text">
              <CiLocationOn size={15} className="info-icon"/>Zona Rosa</p>

            <p className="inforestau-subtitle">Tipo de Cocina</p>
            <p className="inforestau-text">Colombiana</p> 
          </Col>

          <Col md={6} className="inforestau-right">
            <p className="inforestau-subtitle">Dirección</p>
            <p className="inforestau-text"> <CiLocationOn size={15} className="info-icon"/>Calle 82 #12-15, Zona Rosa, Bogotá</p>

            <p className="inforestau-subtitle">Teléfono</p>
            <p className="inforestau-text"> <LuPhone  size={15} className="info-icon"/>+57 1 234-5678</p>

            <p className="inforestau-subtitle">Email</p>
            <p className="inforestau-text"> <CiMail size={15} className="info-icon"/>info@lamescriolla.com</p>

            <p className="inforestau-subtitle">Descripción</p>
            <p className="Descripcion-inforestau">Especialistas en comida tradicional colombiana con un toque moderno.
              Ambiente acogedor perfecto para compartir en familia o amigos.</p>
          
          
          </Col>
        </Row>

      </Card.Body>
    </Card> 
    </Container>
  )
}
export default InfoRestaurante