import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search-left">
          <FaSearch className="icon"/>
          <input type="text" placeholder="¿Qué tipo de comida buscas?" />
        </div>

        <div className="search-location">
          <FaMapMarkerAlt className="icon"/>
          <select>
            <option>Todas las zonas</option>
          </select>
        </div>

        <button className="btn-search">Buscar Restaurantes</button>
      </div>
    </div>
  );
};

export default Searchbar;
