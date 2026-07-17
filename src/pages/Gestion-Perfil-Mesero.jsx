import { Container } from "react-bootstrap";
import Card_Info_Perfil from "../components/comGestionPerfilMesero/Card-info-perfil";
import "../components/comGestionPerfilMesero/style-page-mesero.css"
import Nav_Mesero from "../components/comGestionPerfilMesero/Nav-Mesero";

export default function Perfil_Mesero() {
    return (
        <>
        <Container className="margen-provi width-container-cards">
            <Card_Info_Perfil />
            <Nav_Mesero />
        </Container>
        </>
    )
}