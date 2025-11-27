import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi"; 
import "./navegacionSection.css";

function NavigationSection() {
  return (
    <nav className="menu-navigation">
      <h3 className="nav-title">NAVEGACIÓN</h3>

      <ul>
        <li>
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li>
        {/* <li>
          <NavLink to="/" className="nav-item">
            <BiHomeAlt size={20} className="nav-icon" />
            <span>Buscar Restaurantes</span>
          </NavLink>
          
        </li> */}
      </ul>

      <hr className="nav-divider" />
    </nav>
  );
}

export default NavigationSection;
