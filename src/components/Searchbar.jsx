import {FaSearch, FaMapMarkerAlt} from "react-icons/fa";

const Searchbar = () => {
    retrun(
        
    <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-30px",
        marginBottom: "40px"
    }}>

        <div className="search-bar"
        style={{
            background: "white",
            padding: "15",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "felx",
            width: "70%",
            alignItems: "center"
        }}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                flex: 1
            }}>
                <FaSearch style={{
                    marginRight: "10px",
                    color: "#888"
                }}/>
                <input
                type="text"
                placeholder="¿Que tipo de comida buscas?"
                style={{
                    width: "100%",
                    border: "none",
                    outline: "none"
                }}/>
            </div>
            
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <FaMapMarkerAlt style={{
                    marginRight: "10px",
                    color:" #888"
                }}/>

                <select style={{
                    border:"none",
                    outline: "none"
                }}>
                <option>Todas las zonas</option>
                </select>

            </div>

            <button style={{
                background: "#ff5722",
                color: "white",
                borderRadius: "10px",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer"
            }}>
                Buscar Restaurantes
            </button>

        </div>

    </div>
);
}

export default Searchbar;
