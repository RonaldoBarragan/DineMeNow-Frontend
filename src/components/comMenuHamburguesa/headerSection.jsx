import React from "react";
import { Image } from "react-bootstrap";
import LogoGlobal from "../../assets/logo-inicio-sesion2.jpg";
import "./headerSection.css";

function HeaderSection({ onClose }) {
  return (
    <div className="mh-header">

      <Image 
        src={LogoGlobal}
        alt="Logo"
        rounded
        className="mh-logo"
      />

      <div className="mh-info">
        <h4>DineMeNow</h4>
        <p>Reservas de restaurantes</p>
      </div>

      <button className="mh-close" onClick={onClose}>
        &times;
      </button>

    </div>
  );
}

export default HeaderSection;
