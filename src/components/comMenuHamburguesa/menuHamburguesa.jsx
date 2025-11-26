import React, { useState } from "react"; 
import './menuHamburguesa.css';
import { Button } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import HeaderSection from "./headerSection";
import NavigationSection from "./navegacionSection";
import FooterSection from "./footerSection";

function MenuHamburguesa (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-hamburguesa">
            {!isOpen && (
                <Button 
                    className="buttonBlancoFGrisNBorder" 
                    size="sm" 
                    onClick={toggleMenu}
                >
                    <BiMenu size={18}/>
                </Button>
            )}
            
            <div className={`menu ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="menu-header">
                    <HeaderSection 
                        onClose={toggleMenu} 
                        showCloseButton={true} 
                    />
                </div>
                 <NavigationSection />
               <FooterSection></FooterSection>
            </div>
            
            {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    );
};

export default MenuHamburguesa;