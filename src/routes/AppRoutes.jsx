import { Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from "../pages/IniciarSesion";
import VerificarToken from "../pages/VerificarToken";
import Recuperar from "../pages/Recuperarcontrasena";
import Home from "../pages/Home";
import Cambiar from "../pages/Cambiarcontrasena";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/cambiar" element={<Cambiar />} />
      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
