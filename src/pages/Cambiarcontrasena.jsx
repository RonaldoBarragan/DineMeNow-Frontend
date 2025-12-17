import React from "react";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
import CardCambiar from "../components/comRecuperarContrasena/CardCambioContrasena";

const CambiarContrasena = () => {
  return (
    <>
      <BotonCancelar />
      <div style={{ paddingTop: "120px", textAlign: "center" }}>
        <ImgLogoGlobal />
      </div>
      <CardCambiar />
    </>
  );
};

export default CambiarContrasena;
