import {Card, Row, Col,Container, Button, Modal, Form, FormGroup } from 'react-bootstrap'; 
import './Info-Restaurante.css';
import { LuBuilding } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
function InfoRestaurante (){
    const [show, setShow] = useState(false);
    const [restaurante, setRestaurante] = useState({
  foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  nombre: "La Mesa Criolla",
  zona: "Zona Rosa",
  tipoCocina: "Colombiana",
  direccion: "Calle 82 #12-15, Zona Rosa, Bogotá",
  telefono: "+57 1 234-5678",
  email: "info@lamescriolla.com",
  descripcion: "Especialistas en comida tradicional colombiana con un toque moderno. Ambiente acogedor perfecto para compartir en familia o amigos."
});
  return(
    <>
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Informacion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <Form className="modal-letra">
              <Row >
                <Col >
                <Form.Group controlId='fotorestau'>
  <Form.Label>Foto del restaurante</Form.Label>
  
  {restaurante.foto ? (
    // Con foto: muestra la imagen y el botón X
    <div style={{ position: 'relative', marginBottom: '8px' }}>
      <Image
        src={restaurante.foto}
        style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <button
        type="button"
        onClick={() => setRestaurante({ ...restaurante, foto: '' })}
        style={{
          position: 'absolute', top: '6px', right: '6px',
          background: 'white', border: '1px solid #cccccc',
          borderRadius: '30%', width: '24px', height: '24px',
          cursor: 'pointer', fontSize: '14px', lineHeight: '1'
        }}>×</button>
    </div>
  ) : (
    // Sin foto: muestra el placeholder
    <div
      style={{
        border: '2px dashed #ccc', borderRadius: '8px',
        padding: '32px', textAlign: 'center',
        marginBottom: '8px', color: '#aaa', cursor: 'pointer'
      }}
      onClick={() => document.getElementById('inputFoto').click()}
    >
      <div style={{ fontSize: '40px' }}><FiCamera /></div>
      <div style={{ fontSize: '14px', marginBottom: '8px' }}>Subir foto del restaurante</div>
      <Button  size="sm" 
      style={{ 
    borderRadius: '5px', 
    borderColor: '#ddd',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
    color: '#364153',
    border: '1px solid #cccccc'
  }}
        onClick={(e) => { e.stopPropagation(); document.getElementById('inputFoto').click(); }}>
        Seleccionar imagen
      </Button>
    </div>
  )}

  <Form.Control
    id="inputFoto"
    type="file"
    accept="image/*"
    style={{ display: 'none' }}
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setRestaurante({ ...restaurante, foto: url });
      }
    }}
  />
</Form.Group>
                </Col>
                </Row>
                {/* Fila 2: Zona y Tipo de Cocina */}
                <Row >
                <Col md={6}>
                <Form.Group controlId='Namerestau'>
                  <Form.Label>Nombre del Restaurante</Form.Label>
                  <Form.Control
                    value={restaurante.nombre}
                    onChange={e => setRestaurante({...restaurante, nombre: e.target.value})}/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId='Zonarestau'>
                  <Form.Label>Zona</Form.Label>
                    <Form.Select
                      value={restaurante.zona}
                      onChange={e => setRestaurante({...restaurante, zona: e.target.value})}>
                      <option disabled>Seleccione Zona</option>
                      <option>Zona Rosa</option>
                      <option>Chapinero</option>
                      <option>Usaquén</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                </Row>
                {/* Fila 3: Tipo de Cocina  */}
                <Row >
                <Col>
                <Form.Group controlId='tipococinarestau'>
                  <Form.Label>Tipo de Cocina</Form.Label>
                    <Form.Select
                      value={restaurante.tipoCocina}
                      onChange={e => setRestaurante({...restaurante, tipoCocina: e.target.value})}>
                      <option disabled>Seleccione Tipo </option>
                      <option>Colombia</option>
                      <option>Italiana</option>
                      <option>Japonesa</option>
                      <option>Mexicana</option>
                      <option>Francesa</option>
                      <option>Americana</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                </Row>
                {/* Fila 4: Dirección y */}
                <Row >
                <Col>
                <Form.Group controlId='Direccionrestau'>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    value={restaurante.direccion}
                    onChange={e => setRestaurante({...restaurante, direccion: e.target.value})}/>
                  </Form.Group>
                </Col>
                </Row>
                {/* Fila 5: Teléfono y Email */}
                <Row >
                <Col md={6}>
                <Form.Group controlId='Teléfonorestau'>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    value={restaurante.telefono}
                    onChange={e => setRestaurante({...restaurante, telefono: e.target.value})}/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId='Emailrestau'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={restaurante.email}
                    onChange={e => setRestaurante({...restaurante, email: e.target.value})}/>
                  </Form.Group>
                </Col>
                </Row>
                {/* Fila 6:  Descripción*/}
                <Row >
                <Col>
                <Form.Group controlId='Descripciónrestau'>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={restaurante.descripcion}
                    onChange={e => setRestaurante({...restaurante, descripcion: e.target.value})}/>
                  </Form.Group>
                </Col>
                </Row>
              
          </Form>
      </Modal.Body>
        <Modal.Footer>
                <Button className="modal-letra bg-white" variant="light" onClick={() => setShow(false)}>Cancelar</Button>
                <Button className="modal-letra" variant="dark" onClick={() => setShow(false)}>Guardar Cambios</Button>
        </Modal.Footer>
    </Modal>
    <Container className='Card-inforestau'>
    <Card className='info-card-restau'>
      <Card.Body>
        
        <div className='encabezado-inforestau'>
          <div className='encabezado-title-inforestau'>
          <LuBuilding size={15}/> 
          <p className='encb-title-inforestau'>Información del Restaurante</p>
          </div>
          <button size="sm" onClick={() => setShow(true)} className="btn-edit-inforestau">
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
    </>
  )
}
export default InfoRestaurante;