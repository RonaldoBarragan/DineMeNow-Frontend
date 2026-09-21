import { Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getRestaurantByEmpleadoIdAcc } from "../api/Restaurant-Service";
import Card_info_Chef from "../components/comGestionPanelChef/Card-info-Chef";
import "../components/comGestionPanelChef/style-page.css";
import Chef_Info_Reservas from "../components/comGestionPanelChef/Card-info-reservas";

export default function Panel_Chef() {
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
            <Card_info_Chef nameRestaurant={restaurantData?.nombre} />

            <Chef_Info_Reservas idRestaurant={restaurantData?.id} />
            
        </Container>
        </>
    )
}