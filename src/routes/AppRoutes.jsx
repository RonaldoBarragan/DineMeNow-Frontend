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
import Panel_Mesero from "../pages/GestionPanelMesero";
import AdminP_Panel from "../pages/AdminP-Panel";
import ReservasCliente from "../pages/Reservas-Cliente";
import ProtectedRoute from "./ProtectedRoute";
import ActualizarContraRestau from "../pages/ActualizarContraRestau";
import GestionEmpleadosRestaurante from "../components/comGestionEmpleadosRestaurante/title-GestionEmple";





export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciarsesion" element={<IniciarSesion />} />
      <Route path="/verificartoken" element={<VerificarToken />} />
      <Route path="/restaurante/registro" element={<Registro_Restaurante />} />
      <Route path="/crearcuenta" element={<CrearCuentaCliente />} />
      <Route path="/recuperarcontrasena" element={<RecuperarContrasena />} />
      <Route path="/cambiarcontrasena" element={<CambiarContrasena />} />
      <Route path="/actualizar-contraresta" element={<ActualizarContraRestau />} />
      <Route path="/gestionEmpleadosRestaurante" element={<GestionEmpleadosRestaurante/>}/>
      <Route
        path="/cliente/perfil"
        element={
          <ProtectedRoute role="cliente">
            <GestionPerfilCliente />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cliente/reservas"
        element={
          <ProtectedRoute role="cliente">
            <ReservasCliente />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cliente/inicio"
        element={
          <ProtectedRoute role="cliente">
            <InicioClientes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/restaurante/vista"
        element={
          <ProtectedRoute role="restaurante">
            <Vista_Restaurante />
          </ProtectedRoute>
        }
      />
      <Route
        path="/restaurante/perfil"
        element={
          <ProtectedRoute role="restaurante">
            <PerfilRestaurante />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mesero/panel"
        element={
          <ProtectedRoute role={["empleado", "mesero"]}>
            <Panel_Mesero />
          </ProtectedRoute>
        }
      />
      <Route
        path="/adminp/panel"
        element={
          <ProtectedRoute role="admin">
            <AdminP_Panel />
          </ProtectedRoute>
        }
      />
    
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
