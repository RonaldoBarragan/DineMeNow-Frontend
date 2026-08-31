import { Card, Tab, Tabs } from "react-bootstrap";
import Section_GestionR_Mesero from "./Section-GestionR-Mesero";
import Section_VistaMenu_Mesero from "./Section-VistaMenu-Mesero";
import Section_VistaMesas_Mesero from "./Section-VistaMesas-Mesero";
import './style-Mesero.css';
import { getRestaurantByEmpleadoIdAcc } from "../../api/Restaurant-Service";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function CardSections() {
    const { user } = useAuth();

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const restaurantData = await getRestaurantByEmpleadoIdAcc(user.id);
                console.log("Datos del restaurante obtenidos:", restaurantData);
            } catch (error) {
                console.error("Error al obtener los datos del restaurante:", error);
            }
        };
        fetchRestaurantData();
    }, []);

  return (    
    <>
    <Card className="p-2 mb-3 sin-borde">
        <Tabs defaultActiveKey="Gestion reservas" className="rounded-pill tab-mesero mb-4" variant="pills" justify >
            <Tab eventKey="Gestion reservas" title="Gestión de Reservas">
                <Section_GestionR_Mesero /> 
            </Tab>
            <Tab eventKey="Vista menu" title="Vista del Menú">
                <Section_VistaMenu_Mesero />
            </Tab>
            <Tab eventKey="Vista mesas" title="Vista de Mesas">
                <Section_VistaMesas_Mesero />
            </Tab>
        </Tabs>
    </Card>
    </>  
    )
}