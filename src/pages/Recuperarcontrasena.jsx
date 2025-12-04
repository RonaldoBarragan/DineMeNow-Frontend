import React from "react";
import CardRecuperar from "../components/comRecuperarContrasena/CardRecuperarContrasena";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
import { Container } from "react-bootstrap";

const Recuperar = () => {
  return (
    <>
      <Container>
        <BotonCancelar />
        <ImgLogoGlobal />
      </Container>

      <CardRecuperar />
    </>
  );
};

export default Recuperar;
