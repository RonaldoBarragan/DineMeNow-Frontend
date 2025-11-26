import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Formregristrousu () {
    return (
        <>
        <h4>Crea tu cuenta</h4>
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
                <Form.Control type="number" placeholder="3001234567">
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
<br></br>
            <Button type='submit'>Crear Cuenta</Button>
        </Form>
        </>
    )
}
export default Formregristrousu