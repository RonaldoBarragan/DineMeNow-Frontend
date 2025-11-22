import { useState } from 'react';
import './estilos/Searchbar.css';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zone, setZone] = useState('all');

  const handleSearch = () => {
    console.log('Buscando:', { searchTerm, zone });
    // Aquí agregar la lógica de búsqueda
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-card">
        <div className="searchbar-container">
          
          {/* Campo de búsqueda */}
          <div className="search-input-group">
            <span className="search-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="¿Qué tipo de comida buscas?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Línea divisoria */}
          <div className="searchbar-divider"></div>
          
          {/* Selector de zona */}
          <div className="zone-select-group">
            <span className="zone-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </span>
            <select 
              className="zone-select"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <option value="all">Todas las zonas</option>
              <option value="rosa">Zona Rosa</option>
              <option value="chapinero">Chapinero</option>
              <option value="usaquen">Usaquén</option>
              <option value="candelaria">La Candelaria</option>
            </select>
          </div>
          
          {/* Botón de búsqueda */}
          <div className="search-button-group">
            <button 
              className="search-button"
              onClick={handleSearch}
            >
              Buscar Restaurantes
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
