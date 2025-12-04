import { Link } from "react-router-dom";
import "./estilos/Header.css";
import "../../design/global.css";
import logoiniciosesion from "../../assets/logo-inicio-sesion2.jpg";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MenuHamburguesa from "../comMenuHamburguesa/menuHamburguesa";
import { Button } from "react-bootstrap";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="header-nav">
      <div className="header-container">
        {/* menu+logo */}
        <div className="header-brand-group">
          {/* Grupo 1: Menú Hamburguesa */}
          <div className="burger-wraper">
            <MenuHamburguesa></MenuHamburguesa>
          </div>

          {/* Grupo 2: Logo y Nombre */}
          <Link to="/" className="header-brand">
            <img
              src={logoiniciosesion}
              alt="dinemenow logo"
              className="header-logo"
            />
            <strong className="header-title">DineMeNow</strong>
          </Link>
        </div>
        {/* FIN*/}

        {/* Botones*/}
        <div className="header-buttons">
          <Button
            className="btn-register" size="sm"
            onClick={() => navigate("/crear-cuenta")}
          >
            Registrarse
          </Button>
          <Button
            className="buttonNaranjaDegrade" size="sm"
            onClick={() => navigate("/iniciarSesion")}
          > 
            <BiLogIn size={18} className="login-icon" />
            Iniciar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
}
