import './estilos/Footer.css';
import Button from 'react-bootstrap/Button';
import logoiniciosesion from "../../assets/logo-inicio-sesion2.jpg";
import "../../design/global.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Sección CallToAction */}
        <div className="footer-cta">
          <h5 className="footer-cta-title">¿Tienes un restaurante?</h5>
          <p className="footer-cta-text">
            Únete a DineMeNow y conecta tu negocio con más clientes
          </p>

          <Button
            className="buttonRegistrarRE"
            size='sm'
            onClick={() => navigate("/restaurante/registro")}
          >
            Registra tu restaurante
          </Button>
        </div>
</div>
        {/* Sección blanca */}
        <div className="footer-info-section">

          <div className="footer-info-grid">
            <div className="footer-info-column">
              <div className="footer-brand">
                <img src={logoiniciosesion} alt="dinemenow logo" className="header-logo"/>
                <strong className="footer-brand-name">DineMeNow</strong>
              </div>
              <p className="footer-info-text">
                La mejor manera de encontrar y reservar restaurantes en Bogotá
              </p>
            </div>

            <div className="footer-info-column">
              <h6 className="footer-info-title">Para Comensales</h6>
              <ul className="footer-info-list">
                <li><a href="#" className="footer-info-link">Restaurantes</a></li>
                <li><a href="#" className="footer-info-link">Mis reservas</a></li>
              </ul>
            </div>

            <div className="footer-info-column">
              <h6 className="footer-info-title">Para Restaurantes</h6>
              <ul className="footer-info-list">
                <li><a href="#" className="footer-info-link">Registrar Restaurante</a></li>
                <li><a href="#" className="footer-info-link">Planes</a></li>
              </ul>
            </div>

            <div className="footer-info-column">
              <h6 className="footer-info-title">Soporte</h6>
              <ul className="footer-info-list">
                <li><a href="#" className="footer-info-link">Centro de Ayuda</a></li>
                <li><a href="#" className="footer-info-link">Contacto</a></li>
                <li><a href="#" className="footer-info-link">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>
        </div> 

        {/* Copyright */}
        <div className="footer-copyright">
          <small>© 2025 DineMeNow. Todos los derechos reservados.</small>
        </div>

      
    </footer>
  );
}
