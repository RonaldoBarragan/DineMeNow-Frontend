import { useState } from 'react';
import './estilos/Searchbar.css';
import { FiSearch, FiMapPin } from 'react-icons/fi';

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
              <FiSearch size={16}/>
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
              <FiMapPin size={16}/>
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
