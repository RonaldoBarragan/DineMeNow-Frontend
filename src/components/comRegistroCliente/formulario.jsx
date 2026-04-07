import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formregistrocliente.css';
import { AiOutlineUser } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
function Formregristrousu () {
  return (
    <Card className="cardForm">
        <Card.Body>
        <p className='pForm'>Crear Cuenta</p>
            <Form >
            <Form.Group className="mb-3 text-start">
                <Form.Label>Nombre Completo</Form.Label>
                    <div className='input-container-relative'>
                    <Form.Control type="text" placeholder="Tu Nombre Completo" className='inputForm icon-form-padding-left'/>
                        <div className='icon-form-overlay'>
                    <AiOutlineUser size={15} />
                        </div>
                    </div>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
                <Form.Label>Email</Form.Label>
                    <div className='input-container-relative'>
                    <Form.Control type="email" placeholder="Ingresa tu carreo" className='inputForm icon-form-padding-left'/>
                        <div className='icon-form-overlay'>
                    <BsEnvelope size={15} />
                        </div>
                    </div>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
                <Form.Label>Telefono</Form.Label>
                    <div className='input-container-relative'>
                    <Form.Control type="tel" placeholder="3001234567" className='inputForm icon-form-padding-left'/>
                        <div className='icon-form-overlay'>
                    <FiPhone size={15} />
                        </div>
                    </div>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
                <Form.Label>Contraseña</Form.Label>
                    <div className='input-container-relative'>
                    <Form.Control type="password" placeholder="••••••••"  className='inputForm icon-form-padding-left'/>
                        <div className='icon-form-overlay'>
                    <AiOutlineLock size={15} />
                        </div>
                    </div>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
                <Form.Label>Confirmar Contraseña</Form.Label>
                    <div className='input-container-relative'>
                    <Form.Control type="password" placeholder="••••••••"  className='inputForm icon-form-padding-left'/>
                        <div className='icon-form-overlay'>
                    <AiOutlineLock size={15} />
                        </div>
                    </div>
            </Form.Group>
            <Button  type="submit" size="sm" className="buttonNaranjaDegrade w-100">
            Crear Cuenta
            </Button>
        </Form>
        </Card.Body>
        
    </Card>
    
  );
}

export default Formregristrousu;
