import { Link } from "react-router-dom";
import './estilos/Header.css';

export default function Header() {
  return (
    <nav className="header-nav">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <div className="header-logo">
            <strong>D</strong>
          </div>
          <strong className="header-title">DineMeNow</strong>
        </Link>
        <div className="header-buttons">
          <Link to="/registro" className="btn-register">
            Registrarse
          </Link>
          <Link to="/login" className="btn-login">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}