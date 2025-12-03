import { Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function CardCrearCuenta() {
  return (
    <Card style={{ width: '100%'}} className="shadow mt-3">
        <Card.Body>
                <p className="text-center ">
                    <a className="text-secondary small text-decoration-none">¿No tienes una cuenta?</a>
                </p>
                <div className="d-flex justify-content-center mb-1">
                <Button className="buttonBlancoFGris w-100"  
                as={Link} to="/crear-cuenta" size="sm" >
                Crear Cuenta
                </Button>
                </div>
        </Card.Body>
        
    </Card>
    
  );
}

export default CardCrearCuenta;

//style={{ width: '95%', backgroundColor: '#ffffffff',borderColor: '#edeaeaff', color: '#000000ff' }}