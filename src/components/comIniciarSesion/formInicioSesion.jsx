import { Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formInicioSesion.css';
import { AiOutlineLock } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";


function FormularioInicioSesion() {
  return (
    <Card className="cardForm ">
        <Card.Body>
        <p className='pForm'>Iniciar Sesión</p>
            <Form>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label className='labelForm'>Email</Form.Label>
								<div className='input-container-relative'>
                <Form.Control type="email" placeholder="tu@email.com" className='inputForm icon-form-padding-left'/>
								<div className='icon-form-overlay'>
                <BsEnvelope size={15} />
              	</div>
								</div>
                </Form.Group>

                <Form.Group className="mb-3 text-start custom-input-group" controlId="formBasicPassword">
                <Form.Label className='labelForm'>Contraseña</Form.Label>
                <div className='input-container-relative'>
                <Form.Control type="password" placeholder="••••••••" className='inputForm icon-form-padding-left' />
               <div className='icon-form-overlay'>
                <AiOutlineLock size={20} />
              	</div>
                </div>
                </Form.Group>
                <Button  type="submit" size="sm" className="buttonNaranjaDegrade w-100">
                Iniciar Sesión
                </Button>
								<p className="text-center mt-3">
								<Link className='linkFormRecuperar' to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
                </p>
                

            </Form>
        </Card.Body>
        
    </Card>
    
  );
}

export default FormularioInicioSesion;