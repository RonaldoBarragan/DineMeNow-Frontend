import React from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import "./footerSection.css";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function FooterSection() {
  const location = useLocation();
  const currentPath = location.pathname;

  const publicRoutes = ["/","/restaurante/registro"];
  const privateRoutes = ["/cliente/perfil", "/cliente/inicio", "/restaurante/vista", "/restaurante/perfil"];

  const isPublicView = publicRoutes.includes(currentPath);
  const isPrivateView = privateRoutes.includes(currentPath);
  const navigate = useNavigate();
  return (
    <>
    {isPublicView && (
      <div className="menu-session-cta">
        <p>Inicia sesión para acceder a todas las funciones</p>
        <Button className="btn-login-menu"
        onClick={() => navigate("/iniciarsesion")}>
          <BiLogIn size={18} className="login-icon" />
          Iniciar Sesión
        </Button>
      </div>
    )}

    {isPrivateView && (
      <div className="menu-session-cta">
        <Button className="buttonCerrarSesion"
        onClick={() => navigate("/")}>
          <BiLogOut  size={18} className="login-icon" />
          Cerrar Sesión
        </Button>
      </div>
    )}
  </>
  );
}


export default FooterSection;
