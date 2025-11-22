import { useState } from 'react';
import './estilos/Restaulist.css';

// Componente de tarjeta individual
function RestaurantCard({ name, image, rating, zone, distance, cuisines }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img 
          src={image} 
          alt={name}
          className="restaurant-image"
        />
        <button 
          className="favorite-button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Marcar como favorito"
        >
          <svg 
            width="16" 
            height="16" 
            fill={isFavorite ? '#dc3545' : 'none'}
            stroke={isFavorite ? '#dc3545' : '#6c757d'}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      
      <div className="restaurant-body">
        <div className="restaurant-header">
          <h6 className="restaurant-name">{name}</h6>
          <span className="restaurant-rating">
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            {rating}
          </span>
        </div>
        
        <div className="restaurant-cuisines">
          {cuisines.map((cuisine, idx) => (
            <span key={idx} className="cuisine-badge">
              {cuisine}
            </span>
          ))}
        </div>
        
        <div className="restaurant-info">
          <span className="info-item">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {zone}
          </span>
          <span className="info-item">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
            </svg>
            {distance}
          </span>
        </div>
      </div>
    </div>
  );
}

// Componente principal de lista
export default function Restaulist() {
  const restaurants = [
    {
      name: "La Mesa Criolla",
      image: "https://acortar.link/tWfaqT",
      rating: "4.8",
      zone: "Zona Rosa",
      distance: "1.2 km",
      cuisines: ["Colombiana", "Típica"]
    },
    {
      name: "Bella Napoli",
      image: "https://acortar.link/oQS3bA",
      rating: "4.7",
      zone: "Chapinero",
      distance: "850 m",
      cuisines: ["Italiana", "Pizza"]
    },
    {
      name: "Sabor Sushi",
      image: "https://acortar.link/PnN8Ef",
      rating: "4.9",
      zone: "Usaquén",
      distance: "2.1 km",
      cuisines: ["Japonesa", "Sushi"]
    },
    {
      name: "El Mesón Gourmet",
      image: "https://acortar.link/fEdjHY",
      rating: "4.6",
      zone: "La Candelaria",
      distance: "3.5 km",
      cuisines: ["Internacional", "Gourmet"]
    }
  ];

  return (
    <div className="restaurant-list">
      <div className="restaurant-list-container">
        <h3 className="restaurant-list-title">Restaurantes disponibles</h3>
        
        <div className="restaurant-grid">
          {restaurants.map((restaurant, idx) => (
            <RestaurantCard key={idx} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}