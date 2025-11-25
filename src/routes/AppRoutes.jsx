import { Routes, Route, Navigate } from 'react-router-dom';
import IniciarSesion from '../pages/IniciarSesion';
import VerificarToken from '../pages/VerificarToken';
import Home from '../pages/Home';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />

      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}