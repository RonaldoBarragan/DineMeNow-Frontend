import { Routes, Route, Navigate } from 'react-router-dom';
import IniciarSesion from '../pages/IniciarSesion';
import VerificarToken from '../pages/VerificarToken';
import Home from '../pages/Home';
import Formregristrousu from '../components/comRegistroCliente/formulario';
import ImgLogoRegistro from '../components/comRegistroCliente/imgLogo';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarSesion" element={<IniciarSesion />} />
      <Route path="/verificarToken" element={<VerificarToken />} />
      <Route path="/Crearcuenta" element={<Formregristrousu />} />
      <Route path="/Ver" element={<ImgLogoRegistro />} />

      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}