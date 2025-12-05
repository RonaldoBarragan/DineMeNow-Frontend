import React from "react";
import CardRecuperar from "../components/comRecuperarContrasena/CardRecuperarContrasena";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";

const Recuperarcontrasena = () => {
  return (
    <>
      <BotonCancelar />
      <div style={{ paddingTop: "155px", textAlign: "center" }}>
        <ImgLogoGlobal />
        <CardRecuperar />
      </div>
    </>
  );
};

export default Recuperarcontrasena;
