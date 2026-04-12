import { Container } from "react-bootstrap";
import Card_Acc from "../components/comAdmin-Plataform/Card-Info-Acc";
import '../components/comAdmin-Plataform/style-page.css';
import Card_stats from "../components/comAdmin-Plataform/Card-stats";
import Nav_Section from "../components/comAdmin-Plataform/NavSections";
import { useEffect, useState } from "react";
import { obtenerAllClientes } from "../api/Client";
import { obtenerAllActivesRestaurantes } from "../api/AdminPlatService";

export default function AdminP_Panel() {
    const [clientes, setClientes] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    
        //Cargar todos los clientes
        useEffect(() => {
            const consultClientes = async () => {
            try {
                const data = await obtenerAllClientes();
                setClientes(data);
            } catch (err) {
                alert('No se pudieron cargar los clientes.');
            }
            };
            consultClientes();
        }, []);

        //Cargar los restaurantes activos
        useEffect(() => {
        const cargar = async () => {
            try {
                const data = await obtenerAllActivesRestaurantes();
                setRestaurantes(data);
            } catch (error) {
                console.error(error);
            }
        };
            cargar();
        }, []);
        
    return (
        <>
        <Container className='margen-provi container-cards'>
            <Card_Acc />
            <Card_stats totalClientes={clientes.length} totalRestaurantes={restaurantes.length} />
            <Nav_Section clientes={clientes} restaurantes={restaurantes} setRestaurantes={setRestaurantes} />
        </Container>
        </>
    )
}