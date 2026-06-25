import { LiaEbay } from 'react-icons/lia';
import './añadir-empreado.css'
import {Card, Row, Col,Container, Button, Modal, Form, FormGroup } from 'react-bootstrap'; 
import { LuUserRoundPlus } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
function Añadirempreado (){
return (
        <>
        <Card className="card-Añadir">
            <p className='registro-empleado'> 
                <LuUserRoundPlus /> 
                Registro de Nuevo Empleado
            </p>
            <p className='datos-empre'> 
                <LuUser /> 
                Datos Personales
            </p>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Primer Nombre *</Form.Label>
                            <Form.Control type='text' placeholder='Ej:Carlos'/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Segundo Nombre</Form.Label>
                            <Form.Control type='text' placeholder='Ej:Alberto'/>                        
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Primer Apellido *</Form.Label>
                            <Form.Control type='text' placeholder='Ej: Rodriguez'/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control type='text' placeholder='Ej:Perez'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label> <CiMail /> Correo Electronico *</Form.Label>
                        <Form.Control type='email' placeholder='ejemplo@correo.com'/>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label> <FiPhone /> Telefono *</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    </Col>
                </Row>
                <p className='datos-empre'><FiBriefcase /> Datos Laborales</p>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Cargo/Puesto *</Form.Label>
                            <Form.Select>
                                <option disabled>Seleccione un cargo</option>
                                <option>Mesero</option>
                                <option>Cocina</option>
                                <option>Cajero</option>
                                <option>Supervisor</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
           <Card className='verificacion'>
            <p className='desc'>Para completar el registro, se enviará un código de verificación al correo del empleado.</p>
            <Button><CiMail /> Enviar Codigo de Verificacion</Button>
           </Card>
            <div className="d-flex gap-2 mt-3">
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary">Confirmar Registro</Button>
            </div>
        </Card>
        
      </>
    )
}
export default Añadirempreado;