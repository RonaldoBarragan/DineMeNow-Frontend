import { Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function CardCrearCuenta() {
  return (
    <Card style={{ width: '100%'}} className="shadow mt-3">
        <Card.Body>
                <p className="text-center ">
                    <a className="text-secondary small text-decoration-none">¿No tienes una cuenta?</a>
                </p>
                <div className="d-flex justify-content-center mb-1">
                <Button variant="primary" type="submit" size="sm" style={{ width: '95%', backgroundColor: '#ffffffff',borderColor: '#edeaeaff', color: '#000000ff' }}>
                Crear Cuenta
                </Button>
                </div>
        </Card.Body>
        
    </Card>
    
  );
}

export default CardCrearCuenta;