import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt,BiUser, BiCalendar, BiBell, BiShield } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import "./navegacionSection.css";
import { useLocation } from "react-router-dom";


function NavigationSection() {
  const location = useLocation();
  const currentPath = location.pathname;

  const publicRoutes = ["/",  "/restaurante/registro"];
  const clientRoutes = ["/cliente/perfil", "/cliente/inicio"];
  const restaurantRoutes = ["/restaurante/vista", "/restaurante/perfil"];
  const adminRoutes = ["/agregar cuando se finalice el desarrollo de las paginas del admin"]

  const isPublicView = publicRoutes.includes(currentPath);
  const isClientView = clientRoutes.includes(currentPath);
  const isRestaurantView = restaurantRoutes.includes(currentPath);
  const isAdminView = adminRoutes.includes(currentPath);

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

        {isClientView && (<>
        <li>
          <NavLink to="/cliente/inicio" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="/cliente/perfil" className="nav-item">
            <BiUser  size={20} className="nav-icon" />
            <span>Mi perfil</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="" className="nav-item">
            <BiCalendar size={20} className="nav-icon" />
            <span>Mis reservas</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="" className="nav-item">
            <BiBell size={20} className="nav-icon" />
            <span>Notificaciones</span>
          </NavLink>
          
        </li>
        </>)}
        {isRestaurantView && (<>
        <li>
          <NavLink to="/restaurante/vista" className="nav-item">
            <BsGear size={20} className="nav-icon" />
            <span>Mi restaurante</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="/restaurante/perfil" className="nav-item">
            <BiUser  size={20} className="nav-icon" />
            <span>Perfil de restaurante</span>
          </NavLink>
          
        </li>
        </>)}
        {isAdminView && (
        <li>
          <NavLink to="/" className="nav-item">
            <BiShield size={20} className="nav-icon" />
            <span>Panel de administracion</span>
          </NavLink>

        </li>
        )}

      </ul>

      <hr className="nav-divider" />
    </nav>
  );
}

export default NavigationSection;
