import { Container } from "react-bootstrap";
import Card_Acc from "../components/comAdmin-Plataform/Card-Info-Acc";
import '../components/comAdmin-Plataform/style-page.css';
import Card_stats from "../components/comAdmin-Plataform/Card-stats";
import Nav_Section from "../components/comAdmin-Plataform/NavSections";
import { useEffect, useState } from "react";
import { obtenerAllClientes } from "../api/AdminPlatService";
import { obtenerAllActivesRestaurantes } from "../api/AdminPlatService";
import Header from "../components/comHomePage/Header";

export default function AdminP_Panel() {
    const [clientes, setClientes] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    const [refresh, setRefresh] = useState(0);

    const triggerRefresh = () => setRefresh(prev => prev + 1);
    
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
        }, [refresh]);
        
    return (
        <>
        <Header viewMode="results" />
        <Container className='margen-provi container-cards'>
            <Card_Acc />
            <Card_stats totalClientes={clientes.length} totalRestaurantes={restaurantes.length} refresh={refresh} />
            <Nav_Section clientes={clientes} restaurantes={restaurantes} setRestaurantes={setRestaurantes} onRefresh={triggerRefresh} />
        </Container>
        </>
    )
}