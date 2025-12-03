import { Routes, Route, Navigate } from 'react-router-dom';
import IniciarSesion from '../pages/IniciarSesion';
import VerificarToken from '../pages/VerificarToken';
import Home from '../pages/Home';
import Registro_Restaurante from '../pages/Registro-Restaurantes';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/registro-restaurantes" element={<Registro_Restaurante />} />

      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}