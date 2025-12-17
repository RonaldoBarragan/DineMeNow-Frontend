import { Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from "../pages/IniciarSesion";
import VerificarToken from "../pages/VerificarToken";
import RecuperarContrasena from "../pages/Recuperarcontrasena";
import Home from "../pages/Home";
import Registro_Restaurante from "../pages/Registro-Restaurantes";
import CrearCuentaCliente from "../pages/CrearCuentaCliente";
import CambiarContrasena from "../pages/Cambiarcontrasena";
import GestionPerfilCliente from "../pages/GestionPerfilCliente";
import InicioClientes from "../pages/InicioClientes";
import Vista_Restaurante from "../pages/Vista-Restaurante";
import PerfilRestaurante from "../pages/Perfil-Restaurante";



export const AppRoutes = () => {
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarsesion" element={<IniciarSesion />} />
      <Route path="/verificartoken" element={<VerificarToken />} />
      <Route path="/restaurante/registro" element={<Registro_Restaurante />} />
      <Route path="/crearcuenta" element={<CrearCuentaCliente />} />
      <Route path="/recuperarcontrasena" element={<RecuperarContrasena />} />
      <Route path="/cambiarcontrasena" element={<CambiarContrasena />} />
      <Route path="/cliente/perfil" element={<GestionPerfilCliente />} />
      <Route path="/cliente/inicio" element={<InicioClientes />} />
       <Route path="/restaurante/vista" element={<Vista_Restaurante />} />
       <Route path="/restaurante/perfil" element={<PerfilRestaurante />} />
      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
