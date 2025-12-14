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
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/Registro-restaurantes" element={<Registro_Restaurante />} />
      <Route path="/crear-cuenta" element={<CrearCuentaCliente />} />
      <Route path="/recuperarcontrasena" element={<RecuperarContrasena />} />
      <Route path="/cambiarcontrasena" element={<CambiarContrasena />} />
      <Route path="/gestionperfilcliente" element={<GestionPerfilCliente />} />
      <Route path="/inicio-clientes" element={<InicioClientes />} />
      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
