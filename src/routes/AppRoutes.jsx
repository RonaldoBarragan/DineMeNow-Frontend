import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPrueba from '../pages/login';


// ------------------------------------------------------------
// ZONA DE IMPORTACIONES (Descomentar cuando existan los archivos)
// ------------------------------------------------------------
// import Home from '../pages/Home';
// import Login from '../pages/Login';


// ------------------------------------------------------------
// COMPONENTES DUMMY (Para que no de error mientras crean las paginas)
// Eliminar esto cuando tus compañeros creen los archivos reales
// ------------------------------------------------------------
const HomeDummy = () => <h2 className="text-center mt-5">🏡 Página Home (Pendiente)</h2>;
//const LoginDummy = () => <h2 className="text-center mt-5">🔐 Página Login (Pendiente)</h2>;


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas usando los Dummys */}
      <Route path="/" element={<HomeDummy />} />
      <Route path="/login" element={<LoginPrueba />} />

      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}