import { Link } from "react-router-dom";
import './estilos/Header.css';
import '../../design/global.css';
import logoiniciosesion from "../../assets/logo-inicio-sesion2.jpg";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MenuHamburguesa from "../comMenuHamburguesa/menuHamburguesa";


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
            <img src={logoiniciosesion} alt="dinemenow logo" className="header-logo"/>
            <strong className="header-title">DineMeNow</strong>
          </Link>
          
        </div>
        {/* FIN*/}

        {/* Botones*/}
        <div className="header-buttons">
          <button className="btn-register"
          onClick={() => navigate("/crear-cuenta")}>
            Registrarse
          </button>
          <button className="buttonNaranjaDegrade"
          onClick={()=> navigate("/IniciarSesion")}><BiLogIn size={18} className="login-icon" />
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}