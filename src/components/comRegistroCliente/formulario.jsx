import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formregistrocliente.css';
function Formregristrousu () {
    return (
        <>
        <div className="form-registro">
        <p>Crear cuenta</p>
        <Form >
            <Form.Group>
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Tu Nombre Completo">
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu carreo">
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" placeholder="3001234567">
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" >
                </Form.Control>
            </Form.Group>
            <Button type='submit'>Crear Cuenta</Button>
        </Form>
        </div>
        </>
    )
}
export default Formregristrousu