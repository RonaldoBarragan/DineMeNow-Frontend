import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import LogoInicioSesion from '../assets/logo-inicio-sesion2.jpg'; 
import { Image } from 'react-bootstrap';
import CardVerificarToken from '../components/comVerificarToken/cardVerificarToken';



const VerificarToken = () => {
  const location = useLocation();
  const correo = location.state?.correo || location.state?.email;
  const recovery = location.state?.tipo === "recuperacion";

  // Si alguien intenta entrar a esta URL sin haberse registrado (sin email),
  // lo mandamos de vuelta al registro.
  if (!correo) {
    return <Navigate to="/recuperarcontrasena" replace />;
}

  return (

    <Container className="d-flex justify-content-center align-items-center position-relative px-0" style={{ minHeight: '100vh' }}>
     <div className="position-absolute top-0 start-0 text-secondary mt-3 ms-3" style={{ cursor: "pointer", fontSize: "1rem" }}>
        <a href={recovery ? "/recuperarcontrasena" : "/crearcuenta"} className="text-secondary text-decoration-none">
          &times; Cancelar
        </a>
      </div>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4} className="text-center mb-5">
          <div className='d-flex align-items-center justify-content-center mb-2'>
          <Image src={LogoInicioSesion} alt="Logo DineMeNow" style={{ height: '45px', marginRight: '8px' }} rounded />
           <h4 style={{ margin: 0, fontWeight: 'bold', color: '#212529' }}>DineMeNow</h4>
          </div>
          <p className="text-secondary small">{recovery ? "Recuperar contraseña" : "Verificar token"}</p>
          <CardVerificarToken email={correo} recovery={recovery} />
          
        </Col>
       
       
        
      </Row>
      
    </Container>
  );
};

export default VerificarToken;