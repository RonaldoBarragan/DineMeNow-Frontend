import React from "react";
import CardCambiar from "../components/comRecuperarContrasena/CardCambioContrasena";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
const Cambiar = () => {
  return (
    <>
      <BotonCancelar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* Contenido principal centrado */}
        <div className="flex-1 flex items-center justify-center">
          <CardCambiar />
        </div>

        {/* Logo en la parte inferior */}
        <div className="mb-8 pb-4">
          <ImgLogoGlobal />
        </div>
      </div>
    </>
  );
};

export default Cambiar;
