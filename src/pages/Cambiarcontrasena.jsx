import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import BotonCancelar from "../components/common/botonCancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
import CardCambiar from "../components/comRecuperarContrasena/CardCambioContrasena";

const CambiarContrasena = () => {
  const location = useLocation();
  const resetToken = location.state?.resetToken;

  if (!resetToken) {
    return <Navigate to="/recuperarcontrasena" replace />;
  }

  return (
    <>
      <BotonCancelar />
      <div style={{ paddingTop: "120px", textAlign: "center" }}>
        <ImgLogoGlobal />
      </div>
      <CardCambiar resetToken={resetToken} />
    </>
  );
};

export default CambiarContrasena;