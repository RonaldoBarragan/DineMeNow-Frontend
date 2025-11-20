import { Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormularioInicioSesion() {
  return (
    <Card style={{ width: '100%'}} className="shadow ">
        <Card.Body>
        <p className='text-start'>Iniciar Sesión</p>
            <Form>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                 </Form.Group>
                <Button variant="primary" type="submit" size="sm" style={{ width: '95%', backgroundColor: '#FF6600',borderColor: '#FF6600', color: '#FFFFFF' }}>
                Iniciar Sesión
                </Button>
                <p className="text-center mt-3">
                    <a href="#" className="text-secondary small">¿Olvidaste tu contraseña?</a>
                </p>
                

            </Form>
        </Card.Body>
        
    </Card>
    
  );
}

export default FormularioInicioSesion;