import { Routes, Route, Navigate } from 'react-router-dom';
import IniciarSesion from '../pages/IniciarSesion';
import VerificarToken from '../pages/VerificarToken';
import Home from '../pages/Home';
import CrearCuentaCliente from '../pages/CrearCuentaCliente';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/CrearCuenta" element={<CrearCuentaCliente/>} />
 
      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}