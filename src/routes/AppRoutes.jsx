import { Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from "../pages/IniciarSesion";
import VerificarToken from "../pages/VerificarToken";
import Recuperar from "../components/comRecuperarContraseña/Contraseña";
import Cambiar from "../components/comRecuperarContraseña/CambioContraseña";
import Home from "../pages/Home";
import Registro_Restaurante from "../pages/Registro-Restaurantes";
import CrearCuentaCliente from "../pages/CrearCuentaCliente";
import PerfilRestaurante from "../pages/Perfil-Restaurante";
import Title from "../components/comPerfilRestaurante/title";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/Registro-restaurantes" element={<Registro_Restaurante />} />
      <Route path="/crear-cuenta" element={<CrearCuentaCliente />} />
      <Route path="/recuperar" element={<Recuperar />} />
      <Route path="/cambiar" element={<Cambiar />} />
      
      
      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
