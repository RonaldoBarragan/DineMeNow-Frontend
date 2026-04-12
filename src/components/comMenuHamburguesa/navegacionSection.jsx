import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt,BiUser, BiCalendar, BiBell, BiShield } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import "./navegacionSection.css";
import { useAuth } from "../../context/AuthContext";

function NavigationSection() {
  const { user } = useAuth();
  const role = user?.role;

  const isPublicView = !role;
  const isClientView = role === "cliente";
  const isRestaurantView = role === "restaurante";
  const isAdminView = role === "admin";
  const isEmpleadoView = role === "empleado" || role === "mesero";

  return (
    <nav className="menu-navigation">
      <h3 className="nav-title">NAVEGACIÓN</h3>

      <ul>
        {isPublicView && (
        <li>
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
        </li>
      )}

      {isClientView && (
        <>
          <li>
            <NavLink to="/cliente/inicio" className="nav-item">
              <BiHomeAlt size={20} className="nav-icon" />
              <span>Buscar Restaurantes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cliente/perfil" className="nav-item">
              <BiUser size={20} className="nav-icon" />
              <span>Mi perfil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cliente/inicio" className="nav-item">
              <BiCalendar size={20} className="nav-icon" />
              <span>Mis reservas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cliente/inicio" className="nav-item">
              <BiBell size={20} className="nav-icon" />
              <span>Notificaciones</span>
            </NavLink>
          </li>
        </>
      )}

      {isRestaurantView && (
        <>
          <li>
            <NavLink to="/restaurante/vista" className="nav-item">
              <BsGear size={20} className="nav-icon" />
              <span>Mi restaurante</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurante/perfil" className="nav-item">
              <BiUser size={20} className="nav-icon" />
              <span>Perfil de restaurante</span>
            </NavLink>
          </li>
        </>
      )}

      {isEmpleadoView && (
        <li>
          <NavLink to="/mesero/panel" className="nav-item">
            <BsGear size={20} className="nav-icon" />
            <span>Panel de mesero</span>
          </NavLink>
        </li>
      )}

      {isAdminView && (
        <li>
          <NavLink to="/adminp/panel" className="nav-item">
            <BiShield size={20} className="nav-icon" />
            <span>Panel de administración</span>
          </NavLink>
        </li>
      )}

      </ul>

      <hr className="nav-divider" />
    </nav>
  );
}

export default NavigationSection;
