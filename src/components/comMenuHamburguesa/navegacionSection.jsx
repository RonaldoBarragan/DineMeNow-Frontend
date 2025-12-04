import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi"; 
import "./navegacionSection.css";
import { useLocation } from "react-router-dom";

function NavigationSection() {
  const location = useLocation();
  const currentPath = location.pathname;

  const publicRoutes = ["/", "/registro-restaurantes", "/acerca-de"];

  const clientRoutes = ["/vista-cliente", "/reservas", "/favoritos"];

  const isPublicView = publicRoutes.includes(currentPath);
  const isClientView = clientRoutes.includes(currentPath);


   // Menú de Administrador (Ruta: '/vista-administrador')
  const isAdminView = currentPath === "/vista-administrador";
  // Menú de Restaurante (Nueva Ruta: '/vista-restaurante')
  const isRestaurantView = currentPath === "/vista-restaurante";


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
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li>
        <li>
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li>
        </>)}

      </ul>

      <hr className="nav-divider" />
    </nav>
  );
}

export default NavigationSection;
