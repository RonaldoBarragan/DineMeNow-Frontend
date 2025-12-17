import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./estilos/Header.css";
import "../../design/global.css";
import logoiniciosesion from "../../assets/logo-inicio-sesion2.jpg";
import { Search } from "react-bootstrap-icons";
import { BiLogIn } from "react-icons/bi";
import MenuHamburguesa from "../comMenuHamburguesa/menuHamburguesa";
import { Button } from "react-bootstrap";

// ========================================
// SUB-COMPONENTES PARA EL MODO CLIENTE
// ========================================

// Componente del perfil de usuario
const UserProfile = ({ userName = "Cliente" }) => (
  <div className="header-profile">
    <div className="user-avatar">MG</div>

    <div className="profile-info">
      <span className="user-name">{userName}</span>
      <small className="text-muted">Cliente</small> 
    </div>
  </div>
);

// Componente del input de búsqueda
const SearchInput = () => (
  <div className="header-search flex-grow-1 mx-4">
    <div className="input-group">
      <span className="input-group-text">
        <Search size={14} color="#99a1af"/>
      </span>
      <input
        className="form-control"
        placeholder="Buscar restaurantes o zonas en Bogotá..."
        type="text"
      />
    </div>
  </div>
);

// ========================================
// COMPONENTE PRINCIPAL HEADER
// ========================================

export default function Header({ viewMode, userName }) {
  const navigate = useNavigate();

  // Botones de autenticación
  const AuthButtons = () => (
    <div className="header-buttons">
      <Button
        className="buttonRegistrarUS" 
        size="sm"
        onClick={() => navigate("/crearcuenta")}
      >
        Registrarse
      </Button>
      <Button
        className="buttonNaranjaDegrade" 
        size="sm"
        onClick={() => navigate("/iniciarsesion")}
      > 
        <BiLogIn size={18} className="login-icon" />
        Iniciar sesión
      </Button>
    </div>
  );

  // Determinar si mostrar el header de búsqueda
  const showSearchHeader = viewMode === "results" || viewMode === "reserva";

  return (
    <nav className="header-nav">
      <div className="header-container">
        {/* menu+logo */}
        <div className="header-brand-group">
          {/* Menú Hamburguesa - SIN wrapper extra */}
          <MenuHamburguesa />

          {/* Logo y Nombre */}
          <Link to="/" className="header-brand">
            <img
              src={logoiniciosesion}
              alt="dinemenow logo"
              className="header-logo"
            />
            <strong className="header-title">DineMeNow</strong>
          </Link>
        </div>
        
        {/* Input de búsqueda (solo en modo cliente) */}
        {showSearchHeader ? (
          <>
            <SearchInput />
            <UserProfile userName={userName} />
          </>
        ) : (
          // Botones de autenticación (solo en otros modos)
          <AuthButtons />
        )}
      </div>
    </nav>
  );
}