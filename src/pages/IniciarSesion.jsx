import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import LogoInicioSesion from '../assets/logo-inicio-sesion2.jpg'; 
import { Image } from 'react-bootstrap';
import FormularioInicioSesion from '../components/comIniciarSesion/formInicioSesion';  
import CardCrearCuenta from '../components/comIniciarSesion/cardCrearCuenta';
import BotonCancelar from '../components/common/botonCancelar';
import ImgLogoGlobal from '../components/common/imgLogo';



const IniciarSesion = () => {

  return (

      <Container className="d-flex justify-content-center align-items-center position-relative px-0">
      
        <Row className="justify-content-center w-100">
          <BotonCancelar/>
          <Col xs={12} md={6} lg={4} className="text-center mb-5">
            
            <ImgLogoGlobal texto="Inicia sesion en tu cuenta"/>
            
            <FormularioInicioSesion></FormularioInicioSesion>

            <CardCrearCuenta></CardCrearCuenta>
            
          </Col>
        
        
          
        </Row>
        
      </Container>
  );
};

export default IniciarSesion;