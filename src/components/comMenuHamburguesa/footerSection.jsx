import React from "react";
import { BiLogIn } from "react-icons/bi";
import "./footerSection.css";
import { Button } from "react-bootstrap";

function FooterSection() {
  return (
    <div className="menu-session-cta">
      <p>Inicia sesión para acceder a todas las funciones</p>
        <Button className="btn-login-menu"><BiLogIn size={18} className="login-icon" />
        Iniciar Sesión</Button>

    </div>
  );
}

export default FooterSection;
