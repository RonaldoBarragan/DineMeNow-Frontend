import React from "react";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
import CardCambiar from "../components/comRecuperarContrasena/CardCambioContrasena";

const CambiarContrasena = () => {
  return (
    <>
      <BotonCancelar />
      <div style={{ paddingTop: "150px", textAlign: "center" }}>
        <ImgLogoGlobal />
        <CardCambiar />
      </div>
    </>
  );
};

export default CambiarContrasena;
