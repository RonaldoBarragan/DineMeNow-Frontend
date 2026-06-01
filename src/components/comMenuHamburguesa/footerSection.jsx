import React from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import "./footerSection.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function FooterSection() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isLoggedIn = Boolean(user);

  const handleLogout = () => {
    navigate('/', { replace: true });
    logout();
  };

  return (
    <>
    {!isLoggedIn && (
      <div className="menu-session-cta">
        <p>Inicia sesión para acceder a todas las funciones</p>
        <Button className="btn-login-menu"
        onClick={() => navigate("/iniciarsesion")}>
          <BiLogIn size={18} className="login-icon" />
          Iniciar Sesión
        </Button>
      </div>
    )}

    {isLoggedIn && (
      <div className="menu-session-cta">
        <Button className="buttonCerrarSesion"
        onClick={handleLogout}>
          <BiLogOut  size={18} className="login-icon" />
          Cerrar Sesión
        </Button>
      </div>
    )}
  </>
  );
}


export default FooterSection;
