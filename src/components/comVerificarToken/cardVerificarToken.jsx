import { Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TokenTimer from './tokenTimer';

function CardVerificarToken() {
  return (
    <Card style={{ width: '100%'}} className="shadow ">
        <Card.Body>
        <p className='text-start'>Verificar token</p>
        <p className="text-third small mb-2">Hemos enviado un token de recuperación a:</p>
          <p className="fw-bold text-black-60 mt-0">prueba@gmail.com</p>
          <TokenTimer initialTimeSegundos={300} />
            <Form>
                <Form.Group className="mb-3 text-start" controlId="formRecuperacionToken">
                <Form.Label className='text-start d-block' style={{ color: '#000' }}>Token de recuperación</Form.Label>
                <Form.Control type="token" placeholder="Validar token" className="text-center fs-0 py-0" 
                                    style={{ 
                                     
                                        letterSpacing: '5px', 
                                        textTransform: 'uppercase',
      
                                        backgroundColor: '#f3f3f5',
                      

                                        border: '1px solid #b9b6b6bd' 
                                    }}/>
                                    
                </Form.Group>
                <Button variant="primary" type="submit" size="sm" style={{ width: '100%', backgroundColor: '#FF6600',borderColor: '#FF6600', color: '#FFFFFF' }}>
                Verificar token
                </Button>

              

                

            </Form>
        </Card.Body>
        
    </Card>
    
  );
}

export default CardVerificarToken;