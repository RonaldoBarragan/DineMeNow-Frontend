import './estilos/Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Encuentra el restaurante perfecto en <span className="hero-highlight">Bogotá</span>
        </h1>
        <p className="hero-subtitle">
          Descubre restaurantes por zona, verifica disponibilidad en tiempo real y haz reservas al instante
        </p>
      </div>
    </div>
  );
}
