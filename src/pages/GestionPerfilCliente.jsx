import { Container } from "react-bootstrap"
import HeadSectionGP from "../components/comGestionPerfilCliente/headSectionGP";
import NavSectionGPestionPerfil from "../components/comGestionPerfilCliente/Nav-Secciones";

export default function GestionPerfilCliente() {
    return (
        <Container className="container py-5 container-cards">
        <div className='mt-5'>
            <HeadSectionGP></HeadSectionGP>
            <div className="mt-3">
                <NavSectionGPestionPerfil></NavSectionGPestionPerfil>
            </div>
            
        </div>
        </Container>
    )
}