import React, { useState } from "react"; 
import './menuHamburguesa.css';
import { Button } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const MenuHamburguesa = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuClass = isOpen ? "menu visible" : "menu hidden";

    return (
        <div className="menu-hamburguesa">
            
            {!isOpen && (
                <Button className="buttonBlancoFGrisNBorder" size="sm" onClick={toggleMenu} ><BiMenu  size={18}/></Button>
            )}
            
            {/* 2. El Contenido del Menú Desplegable */}
            <div className={menuClass}>
                
                <div className="menu-header">
                    {/* ... Contenido del logo y título ... */}
                    <div className="menu-logo">
                        <img src="..." alt="DineMeNow Logo" />
                        <strong>DineMeNow</strong>
                        <span>Reservas de restaurantes</span>
                    </div>
                    
                    {/* Botón para cerrar el menú (la X) */}
                    {/* Este es el único lugar donde se usa la 'X' */}
                    <button className="close-button" onClick={toggleMenu}>
                        &times; 
                    </button>
                </div>
                
                {/* ... Resto del contenido de navegación y CTA ... */}
                <nav className="menu-navigation">
                    <h3 className="nav-title">NAVEGACIÓN</h3>
                    <ul>
                        <li>
                            <a href="/">
                                <i className="icon-home"></i> 
                                Buscar Restaurantes
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="menu-session-cta">
                    <p>Inicia sesión para acceder a todas las funciones</p>
                    <button className="btn-login-menu">
                        <i className="icon-login"></i> 
                        Iniciar Sesión
                    </button>
                </div>
            </div>
            
            {/* Overlay para cerrar haciendo clic fuera */}
            {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

        </div>
    );
};

export default MenuHamburguesa;