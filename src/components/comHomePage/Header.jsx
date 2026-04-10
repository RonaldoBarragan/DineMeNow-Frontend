import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./estilos/Header.css";
import "../../design/global.css";
import logoiniciosesion from "../../assets/logo-inicio-sesion2.jpg";
import { Search } from "react-bootstrap-icons";
import { BiLogIn } from "react-icons/bi";
import MenuHamburguesa from "../comMenuHamburguesa/menuHamburguesa";
import { Button } from "react-bootstrap";
import { consultarPerfil } from '../../api/ClientRegister'; // Asegúrate de tener esta función en tu servicio
import { useEffect, useState} from 'react';
import { useAuth } from "../../context/AuthContext"; // ajusta la ruta

// ========================================
// SUB-COMPONENTES PARA EL MODO CLIENTE
// ========================================


const UserProfile = () => {
  const { user } = useAuth();
  const [perfilData, setPerfilData] = useState(null);  // ← hooks primero

  useEffect(() => {
    if (!user?.id) return;
    const cargarPerfil = async () => {
      try {
        const data = await consultarPerfil(user.id);
        setPerfilData(data);
      } catch (error) {
        console.error("Error al cargar perfil:", error);
      }
    };
    cargarPerfil();
  }, [user?.id]);

  // Lógica después de los hooks
  const nombreCompleto = perfilData 
    ? `${perfilData.nombreCliente} ${perfilData.apellido}` 
    : user?.nombre ?? "";

  const initials = perfilData
  ? `${perfilData.nombreCliente[0]}${perfilData.apellido[0]}`.toUpperCase()
  : user?.nombre?.[0]?.toUpperCase() ?? "?";

  return (
    <div className="header-profile">
      <div className="user-avatar">{initials}</div>
      <div className="profile-info">
        <span className="user-name">{nombreCompleto}</span>
        <small className="text-muted" style={{ textTransform: "capitalize" }}>
          {user?.role || ""}
        </small>
      </div>
    </div>
  );
};

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

export default function Header({ viewMode }) {
  const { user } = useAuth(); 
  
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
            <UserProfile user={user} />
          </>
        ) : (
          // Botones de autenticación (solo en otros modos)
          <AuthButtons />
        )}
      </div>
    </nav>
  );
}