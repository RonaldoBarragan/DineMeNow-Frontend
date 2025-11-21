import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <span className="menu-icon">☰</span>
        <span className="logo">🍽️ DineMeNow</span>
      </div>

      <div className="right">
        <Link className="btn-register">Registrarse</Link>
        <Link className="btn-login">Iniciar Sesión</Link>
      </div>
    </header>
  );
}
