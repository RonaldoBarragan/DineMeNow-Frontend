import { Card, Container } from "react-bootstrap";
import Card_info_mesero from "../components/comGestionPanelMesero/Card-info-Mesero"
import Card_stats_mesero from "../components/comGestionPanelMesero/Card-stats-mesero";
import '../components/comVista-Restaurante/style.css';
import CardSections from "../components/comGestionPanelMesero/CardSections";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getRestaurantByEmpleadoIdAcc } from "../api/Restaurant-Service";

export default function Panel_Mesero() {
    const { user } = useAuth();
    const [ restaurantData, setRestaurantData ] = useState(null);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const restaurant = await getRestaurantByEmpleadoIdAcc(user.id);
                setRestaurantData(restaurant);
            } catch (error) {
                console.error("Error al obtener los datos del restaurante:", error);
            }
        };
        fetchRestaurantData();
    }, []);

    return (
        <>
        <Container className='my-4  margen-provi'>
            <Card_info_mesero nameRestaurant={restaurantData?.nombre} />
            <div className="mt-3">
            <Card_stats_mesero idRestaurant={restaurantData?.id} />
            </div>
            <Card className="p-3">
                <CardSections idRestaurant={restaurantData?.id} />
            </Card>
        </Container>
        </>
    )
}