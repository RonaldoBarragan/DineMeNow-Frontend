import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ImgLogoGlobal from "../components/common/imgLogo";
import CambioContraObligatoria from "../components/comRestaurantePass/cambioContraObligatorio";

const ActualizarContraRestau = () =>{
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center w-100">
                <Col xs={12} md={6} lg={4} className="text-center">
                <ImgLogoGlobal texto="Activa tu cuenta de restaurante" />
                <CambioContraObligatoria/>
                </Col>

            </Row>

        </Container>
    );
};
export default ActualizarContraRestau;