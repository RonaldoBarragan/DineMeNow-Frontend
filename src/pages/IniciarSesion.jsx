import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import LogoInicioSesion from '../assets/logo-inicio-sesion2.jpg'; 
import { Image } from 'react-bootstrap';
import FormularioInicioSesion from '../components/formInicioSesion';  
import CardCrearCuenta from '../components/cardCrearCuenta';



const IniciarSesion = () => {

  return (

    <Container className="d-flex justify-content-center align-items-center position-relative px-0" style={{ minHeight: '100vh' }}>
     <div 

            className="position-absolute top-0 start-0 text-secondary mt-3 ms-3" 
            style={{ 
                cursor: 'pointer', 
                fontSize: '1rem',
            }}>
            <a href="#" className="text-secondary text-decoration-none">
                &times; 
                Cancelar
            </a>
        </div>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4} className="text-center mb-5">
          <div className='d-flex align-items-center justify-content-center mb-2'>
          <Image src={LogoInicioSesion} alt="Logo DineMeNow" style={{ height: '45px', marginRight: '8px' }} rounded />
           <h4 style={{ margin: 0, fontWeight: 'bold', color: '#212529' }}>DineMeNow</h4>
          </div>
          <p className="text-secondary small">Inicia sesion en tu cuenta</p>
          
          <FormularioInicioSesion></FormularioInicioSesion>

          <CardCrearCuenta></CardCrearCuenta>
          
        </Col>
       
       
        
      </Row>
      
    </Container>
  );
};

export default IniciarSesion;