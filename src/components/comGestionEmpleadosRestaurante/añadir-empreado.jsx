import { LiaEbay } from 'react-icons/lia';
import './añadir-empreado.css'
import {Card, Row, Col,Container, Button, Modal, Form, FormGroup } from 'react-bootstrap'; 
import { LuUserRoundPlus } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { useState } from 'react';
function Añadirempreado (){
    const [correo, setCorreo] = useState ("")
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    const [codigo, setCodigo] = useState ("");
    const codigoValido = /^\d{6}$/.test(codigo);

    const[cargo,setcargo] = useState("");
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
                            <Form.Label className='campo'>Primer Nombre *</Form.Label>
                            <Form.Control  className='input'type='text' placeholder='Ej:Carlos'/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Segundo Nombre</Form.Label>
                            <Form.Control className='input' type='text' placeholder='Ej:Alberto'/>                        
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Primer Apellido *</Form.Label>
                            <Form.Control className='input' type='text' placeholder='Ej: Rodriguez'/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Segundo Apellido</Form.Label>
                            <Form.Control className='input' type='text' placeholder='Ej:Perez'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label className='campo'>Correo Electronico *</Form.Label>
                        <div className='icono-input'><CiMail className='icono-control'/> 
                        <Form.Control 
                        className='input' 
                        type='email' 
                        placeholder='ejemplo@correo.com'
                        value={correo}
                        onChange={(e) =>setCorreo(e.target.value)}
                        /></div>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label className='campo'>  Telefono *</Form.Label>
                        <div className='icono-input'><FiPhone className='icono-control'/><Form.Control className='input' type='tel' placeholder='3201234567'  /></div>
                    </Form.Group>
                    </Col>
                </Row>
                <p className='datos-empre'><FiBriefcase /> Datos Laborales</p>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className='campo'>Cargo/Puesto *</Form.Label>

                            <Form.Select value={cargo} 
                            onChange={(e) => setcargo (e.target.value)} className='input'>
                                <option value={""} disabled>Seleccione un cargo</option>
                                <option>Mesero</option>
                                <option>Cocina</option>
                                <option>Cajero</option>
                                <option>Supervisor</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <p className='datos-empre'>Verificación por Correo</p>
           <Card className='verificacion'>
            <p className='desc'>Para completar el registro, se enviará un código de verificación al correo del empleado.</p>
            <Button className='btn-codigo' 
            disabled={!correoValido}
            onClick={()=> setMostrarCodigo(true)}><CiMail /> Enviar Codigo de Verificacion</Button>
           </Card>
           {mostrarCodigo && (
    <Form.Group className="mt-3">
        <Form.Label className="campo">
            Código de Verificación
        </Form.Label>

        <Form.Control
            className="input"
            type="text"
            placeholder="Ingrese el codigo de 6 digitos"
            value={codigo}
            onChange={(e) => setCodigo (e.target.value)}
        />

        <small className="text-muted">
            El código fue enviado al correo <strong>{correo}</strong>
        </small>
    </Form.Group>
)}
            <div className="botones">
                <Button className='btn-cancelar' >Cancelar</Button>
                <Button 
                className='btn-confirmar' 
                disabled={!codigoValido}
                >Confirmar Registro</Button>
            </div>
        </Card>
        
      </>
    )
}
export default Añadirempreado;