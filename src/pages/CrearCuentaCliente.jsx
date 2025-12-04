import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Formulario from "../components/comRegistroCliente/formulario";
import BotonCancelar from "../components/common/botoncancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
const CrearCuentaCliente=() =>{
    return(
        <>
        <Container className="d-flex justify-content-center align-items-center position-relative px-0">
            <Row className="justify-content-center w-100">
                <BotonCancelar/>
                <Col xs={12} md={6} lg={4} className="text-center mb-5">
                    <ImgLogoGlobal texto="Crear Cuenta"/>
                    <Formulario/>
        </Col>
        </Row>
        </Container>
        </>
    )
}
export default CrearCuentaCliente